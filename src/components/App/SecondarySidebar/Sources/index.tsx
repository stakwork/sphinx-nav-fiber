import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getRadarData } from '~/network/fetchGraphData'
import { FetchRadarResponse, Sources as SourcesType } from '~/types'
import { colors } from '~/utils/colors'

const TWITTER_LINK = 'https://twitter.com'

interface ISourceMap {
  [key: string]: string,
}

const sourcesMapper: ISourceMap = {
  topic: 'Topic',
  twitter_handle: 'Twitter Handle',
}

export const Sources = () => {
  const [sourcesData, setSourcesData] = useState<SourcesType[] | undefined>(undefined)

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

  return (
    <ChartWrapper align="flex-start" direction="column" justify="flex-end">
      <Text className="title">Sources for this Graph</Text>
      <Table>
        <thead>
          <tr>
            <Th>Type</Th>
            <Th>Source</Th>
          </tr>
        </thead>
        {sourcesData?.length && (
          <tbody>
            {sourcesData?.map((i: SourcesType) => (
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
