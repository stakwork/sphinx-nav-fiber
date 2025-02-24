import { memo } from 'react'
import { NodeExtended } from '~/types'
import { timeToMilliseconds } from '~/utils'
import { Chapter } from './Chapter'

type Props = {
  chapters: NodeExtended[]
  duration: number
}

export const Chapters = memo(({ chapters, duration }: Props) =>
  duration ? (
    <>
      {chapters.map((node, index) => {
        const timestampInSeconds = node?.properties?.timestamp
          ? timeToMilliseconds(node.properties.timestamp) / 1000
          : 0

        const nextTimestampInSeconds = chapters[index + 1]?.properties?.timestamp
          ? timeToMilliseconds(chapters[index + 1].properties?.timestamp as unknown as string) / 1000
          : duration // Use total duration for the last chapter

        const position = Math.floor((timestampInSeconds / duration) * 100)
        const nextPosition = Math.floor((nextTimestampInSeconds / duration) * 100)

        const width = nextPosition - position // Calculate the width of the chapter

        return (
          <Chapter
            // eslint-disable-next-line react/no-array-index-key
            key={`${node.ref_id}_${index}`}
            left={position}
            title={node?.properties?.name || node?.name || ''}
            width={width}
          />
        )
      })}
    </>
  ) : null,
)

Chapters.displayName = 'Chapters'
