import { Button } from '@mui/material'
import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { MdError } from 'react-icons/md'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { SuccessNotify } from '~/components/common/SuccessToast'
import { TextInput } from '~/components/common/TextInput'
import { NODE_ADD_ERROR, requiredRule } from '~/constants'
import { postAboutData, TAboutParams } from '~/network/fetchSourcesData'
import { useAppStore } from '~/stores/useAppStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'

type Props = {
  initialValues: TAboutParams
  onClose: () => void
}

export const General: FC<Props> = ({ initialValues, onClose }) => {
  const form = useForm<TAboutParams>({ defaultValues: initialValues, mode: 'onSubmit' })
  const { isSubmitting } = form.formState
  const setAppMetaData = useAppStore((s) => s.setAppMetaData)
  const { swarmUiUrl } = useUserStore((s) => s)
  const [error, setError] = useState<string>('')

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      const res = (await postAboutData(data)) as Awaited<{ status: string }>

      if (res.status === 'success') {
        SuccessNotify('Changes Saved')
        setAppMetaData(data)
        onClose()
      }
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    } catch (err: any) {
      let errorMessage = NODE_ADD_ERROR

      if (err?.status === 400) {
        const errorRes = await err.json()

        errorMessage = errorRes.errorCode || errorRes?.status || NODE_ADD_ERROR
      } else if (err instanceof Error) {
        errorMessage = err.message
      }

      setError(String(errorMessage))
    }
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <FormProvider {...form}>
      <StyledForm id="add-node-form" onSubmit={handleSubmit}>
        <FormBody>
          <Flex>
            {swarmUiUrl && (
              <SwarmLinkContainer>
                <Link href={swarmUiUrl}>View Swarm UI</Link>
              </SwarmLinkContainer>
            )}

            <Flex pt={20}>
              <TextInput
                id="cy-about-title-id"
                label="Graph Title"
                maxLength={50}
                name="title"
                placeholder="Type graph title here..."
                rules={{
                  ...requiredRule,
                }}
              />
            </Flex>
            <Flex pt={20}>
              <TextInput
                id="cy-about-id"
                label="Graph Description"
                maxLength={100}
                name="description"
                placeholder="Type graph description here..."
              />
            </Flex>
          </Flex>

          <Flex mt={180} py={error ? 0 : 24}>
            <Button
              color="secondary"
              disabled={isSubmitting}
              id="add-node-submit-cta"
              size="large"
              startIcon={
                isSubmitting && (
                  <IconWrapper>
                    <ClipLoader color={colors.lightGray} size={12} />
                  </IconWrapper>
                )
              }
              type="submit"
              variant="contained"
            >
              Save Changes
            </Button>
            {error ? (
              <StyledError>
                <StyledErrorText>
                  <MdError className="errorIcon" />
                  <span>{error}</span>
                </StyledErrorText>
              </StyledError>
            ) : null}
          </Flex>
        </FormBody>
      </StyledForm>
    </FormProvider>
  )
}

const StyledForm = styled.form`
  padding: 36px;
  height: 100%;
`

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`

const SwarmLinkContainer = styled(Flex)`
  display: flex;
  align-items: flex-end;
`

const FormBody = styled(Flex)`
  display: flex;
  direction: column;
  justify-content: space-between;
  height: 100%;
`

const Link = styled.a`
  font-family: 'Barlow';
  font-size: 16px;
  color: ${colors.PRIMARY_BLUE};
  text-decoration: underline;
  font-weight: 500;
`

const StyledError = styled(Flex)`
  display: flex;
  align-items: center;
  color: ${colors.primaryRed};
  position: relative;
  margin-top: 10px;
`

const StyledErrorText = styled(Flex)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;

  .errorIcon {
    display: block;
    font-size: 13px;
    min-height: 13px;
    min-width: 13px;
  }

  span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
    letter-spacing: 0.2px;
    cursor: pointer;
    padding-left: 4px;
    font-size: 13px;
    font-family: Barlow;
    line-height: 18px;
  }
`
