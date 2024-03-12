import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Button } from '~/components/Button'
import { Flex } from '~/components/common/Flex'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'
import { TAboutParams, postAboutData } from '~/network/fetchSourcesData'
import { useAppStore } from '~/stores/useAppStore'
import { colors } from '~/utils/colors'

type Props = {
  initialValues: TAboutParams
}

export const General: FC<Props> = ({ initialValues }) => {
  const form = useForm<TAboutParams>({ defaultValues: initialValues, mode: 'onSubmit' })
  const { isSubmitting } = form.formState
  const setAppMetaData = useAppStore((s) => s.setAppMetaData)

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      const res = (await postAboutData(data)) as Awaited<{ status: string }>

      if (res.status === 'success') {
        setAppMetaData(data)
      }
    } catch (error) {
      console.log(error)
      console.warn(error)
    }
  })

  return (
    <FormProvider {...form}>
      <StyledForm id="add-node-form" onSubmit={onSubmit}>
        <>
          <Flex>
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
                maxLength={50}
                name="description"
                placeholder="Type graph description here..."
              />
            </Flex>
          </Flex>
          <Flex mt={210} py={24}>
            {isSubmitting ? (
              <SubmitLoader>
                <ClipLoader color={colors.white} size={20} />
              </SubmitLoader>
            ) : (
              <Button disabled={isSubmitting} id="add-node-submit-cta" kind="big" type="submit">
                Save changes
              </Button>
            )}
          </Flex>
        </>
      </StyledForm>
    </FormProvider>
  )
}

const SubmitLoader = styled(Flex).attrs({
  align: 'center',
  background: 'primaryButton',
  borderRadius: 8,
  justify: 'center',
})`
  padding: 16px 24px;
  opacity: 0.5;
`

const StyledForm = styled.form`
  padding: 36px;
`
