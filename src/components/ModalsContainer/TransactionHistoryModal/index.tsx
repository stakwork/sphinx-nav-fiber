import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { BaseModal } from '~/components/Modal'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getBalance } from '~/network/balance'
import { getLsatHistory } from '~/network/lsatHistory'
import { topUpConfirm } from '~/network/topUpConfirm'
import { topUpLsat } from '~/network/topUpLsat'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { LsatHistoryResponse } from '~/types'
import { getLSat } from '~/utils/getLSat'
import { payLsat } from '~/utils/payLsat'
import { colors } from '~/utils/colors'

type Transaction = {
  macaroon: string
  endpoint: string
  amount: number
  created_at?: string
}

type TopUpStatus = 'idle' | 'generating' | 'awaiting_payment' | 'success' | 'error'

const truncateMacaroon = (macaroon: string) =>
  macaroon.length > 12 ? `${macaroon.slice(0, 8)}…${macaroon.slice(-4)}` : macaroon

const formatDate = (ts?: string): string => {
  if (!ts) {
    return '—'
  }

  try {
    return new Date(ts).toLocaleString()
  } catch {
    return ts
  }
}

export const TransactionHistoryModal = () => {
  const { close, visible } = useModal('transactionHistory')
  const setBudget = useUserStore((s) => s.setBudget)
  const budget = useUserStore((s) => s.budget)

  const [, setLsats] = useState<LsatHistoryResponse['lsats']>([])
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [activeMacaroon, setActiveMacaroon] = useState<string>('')
  const [lsatToken, setLsatToken] = useState<string>('')
  const [loading, setLoading] = useState(false)

  // Top-up state
  const [topUpAmount, setTopUpAmount] = useState<number | ''>('')
  const [amountError, setAmountError] = useState('')
  const [topUpStatus, setTopUpStatus] = useState<TopUpStatus>('idle')
  const [paymentRequest, setPaymentRequest] = useState('')
  const [, setPaymentHash] = useState('')
  const [copied, setCopied] = useState(false)

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const previousBalanceRef = useRef<number>(budget ?? 0)

  // Load history on open
  useEffect(() => {
    if (!visible) {
      return
    }

    const fetchHistory = async () => {
      setLoading(true)

      try {
        const token = await getLSat()

        setLsatToken(token)

        // Extract raw macaroon from "LSAT macaroon:preimage"
        const parts = token.replace(/^LSAT /, '').split(':')
        const mac = parts[0] || ''

        setActiveMacaroon(mac)
        previousBalanceRef.current = budget ?? 0

        const data = await getLsatHistory(token)

        setLsats(data.lsats)

        // Flatten and sort all transactions across LSATs
        const flat: Transaction[] = data.lsats.flatMap((l) =>
          l.transactions.map((t) => ({
            macaroon: l.macaroon,
            endpoint: t.endpoint,
            amount: t.amount,
            created_at: t.created_at,
          })),
        )

        flat.sort((a, b) => {
          const ta = a.created_at ? new Date(a.created_at).getTime() : 0
          const tb = b.created_at ? new Date(b.created_at).getTime() : 0

          return tb - ta
        })

        setTransactions(flat)
      } catch (e) {
        console.error('Failed to load LSAT history', e)
      } finally {
        setLoading(false)
      }
    }

    fetchHistory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  // Clear polling interval on close / unmount
  useEffect(
    () => () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    },
    [],
  )

  const handleClose = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    close()
  }

  const validateAmount = (val: number | ''): string => {
    if (val === '' || val <= 0) {
      return 'Amount must be at least 1 sat'
    }

    if (val > 10000) {
      return 'Amount cannot exceed 10,000 sats'
    }

    return ''
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value

    if (raw === '') {
      setTopUpAmount('')
      setAmountError('')

      return
    }

    const num = parseInt(raw, 10)

    if (!Number.isNaN(num)) {
      setTopUpAmount(num)
      setAmountError(validateAmount(num))
    }
  }

  const handleGenerateInvoice = async () => {
    if (!activeMacaroon) {
      await payLsat(setBudget)
      close()

      return
    }

    const err = validateAmount(topUpAmount)

    if (err) {
      setAmountError(err)

      return
    }

    setTopUpStatus('generating')

    try {
      const result = await topUpLsat(activeMacaroon, topUpAmount as number)

      setPaymentRequest(result.payment_request)
      setPaymentHash(result.payment_hash)
      setTopUpStatus('awaiting_payment')
      previousBalanceRef.current = budget ?? 0

      // Start polling balance every 3s
      intervalRef.current = setInterval(async () => {
        try {
          const bal = await getBalance(lsatToken)

          if (bal.balance > previousBalanceRef.current) {
            clearInterval(intervalRef.current!)
            intervalRef.current = null
            await topUpConfirm(result.payment_hash, activeMacaroon)
            setBudget(bal.balance)
            setTopUpStatus('success')
          }
        } catch {
          // Silently ignore polling errors
        }
      }, 3000)
    } catch (e) {
      console.error('Failed to generate invoice', e)
      setTopUpStatus('error')
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(paymentRequest)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const resetTopUp = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    setTopUpStatus('idle')
    setPaymentRequest('')
    setPaymentHash('')
    setTopUpAmount('')
    setAmountError('')
    setCopied(false)
  }

  const isGenerating = topUpStatus === 'generating'

  const renderTopUpContent = () => {
    if (topUpStatus === 'success') {
      return (
        <SuccessRow align="center" direction="row">
          <SuccessIcon>✓</SuccessIcon>
          <SuccessText>Top-up complete! Balance updated.</SuccessText>
          <ResetButton onClick={resetTopUp}>Top up again</ResetButton>
        </SuccessRow>
      )
    }

    if (topUpStatus === 'awaiting_payment' || topUpStatus === 'generating') {
      return (
        <Flex direction="column">
          {paymentRequest && (
            <InvoiceBox direction="column">
              <InvoiceLabel>Lightning Invoice</InvoiceLabel>
              <InvoiceRow align="center" direction="row">
                <InvoiceText>{`${paymentRequest.slice(0, 24)}…${paymentRequest.slice(-8)}`}</InvoiceText>
                <CopyButton data-testid="copy-invoice-btn" onClick={handleCopy}>
                  {copied ? 'Copied!' : 'Copy'}
                </CopyButton>
              </InvoiceRow>
              <WaitingText>Waiting for payment…</WaitingText>
            </InvoiceBox>
          )}
          <CancelButton onClick={resetTopUp}>Cancel</CancelButton>
        </Flex>
      )
    }

    if (!activeMacaroon) {
      return (
        <Flex direction="column">
          <GenerateButton data-testid="get-started-btn" onClick={handleGenerateInvoice}>
            Get Started
          </GenerateButton>
        </Flex>
      )
    }

    return (
      <Flex direction="column">
        <InputRow align="flex-start" direction="row">
          <AmountInput
            data-testid="topup-amount-input"
            max={10000}
            min={1}
            onChange={handleAmountChange}
            placeholder="Amount (sats)"
            type="number"
            value={topUpAmount}
          />
          <GenerateButton
            data-testid="generate-invoice-btn"
            disabled={isGenerating || !!amountError || topUpAmount === ''}
            onClick={handleGenerateInvoice}
          >
            Generate Invoice
          </GenerateButton>
        </InputRow>
        {amountError && <ErrorText data-testid="amount-error">{amountError}</ErrorText>}
      </Flex>
    )
  }

  return (
    <BaseModal id="transactionHistory" kind="regular" onClose={handleClose}>
      <ModalContent direction="column">
        <Title>Transaction History</Title>

        {/* Top-up Section */}
        <SectionBox direction="column">
          <SectionTitle>Top Up Balance</SectionTitle>

          {activeMacaroon && (
            <MacaroonLabel>
              Token: <MacaroonCode>{truncateMacaroon(activeMacaroon)}</MacaroonCode>
            </MacaroonLabel>
          )}

          {renderTopUpContent()}
        </SectionBox>

        {/* History Section */}
        <SectionTitle style={{ marginTop: 16 }}>Spend History</SectionTitle>

        <HistoryList direction="column">
          {loading && <EmptyText>Loading…</EmptyText>}

          {!loading && transactions.length === 0 && <EmptyText>No transactions yet</EmptyText>}

          {!loading &&
            transactions.map((tx, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <TxRow key={`${tx.macaroon}-${tx.created_at}-${i}`} align="center" direction="row">
                <TxCell flex="1.2">
                  <TxMono>{truncateMacaroon(tx.macaroon)}</TxMono>
                </TxCell>
                <TxCell flex="2">
                  <TxEndpoint>{tx.endpoint}</TxEndpoint>
                </TxCell>
                <TxCell flex="0.8" style={{ textAlign: 'right' }}>
                  <TxAmount>{tx.amount} sats</TxAmount>
                </TxCell>
                <TxCell flex="1.5" style={{ textAlign: 'right' }}>
                  <TxDate>{formatDate(tx.created_at)}</TxDate>
                </TxCell>
              </TxRow>
            ))}
        </HistoryList>
      </ModalContent>
    </BaseModal>
  )
}

/* ── Styled components ── */

const ModalContent = styled(Flex)`
  width: 100%;
  overflow: hidden;
`

const Title = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.white};
  margin-bottom: 16px;
`

const SectionBox = styled(Flex)`
  background: ${colors.BG2};
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 8px;
`

const SectionTitle = styled(Text)`
  font-size: 13px;
  font-weight: 600;
  color: ${colors.GRAY6};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
`

const MacaroonLabel = styled(Text)`
  font-size: 12px;
  color: ${colors.GRAY7};
  margin-bottom: 10px;
`

const MacaroonCode = styled.span`
  font-family: monospace;
  color: ${colors.SECONDARY_BLUE};
`

const InputRow = styled(Flex)`
  gap: 8px;
`

const AmountInput = styled.input`
  flex: 1;
  background: ${colors.INPUT_BG};
  border: 1px solid ${colors.addAttributeBtn};
  border-radius: 6px;
  color: ${colors.white};
  font-size: 14px;
  padding: 8px 12px;
  outline: none;
  min-width: 0;

  &::placeholder {
    color: ${colors.INPUT_PLACEHOLDER};
  }

  &:focus {
    border-color: ${colors.primaryBlue};
  }

  /* Remove number arrows */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const GenerateButton = styled.button`
  background: ${colors.primaryBlue};
  border: none;
  border-radius: 6px;
  color: ${colors.white};
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 14px;
  white-space: nowrap;
  transition: opacity 0.15s ease;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    opacity: 0.85;
  }
`

const ErrorText = styled(Text)`
  color: ${colors.primaryRed};
  font-size: 12px;
  margin-top: 6px;
`

const InvoiceBox = styled(Flex)`
  background: ${colors.BG1};
  border: 1px solid ${colors.addAttributeBtn};
  border-radius: 6px;
  padding: 10px 12px;
  margin-bottom: 8px;
`

const InvoiceLabel = styled(Text)`
  font-size: 11px;
  color: ${colors.GRAY6};
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`

const InvoiceRow = styled(Flex)`
  gap: 8px;
`

const InvoiceText = styled(Text)`
  font-family: monospace;
  font-size: 13px;
  color: ${colors.SECONDARY_BLUE};
  flex: 1;
  word-break: break-all;
`

const CopyButton = styled.button`
  background: ${colors.BUTTON1};
  border: none;
  border-radius: 4px;
  color: ${colors.white};
  cursor: pointer;
  font-size: 12px;
  padding: 4px 10px;
  white-space: nowrap;

  &:hover {
    background: ${colors.BUTTON1_HOVER};
  }
`

const WaitingText = styled(Text)`
  color: ${colors.GRAY6};
  font-size: 12px;
  margin-top: 6px;
`

const CancelButton = styled.button`
  background: transparent;
  border: 1px solid ${colors.addAttributeBtn};
  border-radius: 6px;
  color: ${colors.GRAY6};
  cursor: pointer;
  font-size: 12px;
  padding: 6px 12px;
  align-self: flex-start;

  &:hover {
    border-color: ${colors.primaryRed};
    color: ${colors.primaryRed};
  }
`

const SuccessRow = styled(Flex)`
  gap: 8px;
`

const SuccessIcon = styled.span`
  color: ${colors.primaryGreen};
  font-size: 18px;
  font-weight: 700;
`

const SuccessText = styled(Text)`
  color: ${colors.primaryGreen};
  font-size: 13px;
  flex: 1;
`

const ResetButton = styled.button`
  background: transparent;
  border: 1px solid ${colors.addAttributeBtn};
  border-radius: 4px;
  color: ${colors.GRAY6};
  cursor: pointer;
  font-size: 12px;
  padding: 4px 10px;

  &:hover {
    border-color: ${colors.primaryBlue};
    color: ${colors.white};
  }
`

const HistoryList = styled(Flex)`
  max-height: 280px;
  overflow-y: auto;
  border: 1px solid ${colors.addAttributeBtn};
  border-radius: 8px;

  /* Scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.SCROLL_BAR};
    border-radius: 2px;
  }
`

const TxRow = styled(Flex)`
  padding: 10px 12px;
  gap: 8px;
  border-bottom: 1px solid ${colors.addAttributeBtn};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${colors.BG2};
  }
`

const TxCell = styled(Flex)<{ flex?: string }>`
  flex: ${({ flex }) => flex ?? '1'};
  overflow: hidden;
`

const TxMono = styled(Text)`
  font-family: monospace;
  font-size: 11px;
  color: ${colors.SECONDARY_BLUE};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const TxEndpoint = styled(Text)`
  font-size: 12px;
  color: ${colors.primaryText1};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const TxAmount = styled(Text)`
  font-size: 12px;
  color: ${colors.GRAY3};
  white-space: nowrap;
`

const TxDate = styled(Text)`
  font-size: 11px;
  color: ${colors.GRAY7};
  white-space: nowrap;
`

const EmptyText = styled(Text)`
  color: ${colors.GRAY6};
  font-size: 13px;
  padding: 20px;
  text-align: center;
`
