import { Button, FormControlLabel, Switch, SwitchProps } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'
import { getTribeUserDetails, getWorkspace } from '~/network/postBounty'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { BUDGET_PATTERN, isBudgetValid } from '../constants'

type Props = {
  errMessage: string
  handleClose: () => void
  loading?: boolean
}

type NameSpacesOption = {
  label: string
  value: string
}

export const CreateBounty: FC<Props> = ({ errMessage, handleClose, loading }) => {
  const { setValue, watch } = useFormContext()
  const [options, setOptions] = useState<NameSpacesOption[]>([])
  const { pubKey } = useUserStore()
  const [loadingOption, setLoadingOption] = useState<boolean>(false)
  const [isPublic, setIsPublic] = useState<boolean>(false)

  useEffect(() => {
    async function handleGetNamesspaces() {
      try {
        setLoadingOption(true)

        const userDetails = await getTribeUserDetails(pubKey)

        if (!userDetails.id) {
          // set options
          setOptions([{ label: 'SecondBrain', value: 'SecondBrain' }])

          return
        }

        const workspaces = await getWorkspace(userDetails.id)

        if (workspaces.length > 0) {
          const newOptions: NameSpacesOption[] = []

          for (let i = 0; i < workspaces.length; i += 1) {
            const workspace = workspaces[i]

            newOptions.push({ label: workspace.name, value: workspace.uuid })
          }

          setOptions(newOptions)
        }
      } catch (error) {
        console.error('Error from get user details: ', error)
      } finally {
        setLoadingOption(false)
      }
    }

    handleGetNamesspaces()
  }, [pubKey])

  const watchBudget = watch('budget', '')
  const watchNodeType = watch('nodeType', '')

  const onSelect = (val: TAutocompleteOption | null) => {
    const selectedValue = val?.label || 'SecondBrain'
    const selectedWorkspaceUuid = val?.value || 'ck9drb84nncjnaefo090'

    setValue('nodeType', selectedValue, { shouldValidate: true })
    setValue('workspaceUuid', selectedWorkspaceUuid)
  }

  const handleToggleOnClick = () => {
    let isPublicNewValue = false

    setIsPublic((prev) => {
      const newValue = !prev

      isPublicNewValue = newValue

      return newValue
    })

    setValue('publicBounty', isPublicNewValue)
  }

  const isDisable = isBudgetValid(watchBudget) && !!watchNodeType

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ' ') {
      event.preventDefault()
    }
  }

  return (
    <Flex>
      <Flex align="center" direction="row" justify="space-between" mb={18}>
        <StyledHeadingText>Create Bounty</StyledHeadingText>
      </Flex>

      <Flex mb={20}>
        <StyledText>Select Workspace</StyledText>
        <AutoComplete autoFocus isLoading={loadingOption} onSelect={onSelect} options={options} />
      </Flex>

      <Flex mb={20}>
        <StyledText>Set Budget</StyledText>
        <TextInput
          id="budget"
          name="budget"
          onKeyDown={handleKeyDown}
          placeholder="Enter budget"
          rules={{
            ...requiredRule,
            pattern: {
              value: BUDGET_PATTERN,
              message: 'Please enter a valid number',
            },
          }}
          value={watchBudget}
        />
      </Flex>

      <StyledFormControlLabel
        control={<CustomSwitch checked={isPublic} onChange={() => handleToggleOnClick()} />}
        label={<StyledText>Public</StyledText>}
        labelPlacement="start"
      />

      <Flex direction="row">
        <Flex grow={1}>
          <StyledButton color="secondary" onClick={() => handleClose()} size="large" variant="contained">
            Cancel
          </StyledButton>
        </Flex>
        <Flex grow={1} ml={20}>
          <Button
            color="secondary"
            disabled={!isDisable || loading}
            size="large"
            startIcon={
              loading && (
                <IconWrapper>
                  <ClipLoader color={colors.lightGray} size={12} />
                </IconWrapper>
              )
            }
            type="submit"
            variant="contained"
          >
            Confirm
          </Button>
        </Flex>
      </Flex>
      {errMessage && <StyledError>{errMessage}</StyledError>}
    </Flex>
  )
}

const StyledText = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 20px;
`

const StyledHeadingText = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`

const StyledError = styled(Flex)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
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

const StyledButton = styled(Button)`
  && {
    background: ${colors.white};
    color: ${colors.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${colors.TOPIC};
      color: ${colors.BG2};
    }
  }
`

const StyledFormControlLabel = styled(FormControlLabel)`
  justify-content: start;
  align-items: center;
  margin-left: 2px !important;
  margin-bottom: 8px;
`

const CustomSwitch = styled((props: SwitchProps) => <Switch {...props} />)`
  &.MuiSwitch-root {
    width: 58px;
    height: 42px;
  }
  & .MuiSwitch-switchBase {
    margin-top: 4px;
    &.Mui-checked {
      color: ${colors.white};
      & + .MuiSwitch-track {
        background-color: ${colors.primaryBlueBorder};
        opacity: 1;
      }
    }
  }
  & .MuiSwitch-thumb {
    width: 16px;
    height: 16px;
  }
  & .MuiSwitch-track {
    border-radius: 10px;
    background-color: ${colors.BG2};
    opacity: 1;
  }
`
