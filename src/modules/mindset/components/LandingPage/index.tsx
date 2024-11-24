import { useState } from 'react'
import { FieldValues } from 'react-hook-form'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { NODE_ADD_ERROR } from '~/constants'
import { api } from '~/network/api'
import { useDataStore } from '~/stores/useDataStore'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { SubmitErrRes } from '~/types'
import { colors } from '~/utils/colors'
import { ChevronRight } from '../Icon/ChevronRight'
import { isValidMediaUrl } from './utils'

export type FormData = {
  input: string
  inputType: string
  source: string
  longitude: string
  latitude: string
}

const handleSubmitForm = async (data: FieldValues): Promise<SubmitErrRes> => {
  const endPoint = 'add_node'

  const body: { [index: string]: unknown } = {}

  body.media_url = data.source
  body.content_type = 'audio_video'

  const res: SubmitErrRes = await api.post(`/${endPoint}`, JSON.stringify(body))

  if (res.error) {
    const { message } = res.error

    throw new Error(message)
  }

  return res
}

export const LandingPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)
  const [requestError, setRequestError] = useState<string>('')
  const { setRunningProjectId } = useDataStore((s) => s)
  const { setSelectedEpisodeId, setSelectedEpisodeLink } = useMindsetStore((s) => s)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setInputValue(value)
    setError(value !== '' && !isValidMediaUrl(value))
  }

  const handleSubmit = async () => {
    if (isValidMediaUrl(inputValue)) {
      try {
        const res = await handleSubmitForm({ source: inputValue })

        console.log(res)

        if (res.data.project_id) {
          setRunningProjectId(res.data.project_id)
        }

        if (res.data.ref_id) {
          setSelectedEpisodeId(res.data.ref_id)
          setSelectedEpisodeLink(inputValue)
        }

        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.log(err)

        let errorMessage = NODE_ADD_ERROR

        if (err?.status === 400) {
          const res = await err.json()

          console.log(res)

          errorMessage = res.errorCode || res?.status || NODE_ADD_ERROR

          if (res.data.ref_id) {
            setSelectedEpisodeId(res.data.ref_id)
            setSelectedEpisodeLink(inputValue)
          }
        } else if (err instanceof Error) {
          errorMessage = err.message
        }

        setRequestError(String(errorMessage))
      }
    }
  }

  return (
    <Wrapper>
      <Title>Ideas have shapes</Title>
      <InputWrapper>
        <Input
          error={error}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Paste podcast or video link"
          value={inputValue}
        />
        <IconWrapper error={error} onClick={!error ? handleSubmit : undefined}>
          <ChevronRight />
        </IconWrapper>
      </InputWrapper>
      {requestError && <div>{requestError}</div>}
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  background: #16161de3;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  font-family: 'Barlow';
  z-index: 40;
`

const Title = styled(Flex)`
  color: ${colors.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`

const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  max-width: 450px;
  padding: 12px 28px 12px 16px;
  border-radius: 100px;
  border: 1px solid ${(props) => (props.error ? 'red' : colors.DIVIDER_4)};
  background: ${colors.INPUT_BG};
  color: ${colors.white};
  font-family: Barlow;
  font-size: 16px;

  &::placeholder {
    color: ${colors.INPUT_PLACEHOLDER};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => (props.error ? 'red' : colors.primaryBlue)};
  }
`

const InputWrapper = styled.div`
  position: relative;
  width: 450px;
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div<{ error?: boolean }>`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.white};
  font-size: 20px;
  cursor: ${(props) => (props.error ? 'not-allowed' : 'pointer')};

  svg {
    width: 8px;
    height: 17px;
    color: ${colors.GRAY6};
  }
`
