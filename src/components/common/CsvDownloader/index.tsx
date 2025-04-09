import { Button } from '@mui/material'

type CsvDownloadButtonProps<T extends Record<string, unknown>> = {
  data: T[]
  filename?: string
}

export const CsvDownloadButton = <T extends Record<string, unknown>>({
  data,
  filename = 'data.csv',
}: CsvDownloadButtonProps<T>) => {
  const convertToCSV = (rawData: T[]): string => {
    if (rawData.length === 0) {
      return ''
    }

    const headers = Object.keys(rawData[0])

    const replacer = (key: string, value: unknown): string => {
      if (typeof value === 'string') {
        return `"${value.replace(/"/g, '""')}"`
      }

      if (value !== null && value !== undefined) {
        return String(value)
      }

      return ''
    }

    const rows = rawData.map((row) => headers.map((field) => replacer(field, row[field])).join(','))

    return [headers.join(','), ...rows].join('\n')
  }

  const downloadCSV = () => {
    const csv = convertToCSV(data)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')

    link.href = url
    link.download = filename
    link.style.display = 'none'

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <Button onClick={downloadCSV} type="button">
      Download CSV
    </Button>
  )
}
