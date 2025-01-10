import styled, { css } from 'styled-components'
import { Flex } from '~/components/common/Flex'
import ClearIcon from '~/components/Icons/ClearIcon'
import { useGraphStore } from '~/stores/useGraphStore'
import { colors } from '~/utils'

export const GraphSearch = () => {
  const [setSearchQuery, searchQuery] = useGraphStore((s) => [s.setSearchQuery, s.searchQuery])

  return (
    <Wrapper>
      <Input
        id="graph-search"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search graph"
        type="text"
        value={searchQuery}
      />
      <InputButton
        data-testid="search_action_icon"
        onClick={() => {
          setSearchQuery('')
        }}
      >
        <>{searchQuery?.trim() ? <ClearIcon /> : null}</>
      </InputButton>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  position: absolute;
  top: 20px;
  left: 20px;
  flex-direction: 'row';
`

const Input = styled.input.attrs(() => ({
  autoCorrect: 'off',
  autoComplete: 'off',
}))<{ loading?: boolean }>`
  pointer-events: auto;
  height: 48px;
  padding: 0 40px 0 18px;
  z-index: 2;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  color: #fff;
  box-shadow: none;
  border: none;
  border-radius: 200px;
  background: ${colors.BG2};

  -webkit-autofill,
  -webkit-autocomplete,
  -webkit-contacts-auto-fill,
  -webkit-credentials-auto-fill {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
    position: absolute !important;
    right: 0 !important;
  }

  &:focus {
    outline: 1px solid ${colors.primaryBlue};
  }

  &::placeholder {
    color: ${colors.GRAY7};
  }

  ${({ loading }) =>
    loading &&
    css`
      background-image: url('https://i.gifer.com/ZZ5H.gif');
      background-size: 25px 25px;
      background-position: right center;
      background-position-x: 95%;
      background-repeat: no-repeat;
    `}
`

const InputButton = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
  p: 5,
})`
  font-size: 32px;
  color: ${colors.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;
  width: 30px;
`
