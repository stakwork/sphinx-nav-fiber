import { Button } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'
import { getTribeUserDetails, getWorkspace } from '~/network/postBounty'
import { useUserStore } from '~/stores/useUserStore'

type Props = {
  errMessage: string
  handleClose: () => void
}

type NameSpacesOption = {
  label: string
  value: string
}

export const CreateBounty: FC<Props> = ({ errMessage, handleClose }) => {
  const { setValue, watch } = useFormContext()
  const [options, setOptions] = useState<NameSpacesOption[]>([])
  const { pubKey, signedToken } = useUserStore()

  useEffect(() => {
    async function handleGetNamesspaces() {
      try {
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
        console.log('Error from get user details: ', error)
      }
    }

    setValue('token', signedToken)

    handleGetNamesspaces()
  }, [pubKey, signedToken, setValue])

  const watchBudget = watch('budget', '')
  const watchNodeType = watch('nodeType', '')

  const onSelect = (val: TAutocompleteOption | null) => {
    const selectedValue = val?.label || 'SecondBrain'
    const selectedWorkspaceUuid = val?.value || 'ck9drb84nncjnaefo090'

    setValue('nodeType', selectedValue, { shouldValidate: true })
    setValue('workspaceUuid', selectedWorkspaceUuid)
  }

  const isDisable = !!(watchBudget && watchNodeType)

  return (
    <Flex>
      <Flex align="center" direction="row" justify="space-between" mb={18}>
        <StyledHeadingText>Create Bounty</StyledHeadingText>
      </Flex>

      <Flex mb={20}>
        <StyledText>Select Workspace</StyledText>
        <AutoComplete autoFocus onSelect={onSelect} options={options} />
      </Flex>

      <Flex mb={20}>
        <StyledText>Set Budget</StyledText>
        <TextInput
          id="budget"
          name="budget"
          placeholder="Enter budget"
          rules={{
            ...requiredRule,
            pattern: {
              value: /^[0-9]+$/,
              message: 'Please enter a valid number',
            },
          }}
          value={watchBudget}
        />
      </Flex>

      <Flex direction="row">
        <Flex grow={1}>
          <Button color="secondary" onClick={() => handleClose()} size="large" variant="contained">
            Cancel
          </Button>
        </Flex>
        <Flex grow={1} ml={20}>
          <Button color="secondary" disabled={!isDisable} size="large" type="submit" variant="contained">
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
  margin-bottom: 6px;
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
