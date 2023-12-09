import { Button, InputLabel } from '@mui/material'
import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import InfoIcon from '~/components/Icons/InfoIcon'
import PersonAdd from '~/components/Icons/PersonAdd'
import SimpleTable from '~/components/SourcesTableModal/SourcesView/Sources/Table/SimpleTable'
import { Flex } from '~/components/common/Flex'
import { TextInput } from '~/components/common/TextInput'
import { TAboutParams } from '~/network/fetchSourcesData'
import { colors } from '~/utils'

type Props = {
  initialValues: TAboutParams
}

const StyledForm = styled.form`
  padding: 2px;
`

const InputSyled = styled(Flex)`
  display: flex;
  width: 320px;
`

const StyledLabel = styled.p`
  color: white;
  font-size: 13px;
`

const IconLabel = styled(Flex)`
  display: flex;
  margin-top: 2px;
`

const InputArea = styled(Flex)`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 16px;
  justify-content: center;
  margin-top: 30px;
`

const UserArea = styled(Flex)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  color: ${colors.GRAY6};
  background-color: #1c1e26;
  margin-top: 32px;
`

const StyledText = styled.p`
  font-family: Barlow;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`

const PersonAddBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 80px;
`

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: white;
  gap: 8px;
  margin-bottom: 80px;
`

export const UserPermissions: FC<Props> = ({ initialValues }) => {
  const form = useForm<TAboutParams>({ defaultValues: initialValues, mode: 'onSubmit' })
  const [isLoading, setIsLoading] = useState(false)
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  const TableData = [
    { name: 'Name Surname', identifier: 'aXA60jczLJl1uew...' },
    { name: 'Name Surname', identifier: 'aXA60jczLJl1uew...' },
    { name: 'Name Surname', identifier: 'aXA60jczLJl1uew...' },
    { name: 'Name Surname', identifier: 'aXA60jczLJl1uew...' },
    { name: 'Name Surname', identifier: 'aXA60jczLJl1uew...' },
  ]

  const mockFetchData = (): Promise<void> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })

  const onSubmit = form.handleSubmit(async () => {
    try {
      setIsLoading(true)
      await mockFetchData()
      setIsDataLoaded(true)
      setIsLoading(false)
    } catch (error) {
      console.warn(error)
      setIsLoading(false)
    }
  })

  const handleRemove = (identifier: string) => {
    // eslint-disable-next-line no-console
    console.log(`Remove item at index: ${identifier}`)
  }

  let content

  if (isLoading) {
    content = (
      <StyledLoader>
        <ClipLoader color={colors.white} />
        Adding...
      </StyledLoader>
    )
  } else if (isDataLoaded) {
    content = <SimpleTable data={TableData} onRemove={handleRemove} />
  } else {
    content = (
      <PersonAddBox>
        <PersonAdd />
        <StyledText>Add User</StyledText>
      </PersonAddBox>
    )
  }

  return (
    <FormProvider {...form}>
      <StyledForm onSubmit={onSubmit}>
        <InputArea>
          <InputSyled pt={20}>
            <InputLabel sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <StyledLabel>Enter pubkey</StyledLabel>
              <IconLabel>
                <InfoIcon />
              </IconLabel>
            </InputLabel>
            <TextInput id="cy-about-pubkey-id" maxLength={50} name="pubkey" placeholder="Paste pubkey here..." />
          </InputSyled>
          <Button color="secondary" onClick={onSubmit} size="medium" sx={{ minHeight: '38px' }} variant="contained">
            Paste
          </Button>
        </InputArea>
        <UserArea>{content}</UserArea>
      </StyledForm>
    </FormProvider>
  )
}
