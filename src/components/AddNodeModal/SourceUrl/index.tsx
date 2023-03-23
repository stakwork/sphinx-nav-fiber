import React, { useState, FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'
import { requiredRule } from '../index'
import { TagInput } from '../TagInput'
import { TextArea } from '../TextArea'
import { TextInput } from '../TextInput'
import { FaCheck } from 'react-icons/fa';

type Props = {
  startTime?: string
  setValue?: (field: string, value: boolean) => void,
}

const tagRule = {
  required: {
    message: 'You need to enter at least 1 topic tag to submit a node.',
    value: true,
  },
}

const timeRegex = /^\d{2}:\d{2}:\d{2}$/

const twitterOrYoutubeRegexOrMp3 =
  /^(?:(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)[\w-]{11}(?:\S*)?|(?:https?:\/\/)?(?:www\.)?twitter\.com\/i\/spaces\/\d+(?:\?|$)|.+\.mp3)$/i

export const SourceUrl: FC<Props> = ({ setValue, startTime }) => {
  const [enableTimestamps, setEnableTimestamps] = useState(false);

  const handleTimestamps = () => {
    if(setValue) {
        setValue('withTimeStamps', !enableTimestamps);
    }

    setEnableTimestamps(!enableTimestamps);
  }

  return (
    <>
      <Flex>
        <TextInput
          id="add-node-link"
          label="Link"
          message="Paste a valid YouTube or Twitter Space link here."
          name="link"
          placeholder="Paste your link here..."
          rules={{
            ...requiredRule,
            pattern: {
              message: 'You must enter a valid YouTube, Twitter Space or mp3 link.',
              value: twitterOrYoutubeRegexOrMp3,
            },
          }}
        />
        <Flex direction="row" pt={12}>
          <CheckBoxWrapper>
            Add timestamps
            <button className="checkbox" id="add-node-timestamps-checkbox" onClick={handleTimestamps} type="button">
              {enableTimestamps && <FaCheck color={colors.lightBlue500} />}
            </button>
          </CheckBoxWrapper>
        </Flex>

        {enableTimestamps && (
          <>
            <Flex direction="row" pt={12}>
              <Flex basis="50%" pr={16}>
                <TextInput
                  id="add-node-start-time"
                  label="Start Time"
                  mask="99:99:99"
                  message="Enter start and end timestamps which will encompass the segment of video or audio you want to submit. [hh:mm:ss]"
                  name="startTime"
                  placeholder="00:00:00"
                  rules={{
                    pattern: {
                      message: 'Timestamp must be in the format hh:mm:ss',
                      value: timeRegex,
                    },
                    ...{ ...requiredRule, required: enableTimestamps },
                  }}
                  showMask
                />
              </Flex>

              <Flex basis="50%" pl={16}>
                <TextInput
                  id="add-node-end-time"
                  label="End Time"
                  mask="99:99:99"
                  message="Enter start and end timestamps which will encompass the segment of video or audio you want to submit. [hh:mm:ss]"
                  name="endTime"
                  placeholder="00:00:00"
                  rules={{
                    pattern: {
                      message: 'Timestamp must be in the format hh:mm:ss',
                      value: timeRegex,
                    },
                    validate: {
                      endTime: (value) =>
                        value > (startTime || '00:00:00') || 'End time should be greater than start time',
                    },
                    ...{ ...requiredRule, required: enableTimestamps },
                  }}
                  showMask
                />
              </Flex>
            </Flex>

            <Flex pt={12}>
              <TextArea
                id="add-node-description"
                label="Clip Description"
                maxLength={100}
                message="Enter a short description of your audio/video segment. Think of this as the title of your node. [max 100 characters]"
                name="description"
                rules={{ ...requiredRule, required: enableTimestamps }}
              />
            </Flex>

            <Flex pt={12}>
              <TagInput
                id="add-node-tags"
                label="Tags"
                maxLength={50}
                message="Enter some topic tags that capture the main ideas of your segment. Be specific! Generic tags aren't useful for anyone. Think, 'What term(s) would someone search to find my node? [max: 15, max characters per tag: 50]"
                rules={tagRule}
              />
            </Flex>
          </>
        )}
      </Flex>
    </>
  )
}

const CheckBoxWrapper = styled.div`
  color: ${colors.lightGray};
  font-size: 14px;
  font-weight: 600;
  display: flex;

  .checkbox {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 2px solid ${colors.lightBlue400};
    margin-left: 16px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
    padding: 0;
  }
`