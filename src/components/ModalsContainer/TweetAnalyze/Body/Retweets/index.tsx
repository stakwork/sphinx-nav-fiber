import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import MaterialTable from '@mui/material/Table'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { CsvDownloadButton } from '~/components/common/CsvDownloader'
import { Flex } from '~/components/common/Flex'
import LinkIcon from '~/components/Icons/LinkIcon'
import { getPathway } from '~/network/fetchSourcesData'
import { Node } from '~/types'
import { colors } from '~/utils'
import { Avatar, SortBy, TweetLink, UserInfo, Username } from '..'

type Props = {
  sortBy: SortBy
  idsToAnalyze: string[]
}

export const RetweetsTable = ({ sortBy, idsToAnalyze }: Props) => {
  const [tweetsByFollowers, setTweetsByFollowers] = useState<Node[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchTweets = async () => {
      if (idsToAnalyze.length === 0) {
        return
      }

      setLoading(true)

      try {
        const responses = await Promise.all(
          idsToAnalyze.map((id) => getPathway(id, ['User'], ['RETWEETED_BY>'], '', true, 0, 1, 20)),
        )

        const mergedUsers: Node[] = []

        responses.forEach((response) => {
          if (response.nodes) {
            mergedUsers.push(...response.nodes)
          }
        })

        const sortedUsers = mergedUsers
          .filter((user) => user.node_type === 'User')
          .sort((a, b) => Number(b.properties?.followers) - Number(a.properties?.followers))
          .slice(0, 20)

        setTweetsByFollowers(sortedUsers)

        setLoading(false)
      } catch (err) {
        console.error('Error fetching tweets:', err)
        setLoading(false)
        setError('Error fetching tweets')
      } finally {
        setLoading(false)
      }
    }

    fetchTweets()
  }, [sortBy, idsToAnalyze])

  const tweetsToRender = tweetsByFollowers

  if (error) {
    return <div style={{ padding: 24, color: '#FF4D4F' }}>{error}</div>
  }

  if (!tweetsByFollowers.length) {
    return loading ? (
      <Flex align="center" grow={1} justify="center">
        <ClipLoader color={colors.white} />
        <div style={{ padding: 24, fontSize: 16, textAlign: 'center', color: colors.white }}>
          Loading engagement data...
        </div>
      </Flex>
    ) : (
      <div style={{ padding: 24, textAlign: 'center' }}>No engagement data available</div>
    )
  }

  const dataToDownload = tweetsToRender.map((tweet) => ({
    'User profile': tweet.properties?.twitter_handle ? tweet.properties?.twitter_handle : '',
    Followers: tweet.properties?.followers || '',
  }))

  return (
    <TableContainer component={Paper}>
      <MaterialTable aria-label="a dense table" size="small" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Rank</TableCell>
            <TableCell align="left">User Profile</TableCell>
            <TableCell align="left">Followers</TableCell>
            <TableCell align="left">
              <CsvDownloadButton data={dataToDownload} filename={`${sortBy}-${moment().format('YYYY-MM-DD')}.csv`} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tweetsToRender.map((tweet, index) => (
            <TableRow key={tweet.ref_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Avatar imageUrl={tweet.properties?.image_url} />
                <Flex align="center" direction="row" justify="flex-start" mt={16}>
                  <UserInfo>
                    {tweet?.properties?.twitter_handle && <Username>{tweet.properties.twitter_handle}</Username>}
                  </UserInfo>
                  <TweetLink
                    aria-label="View tweet on Twitter"
                    href={`https://twitter.com/${tweet?.properties?.twitter_handle}?open=system`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <LinkIcon />
                  </TweetLink>
                </Flex>
              </TableCell>
              <TableCell>{tweet.properties?.followers || ''}</TableCell>{' '}
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  )
}
