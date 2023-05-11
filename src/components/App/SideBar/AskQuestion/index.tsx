import { TextareaAutosize } from '@mui/base'
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material'
import { useState } from 'react'
import { MdSend } from 'react-icons/md'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { ToastMessage } from '~/components/common/Toast/toastMessage'
import { postTeachMe } from '~/network/fetchGraphData'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'

type Option = {
  label: string
  value: number
}

// Beginner, intermediate, advanced, expert

const options = [
  { label: 'Beginner', value: 'beginner' },
  { label: 'Intermediate', value: 'intermediate' },
  { label: 'Advanced', value: 'advanced' },
  { label: 'Expert', value: 'expert' },
]

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const names = ['Beginner', 'Intermediate', 'Advanced', 'Expert']

export const AskQuestion = () => {
  const data = useDataStore((s) => s.data)
  const [isTutorialLoading, setIsTutorialLoading] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string | null>('')
  const searchTerm = useAppStore((s) => s.currentSearch)
  const [personName, setPersonName] = useState<string[]>([])

  const handleTutorialStart = async () => {
    setIsTutorialLoading(true)

    try {
      const nodesWithTranscript = data?.nodes.filter((i) => i.text)
      const firstFiveItems = nodesWithTranscript?.slice(0, 5)

      if (searchTerm) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await sphinx.enable()

        await postTeachMe({
          term: searchTerm,
          transcripts: firstFiveItems?.length ? firstFiveItems.map((i) => i.text).join(' ') : '',
        })

        setIsTutorialLoading(false)

        toast(<ToastMessage message="We started preparing tutorial for you" />, {
          type: 'success',
        })
      }
    } catch (error) {
      setIsTutorialLoading(false)

      toast(<ToastMessage message="An error happened" />, {
        type: 'error',
      })
    }
  }

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedValue(event.target.value as string)
  }

  return (
    <>
      {!isTutorialLoading ? (
        <>
          <Flex p={12}>
            <Flex>
              <FormControl>
                <StyledInput id="select-label">Expertise level</StyledInput>
                <StyledSelect
                  id="demo-multiple-name"
                  input={<OutlinedInput label="Expertise level" />}
                  labelId="select-label"
                  MenuProps={MenuProps}
                  onChange={handleChange}
                  value={selectedValue}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </StyledSelect>
              </FormControl>
            </Flex>
          </Flex>
          <TextAreaWrapper p={12}>
            <StyledTextarea placeholder="Enter your question" />
            <IconWrapper>
              <MdSend color={colors.white} size="18" />
            </IconWrapper>
          </TextAreaWrapper>
        </>
      ) : (
        <Flex align="center" direction="row" justify="center" py={12}>
          <Flex px={12}>
            <Text>Generating Tutorial</Text>
          </Flex>
          <ClipLoader color={colors.white} />
        </Flex>
      )}
    </>
  )
}

const StyledTextarea = styled(TextareaAutosize)`
  background: ${colors.inputBg1};
  color: ${colors.secondaryText4};
  padding: 16px 8px;
  border: none;
  outline: none;
`

const StyledInput = styled(InputLabel)`
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${colors.secondaryText4};
  }
`

const StyledSelect = styled(Select)`
  .MuiInputBase-root {
    color: blue;
  }
  background: ${colors.inputBg1};

  .MuiSvgIcon-root {
    color: ${colors.white};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiSelect-select {
    color: ${colors.white};
  }
`

const TextAreaWrapper = styled(Flex)`
  position: relative;
`

const IconWrapper = styled(Flex)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: rotate(-45deg);
`
