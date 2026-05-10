import { getCssMediaUrl, normalizeMediaUrl } from '..'

describe('mediaUrl helpers', () => {
  it('normalizes path-style S3 upload URLs to the virtual-hosted bucket URL', () => {
    expect(
      normalizeMediaUrl(
        'https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/file name.mp3',
      ),
    ).toBe('https://stakwork-uploads.s3.amazonaws.com/uploads/customers/4291/media_to_local/file%20name.mp3')
  })

  it('trims and encodes regular media URLs', () => {
    expect(normalizeMediaUrl(' https://example.com/content/image one.png ')).toBe(
      'https://example.com/content/image%20one.png',
    )
  })

  it('returns a quoted and escaped CSS URL', () => {
    expect(getCssMediaUrl('https://example.com/content/image "one".png')).toBe(
      'url("https://example.com/content/image%20%22one%22.png")',
    )
  })

  it('returns none for empty CSS media values', () => {
    expect(getCssMediaUrl('')).toBe('none')
  })
})
