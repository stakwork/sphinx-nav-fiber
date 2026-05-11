import { useState } from 'react'
import styled from 'styled-components'
import PlusIcon from '~/components/Icons/PlusIcon'
import { Flex } from '~/components/common/Flex'
import { SchemaLink } from '~/network/fetchSourcesData'
import { colors } from '~/utils'
import { PopoverBody } from '..'

type Props = {
  handleEdgeTypeClick: (type: string) => void
  selectedEdgeTypes: string[]
  schemaEdges: SchemaLink[]
}

export const EdgeTypes = ({ handleEdgeTypeClick, selectedEdgeTypes, schemaEdges }: Props) => {
  const [showAllEdges, setShowAllEdges] = useState(false)

  const edgesPerRow = 3
  const MAX_ROWS = 4
  const maxVisibleEdges = edgesPerRow * MAX_ROWS

  const uniqueEdgeTypes = [...new Set(schemaEdges.map((edge) => edge.edge_type))]
    .filter((edgeType) => edgeType && edgeType !== 'CHILD_OF')
    .sort()

  const visibleEdgeTypes = showAllEdges ? uniqueEdgeTypes : uniqueEdgeTypes.slice(0, maxVisibleEdges)

  if (!uniqueEdgeTypes.length) {
    return null
  }

  return (
    <>
      <PopoverHeader>
        <div>Edges</div>
        <CountSelectedWrapper>
          <Count>{selectedEdgeTypes.length}</Count>
          <SelectedText>Selected</SelectedText>
        </CountSelectedWrapper>
      </PopoverHeader>
      <PopoverBody>
        <SchemaTypeWrapper>
          {visibleEdgeTypes.map((edgeType) => (
            <SchemaType
              key={edgeType}
              isSelected={selectedEdgeTypes.includes(edgeType)}
              onClick={() => handleEdgeTypeClick(edgeType)}
            >
              {edgeType}
            </SchemaType>
          ))}
        </SchemaTypeWrapper>
        {!showAllEdges && uniqueEdgeTypes.length > maxVisibleEdges && (
          <ViewMoreButton onClick={() => setShowAllEdges(true)}>
            <PlusIconWrapper>
              <PlusIcon /> View More
            </PlusIconWrapper>
          </ViewMoreButton>
        )}
      </PopoverBody>
    </>
  )
}

const PopoverHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  font-family: Barlow;
  font-size: 18px;
  font-weight: 500;
`

const CountSelectedWrapper = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
`

const Count = styled.span`
  color: ${colors.white};
`

const SelectedText = styled.span`
  color: ${colors.GRAY3};
  margin-left: 4px;
`

const PlusIconWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  svg {
    width: 23px;
    height: 23px;
    fill: none;
    margin-top: 2px;
  }
`

const SchemaTypeWrapper = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 1,
  justify: 'flex-start',
})`
  flex-wrap: wrap;
  gap: 10px;
  padding-right: 10px;
  margin-right: calc(0px - 16px);
`

const SchemaType = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  justify: 'flex-start',
})<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? colors.black : colors.white)};
  background: ${({ isSelected }) => (isSelected ? colors.white : colors.BUTTON1_PRESS)};
  padding: 6px 10px 6px 8px;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.78px;
  margin: 0 3px;
  border-radius: 200px;
  cursor: pointer;

  &:hover {
    background: ${({ isSelected }) => (isSelected ? colors.white : colors.BUTTON1_PRESS)};
  }

  &:active {
    background: ${colors.white};
    color: ${colors.black};
  }
`

const ViewMoreButton = styled.button`
  background: transparent;
  color: ${colors.white};
  border: none;
  padding: 6px 12px 6px 3px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 4px;
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;

  &:hover {
    background: ${colors.BUTTON1_HOVER};
  }

  &:active {
    background: ${colors.BUTTON1_PRESS};
  }
`

