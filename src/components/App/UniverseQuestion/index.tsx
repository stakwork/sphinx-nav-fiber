import { Button } from '@mui/material'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import ArrowForwardIcon from '~/components/Icons/ArrowForwardIcon'
import ExploreIcon from '~/components/Icons/ExploreIcon'
import { Flex } from '~/components/common/Flex'
import { TextInput } from '~/components/common/TextInput'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'

type Prop = {
  onSubmit?: () => void
}

export const UniverseQuestion = ({ onSubmit }: Prop) => {
  const { fetchData, setAbortRequests } = useDataStore((s) => s)
  const [setBudget] = useUserStore((s) => [s.setBudget])

  const { setUniverseQuestionIsOpen, setSidebarOpen, setShowCollapseButton, setSearchFormValue } = useAppStore((s) => ({
    setUniverseQuestionIsOpen: s.setUniverseQuestionIsOpen,
    setSidebarOpen: s.setSidebarOpen,
    setShowCollapseButton: s.setShowCollapseButton,
    setSearchFormValue: s.setSearchFormValue,
  }))

  const handleUniverseQuestionIsOpen = () => {
    setUniverseQuestionIsOpen()
    setSidebarOpen(true)
    setShowCollapseButton(true)
  }

  const { watch } = useFormContext()

  const searchChat = watch('search')
  const isValidSearch = !!searchChat && searchChat.trim().length > 0

  useEffect(() => {
    setSearchFormValue(searchChat)
  }, [searchChat, setSearchFormValue])

  const handleSubmitQuestion = async () => {
    if (searchChat) {
      setUniverseQuestionIsOpen()
    }

    setSidebarOpen(true)
    setShowCollapseButton(true)
    onSubmit?.()

    await fetchData(setBudget, setAbortRequests, searchChat)
  }

  const canSubmit = true

  const onEnterPress = async (e: React.KeyboardEvent) => {
    if (e.keyCode === 13 && e.shiftKey === false && canSubmit) {
      e.preventDefault()
      handleSubmitQuestion()
    }
  }

  return (
    <Wrapper>
      Ideas have shapes
      <TextAreaWrapper onKeyDown={onEnterPress} py={12} tabIndex={-1}>
        <StyledTextArea
          borderColor="#353A46"
          id="main-search"
          isTextArea
          name="search"
          placeholder="What do you want to know?"
        />
        <StyledButton
          allowSearch={isValidSearch}
          color="secondary"
          disabled={!isValidSearch}
          onClick={handleSubmitQuestion}
          variant="contained"
        >
          {isValidSearch ? (
            <>
              Search <ArrowForwardIcon />
            </>
          ) : (
            <ArrowForwardIcon />
          )}
        </StyledButton>
      </TextAreaWrapper>
      <CloseButton onClick={handleUniverseQuestionIsOpen} startIcon={<ExploreIcon />}>
        Explore graph
      </CloseButton>
    </Wrapper>
  )
}

const StyledTextArea = styled(TextInput)`
  background: ${colors.BG1};
  max-width: 702px;
  width: 900px;
  color: ${colors.white};
  padding: 16px 8px;
  border-radius: 12px;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.5);

  &:-moz-placeholder, /* Firefox 18- */
  &::-moz-placeholder, /* Firefox 19+ */
  &:-ms-input-placeholder, /* IE 10+ */
  &::-webkit-input-placeholder, /* Webkit based */
  &::placeholder {
    color: #0bf;
  }
`

const TextAreaWrapper = styled(Flex)`
  position: relative;
  width: 50%;
  margin-top: 30px;
`

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
  font-family: 'Barlow';
  line-height: 16px;
`

const StyledButton = styled(Button)<{ allowSearch?: boolean }>`
  && {
    position: absolute;
    bottom: 27px;
    margin-left: ${({ allowSearch }) => (allowSearch ? '88%' : '93%')};
    height: 30px;
    padding: 8px 7px;
    min-width: 32px;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`

const CloseButton = styled(Button)`
  && {
    position: absolute;
    bottom: 20px;
    right: 20px;
    border-radius: 16px;
  }
`
