import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Button } from '~/components/Button'
import { Flex } from '~/components/common/Flex'
import { FormProvider, useForm } from 'react-hook-form'
import { colors } from '~/utils/colors'
import { TextInput } from '~/components/AddNodeModal/TextInput'
import { TAboutParams, postAboutData } from '~/network/fetchSourcesData'
import { FC } from 'react'

export const requiredRule = {
  required: {
    message: 'The field is required',
    value: true,
  },
}

type Props = {
  initialValues: TAboutParams
}

export const AboutAdminView: FC<Props> = ({ initialValues }) => {
  const form = useForm<TAboutParams>({ defaultValues: initialValues, mode: 'onSubmit' })
  const { isSubmitting } = form.formState


  const onSubmit = form.handleSubmit(async (data) => {
    try {
      const res = await postAboutData(data)

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  })

  return (
    <FormProvider {...form}>
      <form id="add-node-form" onSubmit={onSubmit}>
        <>
          <Flex>
            <Flex pt={12}>
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
            <Flex pt={12}>
              <TextInput
                id="cy-about-id"
                label="Graph Description"
                maxLength={50}
                name="description"
                placeholder="Type graph description here..."
                rules={{
                  ...requiredRule,
                }}
              />
            </Flex>
            <Flex pt={12}>
              <TextInput
                id="cy-about-mission_statement-id"
                label="Mission Statement"
                maxLength={50}
                name="mission_statement"
                placeholder="Type mission statement here..."
                rules={{
                  ...requiredRule,
                }}
              />
            </Flex>
            <Flex pt={12}>
              <TextInput
                id="cy-about-search_term-id"
                label="Search Term"
                maxLength={50}
                name="search_term"
                placeholder="Type search term here..."
                rules={{
                  ...requiredRule,
                }}
              />
            </Flex>
          </Flex>

          <Flex pt={8}>
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
      </form>
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
