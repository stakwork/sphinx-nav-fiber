export const videoTimetoSeconds = (value: string | undefined) => {
  const startEnd = (value || '').split('-')
  const start = startEnd[0] || '00:00:00'

  const [hh1, mm1, ss1] = start.split(':')
  const h1 = parseInt(hh1, 10)
  const m1 = parseInt(mm1, 10)
  const s1 = parseInt(ss1, 10)

  const end = startEnd[1] || '00:00:00'
  const [hh2, mm2, ss2] = end.split(':')
  const h2 = parseInt(hh2, 10)
  const m2 = parseInt(mm2, 10)
  const s2 = parseInt(ss2, 10)

  return {
    start: h1 * 3600 + m1 * 60 + s1,
    end: h2 * 3600 + m2 * 60 + s2,
  }
}
