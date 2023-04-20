import { ReactElement, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { MdClose, MdInfo, MdKeyboardBackspace } from 'react-icons/md'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import styled from 'styled-components'
import { Button } from '~/components/Button'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { BaseModal } from '~/components/Modal'
import {
  GITHUB_REPOSITORY,
  isDevelopment,
  LINK,
  NODE_ADD_ERROR,
  NODE_ADD_SUCCESS,
  RSS,
  TOPIC,
  TWITTER_HANDLE,
  TWITTER_SOURCE,
  YOUTUBE_CHANNEL,
} from '~/constants'
import { api } from '~/network/api'
import { useModal } from '~/stores/useModalStore'
import { colors } from '~/utils/colors'
import { getLSat } from '~/utils/getLSat'
import { timeToMilliseconds } from '~/utils/timeToMilliseconds'
import { ToastMessage } from '../common/Toast/toastMessage'
import StyledSelect from '../Select'
import { SourceUrl } from './SourceUrl'
import Topic from './Topic'
import TwitId from './TweetId'
import TwitterHandle from './TwitterHandle'
import YoutubeChannel from './YoutubeChannel'
import GithubRepository from './GithubRepository'
import { useDataStore } from '../../stores/useDataStore/index'
import { FetchRadarResponse, SubmitErrRes } from '~/types'
import { getRadarData } from '~/network/fetchSourcesData'
import RSSFeed from './RSSFeed'

type Option = {
  label: string
  value: string
}

export const requiredRule = {
  required: {
    message: 'The field is required',
    value: true,
  },
}

const infoMessageContent =
  'Come across an interesting or useful part of a video or audio you\'d like to share? You can add it to the knowledge graph here!\n\nEnter a valid link to the YouTube video or Twitter Space you were watching, choose a start and end timestamp to encompass the segment you found interesting or useful, provide a brief description of what the segment is about, and add topic tags that are relevant to the segment. Hit "Add node", and your clip will be added to the graph shortly.\n\nYour pubkey will be submitted with your clip, and any boosts your clip receives will go to you!'

const infoMessageSource =
  'If you come across a source that produces ongoing content (e.g. a twitter account, youtube channel, etc). You can add it to the source table for your graph. Once the source is added to the table we will gather new content produced by that source, process it, and add it to your graph.'

const notify = (message: string) => {
  toast(<ToastMessage message={message} />, {
    icon: false,
    position: toast.POSITION.BOTTOM_CENTER,
    type: message === NODE_ADD_SUCCESS ? 'success' : 'error',
  })
}

const handleSubmit = async (data: FieldValues, close: () => void, sourceType: string, successCallback: () => void) => {
  const body: { [index: string]: unknown } = {}

  if (sourceType === LINK) {
    body.media_url = data.link

    if (data.withTimeStamps) {
      body.job_response = {
        tags: [
          {
            description: data.description,
            'end-time': timeToMilliseconds(data.endTime),
            'start-time': timeToMilliseconds(data.startTime),
            tag: data.tags?.join(', '),
          },
        ],
      }
    }
  } else if (sourceType === TWITTER_SOURCE) {
    body.tweet_id = data.tweet.split('/').at(-1)
  } else {
    body.source_type = sourceType

    if (sourceType === TWITTER_HANDLE) {
      body.source = (data.source || '').replace(/[@]/g, '')
    } else {
      body.source = data.source
    }
  }

  let lsatToken

  if (!isDevelopment) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const enable = await sphinx.enable()

    body.pubkey = enable?.pubkey

    lsatToken = await getLSat('adding_node')

    if (!lsatToken) {
      throw new Error('An error occured calling getLSat')
    }
  }

  const endPoint = CONTENT_TYPES.includes(sourceType) ? 'add_node' : 'radar'

  try {
    const res: SubmitErrRes = await api.post(`/${endPoint}`, JSON.stringify(body), {
      Authorization: lsatToken,
    } as HeadersInit)

    if (res.error) {
      const { message } = res.error

      throw new Error(message)
    }

    if (endPoint === 'radar') {
      await successCallback()
    }

    notify(NODE_ADD_SUCCESS)
    close()
  } catch (err: unknown) {
    if (err instanceof Error) {
      notify(NODE_ADD_ERROR)
      close()
    }
  }
}

type TOption = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: (props: any) => ReactElement<any, any> | null
  label: string
}

interface IOptionMap {
  [key: string]: TOption
}

const CONTENT_TYPE_OPTIONS: Record<'source' | 'content', IOptionMap> = {
  content: {
    [LINK]: {
      component: SourceUrl,
      label: 'Youtube / Twitter space / Mp3',
    },
    [TWITTER_SOURCE]: {
      component: TwitId,
      label: 'Tweet',
    },
  },
  source: {
    [GITHUB_REPOSITORY]: {
      component: GithubRepository,
      label: 'Github repository',
    },
    [RSS]: {
      component: RSSFeed,
      label: 'RSS feed',
    },
    [TOPIC]: {
      component: Topic,
      label: 'Topic',
    },
    [TWITTER_HANDLE]: {
      component: TwitterHandle,
      label: 'Twitter handle',
    },
    [YOUTUBE_CHANNEL]: {
      component: YoutubeChannel,
      label: 'Youtube channel',
    },
  },
}

const CONTENT_TYPES = Object.keys(CONTENT_TYPE_OPTIONS.content)

export const AddNodeModal = () => {
  const { close, addNodeModalData } = useModal('addNode')
  const [activeType, setActiveType] = useState('')
  const setSources = useDataStore((s) => s.setSources)

  const resolvedContentOptions = addNodeModalData ? CONTENT_TYPE_OPTIONS[addNodeModalData] : null

  const resolveInfoMessage = addNodeModalData === 'source' ? infoMessageSource : infoMessageContent

  const form = useForm({ mode: 'onSubmit' })

  const { reset, watch, setValue } = form

  const { isSubmitting } = form.formState

  const handleClose = () => {
    setActiveType('')
    reset()
    close()
  }

  const onSuccessCallback = async () => {
    if ([TWITTER_HANDLE, TOPIC].includes(activeType)) {
      try {
        const data: FetchRadarResponse = await getRadarData()

        setSources(data.data)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const onSubmit = form.handleSubmit(async (data) => {
    await handleSubmit(data, handleClose, activeType, onSuccessCallback)
  })

  const options = resolvedContentOptions
    ? Object.keys(resolvedContentOptions).map((i: string) => ({
        label: resolvedContentOptions[i].label,
        value: i,
      }))
    : []

  const selectedValue = activeType
    ? [
        {
          label: activeType,
          value: activeType,
        },
      ]
    : []

  const startTime = watch('startTime')

  const FormValues = activeType && resolvedContentOptions ? resolvedContentOptions[activeType].component : () => null
  const formProps = { setValue, startTime }

  return (
    resolvedContentOptions && (
      <BaseModal id="addNode" preventOutsideClose>
        <FormProvider {...form}>
          <form id="add-node-form" onSubmit={onSubmit}>
            <Flex align="center" direction="row" justify="space-between" pb={32}>
              <Flex align="center" direction="row">
                <Flex align="center" direction="row">
                  {activeType && (
                    <BackButton onClick={() => setActiveType('')}>
                      <MdKeyboardBackspace color={colors.white} size={24} />
                    </BackButton>
                  )}
                  <Text kind="bigHeadingBold">Add {addNodeModalData}</Text>
                </Flex>
                <InfoIcon role="tooltip" tabIndex={0}>
                  <MdInfo />
                  <div className="tooltip">{resolveInfoMessage}</div>
                </InfoIcon>
              </Flex>

              <CloseButton
                id="add-node-close-button"
                onClick={handleClose}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === 'Space') {
                    handleClose()
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <MdClose color="white" />
              </CloseButton>
            </Flex>

            {!activeType ? (
              <Flex align="center" direction="row" justify="space-between">
                <Flex>
                  <Text kind="mediumBold">What do you want to add?</Text>
                </Flex>
                <Flex basis="250px">
                  <StyledSelect
                    className={selectedValue.length ? 'hasSelected' : ''}
                    clearable
                    onChange={(values) => {
                      setActiveType(values.length ? (values[0] as Option).value : '')
                    }}
                    options={options}
                    placeholder={`Select ${addNodeModalData} type`}
                    searchable={false}
                    values={selectedValue}
                  />
                </Flex>
              </Flex>
            ) : (
              <>
                <Flex>
                  <FormValues {...formProps} />
                </Flex>

                <Flex pt={16} px={4} tabIndex={0}>
                  <Text color="lightGray" kind="tinyBold">
                    Your pubkey will be submitted with your input, so you can receive sats that your content earns.
                  </Text>
                </Flex>

                <Flex pt={8}>
                  {isSubmitting ? (
                    <SubmitLoader>
                      <ClipLoader color={colors.white} size={20} />
                    </SubmitLoader>
                  ) : (
                    <Button disabled={isSubmitting} id="add-node-submit-cta" kind="big" type="submit">
                      {`Add ${addNodeModalData}`}
                    </Button>
                  )}
                </Flex>
              </>
            )}
          </form>
        </FormProvider>
      </BaseModal>
    )
  )
}

const CloseButton = styled(Flex)`
  cursor: pointer;

  svg {
    font-size: 24px;
    color: ${colors.white};
  }
`

const BackButton = styled(Flex)`
  cursor: pointer;
  margin-right: 8px;
`

const InfoIcon = styled(Flex)`
  cursor: default;
  padding: 8px;
  position: relative;

  svg {
    font-size: 22px;
    color: ${colors.secondaryText4};
  }

  .tooltip {
    position: absolute;
    background-color: ${colors.dashboardHeader};
    border: 1px solid ${colors.secondaryText4};
    border-radius: 4px;
    color: ${colors.white};
    top: 40px;
    left: -142px;
    padding: 4px 8px;
    font-size: 13px;
    visibility: hidden;
    width: 470px;
    white-space: pre-wrap;
    z-index: 1;
  }

  span:hover + .tooltip {
    visibility: visible;
  }

  &:focus .tooltip {
    visibility: visible;
  }
`

const SubmitLoader = styled(Flex).attrs({
  align: 'center',
  background: 'primaryButton',
  borderRadius: 8,
  justify: 'center',
})`
  padding: 16px 24px;
  opacity: 0.5;
`
