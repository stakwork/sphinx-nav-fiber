import styled from 'styled-components'
import { GraphViewControl } from '~/components/App/ActionsToolbar/GraphViewControl'
import { Button } from '~/components/Button'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'

export const Appearance = () => (
  <Wrapper direction="column">
    <StyledText>Default graph view:</StyledText>
    <GraphViewControl />
    <Flex mt={308}>
      <Button kind="big">Save changes</Button>
    </Flex>
  </Wrapper>
)

const Wrapper = styled(Flex)`
  display: flex;
  gap: 10px;
  padding: 36px;
`

const StyledText = styled(Text)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`


// import { InputLabel } from '@mui/material'
// import { FC } from 'react'
// import { FormProvider, useForm } from 'react-hook-form'
// import styled from 'styled-components'
// import { Button } from '~/components/Button'
// import InfoIcon from '~/components/Icons/InfoIcon'
// import { Flex } from '~/components/common/Flex'
// import { TextInput } from '~/components/common/TextInput'
// import { TAboutParams, postAboutData } from '~/network/fetchSourcesData'

// type Props = {
//   initialValues: TAboutParams
// }

// export const UserPermissions: FC<Props> = ({ initialValues }) => {
//   const form = useForm<TAboutParams>({ defaultValues: initialValues, mode: 'onSubmit' })

//   const onSubmit = form.handleSubmit(async (data) => {
//     try {
//       await postAboutData(data)
//     } catch (error) {
//       console.warn(error)
//     }
//   })

//   return (
//     <FormProvider {...form}>
//       <StyledForm id="add-node-form" onSubmit={onSubmit}>
//         <>
//           <StyledCont direction="row" pt={20}>
//             <Flex>
//               <InputLabel sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
//                 <StyledLabel className="label-cl">Enter pubkey</StyledLabel>
//                 <InfoIcon />
//               </InputLabel>
//               <StyledInput id="cy-about-pubkey-id" maxLength={50} name="pubkey" placeholder="Paste pubkey here..." />
//             </Flex>
//             <StyledButton>Paste</StyledButton>
//           </StyledCont>
//         </>
//       </StyledForm>
//     </FormProvider>
//   )
// }

// const StyledForm = styled.form`
//   padding: 40px;
// `

// const StyledLabel = styled.p`
//   color: white;
//   text-align: center;
// `

// const StyledInput = styled(TextInput)`
//   width: 300px;
// `

// const StyledButton = styled(Button)`
//   height: 40px;
// `

// const StyledCont = styled(Flex)`
//   display: flex;
//   flex-direction: row;
//   align-items: end;
//   gap: 16px;
// `
