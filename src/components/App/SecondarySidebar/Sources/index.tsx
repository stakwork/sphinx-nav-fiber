import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getRadarData } from '~/network/fetchGraphData'
import { FetchRadarResponse, Sources as SourcesType } from '~/types'
import { colors } from '~/utils/colors'
import { Pill } from '~/components/common/Pill'

const TWITTER_LINK = 'https://twitter.com'

interface ISourceMap {
  [key: string]: string
}

type TPill = {
  selected: boolean;
}

const sourcesMapper: ISourceMap = {
  topic: 'Topic',
  twitter_handle: 'Twitter Handle',
}

export const Sources = () => {
  const [sourcesData, setSourcesData] = useState<SourcesType[] | undefined>(undefined)
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    const init = async () => {
      try {
        const data: FetchRadarResponse = await getRadarData()

        setSourcesData(data.data)
      } catch (error) {
        console.log(error)
      }
    }

    init()
  }, [])

  const onFilterChange = (val: string) => {
    if(typeFilter === val || !val) {
      setTypeFilter('');
    } else {
      setTypeFilter(val);
    }
  }

  const tableValues = sourcesData?.filter((val) => !typeFilter || val.source_type === typeFilter);

  return (
    <ChartWrapper align="flex-start" direction="column" justify="flex-end">
      <Text className="title">Sources for this Graph</Text>
      <Flex direction="row" pb={16}>
        <StyledPill onClick={() => onFilterChange('')} selected={!typeFilter}>
          All
        </StyledPill>
        {Object.keys(sourcesMapper).map((key: string) => (
          <StyledPill key={key} onClick={() => onFilterChange(key)} selected={key === typeFilter}>
            {sourcesMapper[key]}
          </StyledPill>
        ))}
      </Flex>
      <Table>
        <thead>
          <tr>
            <Th>Type</Th>
            <Th>Source</Th>
          </tr>
        </thead>
        {tableValues?.length && (
          <tbody>
            {tableValues?.map((i: SourcesType) => (
              <tr key={i.source}>
                <Td>{sourcesMapper[i.source_type]}</Td>
                <Td>
                  {i.source_type === 'twitter_handle' ? (
                    <StyledLink href={`${TWITTER_LINK}/${i.source}`} target="_blank">
                      @{i.source}
                    </StyledLink>
                  ) : (
                    i.source
                  )}
                </Td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    </ChartWrapper>
  )
}

const ChartWrapper = styled(Flex)`
  border-radius: 8px;
  background: ${colors.dashboardHeader};
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: ${colors.white};
`

const Th = styled.th`
  border: 1px solid ${colors.white};
  padding: 8px;
`

const Td = styled.td`
  border: 1px solid ${colors.white};
  padding: 8px;
`

const StyledLink = styled.a`
  color: ${colors.white};
  text-decoration: underline;
  &:visited {
    color: ${colors.white};
  }
`

const StyledPill = styled(Pill)<TPill>`
  cursor: pointer;
  background: ${(props) => (props.selected ? colors.white : 'transparent')};
  color: ${(props) => (props.selected ? colors.headerBackground : colors.white)};
  &:hover {
    color: ${(props) => (props.selected ? colors.headerBackground : colors.white)};
    background: ${(props) => (props.selected ? colors.white : 'transparent')};
    opacity: 0.8;
  }
`
