import '@testing-library/jest-dom'
import { getActiveClipForTime } from '..'

const transcript = (text: string) =>
  JSON.stringify([
    {
      id: 1,
      seek: 0,
      start: 0,
      end: 1,
      text,
      tokens: [],
      temperature: 0,
      avg_logprob: 0,
      compression_ratio: 0,
      no_speech_prob: 0,
      words: [],
    },
  ])

const makeClip = (refId: string, timestamp: string, text: string) => ({
  ref_id: refId,
  node_type: 'Clip',
  properties: {
    timestamp,
    transcript: transcript(text),
  },
})

describe('Mindset Transcript', () => {
  it('keeps the final clip active after playback reaches the final clip boundary', () => {
    const clips = [makeClip('clip-1', '0-10', 'Opening segment'), makeClip('clip-2', '10-20', 'Final segment')]

    expect(getActiveClipForTime(clips, 20)?.ref_id).toBe('clip-2')
  })
})
