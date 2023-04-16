import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import { Button } from "~/components/Button";
import { Flex } from "~/components/common/Flex";
import { FormProvider, useForm } from 'react-hook-form';
import { colors } from "~/utils/colors";
import { TextInput } from "~/components/AddNodeModal/TextInput";

export const requiredRule = {
  required: {
    message: 'The field is required',
    value: true,
  },
}

export const AboutAdminView = () => {

    const form = useForm({ mode: 'onSubmit' });
    const { isSubmitting } = form.formState;
      const { reset, watch, setValue } = form

  const onSubmit = form.handleSubmit(async (data) => {
    console.log(data);
  })

  return (
    <FormProvider {...form}>
      <form id="add-node-form" onSubmit={onSubmit}>
        <>
          <Flex>
            <Flex pt={12}>
              <TextInput
                disabled
                id="cy-youtube-channel-id"
                label="Graph Title"
                maxLength={50}
                name="source"
                placeholder="Type graph title here..."
                rules={{
                  ...requiredRule,
                }}
              />
            </Flex>
            <Flex pt={12}>
              <TextInput
                disabled
                id="cy-youtube-channel-id"
                label="Graph Description"
                maxLength={50}
                name="source"
                placeholder="Type graph title here..."
                rules={{
                  ...requiredRule,
                }}
              />
            </Flex>
            <Flex pt={12}>
              <TextInput
                disabled
                id="cy-youtube-channel-id"
                label="Graph Description"
                maxLength={50}
                name="source"
                placeholder="Type graph title here..."
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