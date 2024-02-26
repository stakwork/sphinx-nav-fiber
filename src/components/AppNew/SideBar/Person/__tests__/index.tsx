import { render } from '@testing-library/react'
import React from 'react'
import { Person } from '..'
import { useSelectedNode } from '../../../../../stores/useDataStore'

const mockedUseSelectedNode = useSelectedNode as jest.MockedFunction<typeof useSelectedNode>

jest.mock('~/stores/useDataStore', () => ({
  useSelectedNode: jest.fn(),
}))

describe('Person Component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders person name from selectedNode', () => {
    mockedUseSelectedNode.mockReturnValue({
      name: 'John Doe',
      image_url: 'http://example.com/john_doe.png',
    })

    const { getByText } = render(<Person />)

    expect(getByText('John Doe')).toBeInTheDocument()
  })

  it('renders person label if name is not available', () => {
    mockedUseSelectedNode.mockReturnValue({
      label: 'Jane Doe',
      image_url: 'http://example.com/jane_doe.png',
    })

    const { getByText } = render(<Person />)

    expect(getByText('Jane Doe')).toBeInTheDocument()
  })

  it('renders default avatar when image_url is not available', () => {
    mockedUseSelectedNode.mockReturnValue({
      name: 'John Doe',
    })

    const { getByTestId } = render(<Person />)
    const avatar = getByTestId('person-image')

    expect(avatar).toHaveAttribute('src', 'person_placeholder_img.png')
  })

  it('renders avatar with provided image_url', () => {
    const imageUrl = 'http://example.com/john_doe.png'

    mockedUseSelectedNode.mockReturnValue({
      name: 'John Doe',
      image_url: imageUrl,
    })

    const { getByTestId } = render(<Person />)
    const avatar = getByTestId('person-image')

    expect(avatar).toHaveAttribute('src', imageUrl)
  })

  test('asserts that component handles this case gracefully with no selectedNode', () => {
    mockedUseSelectedNode.mockReturnValue(null)

    const { getByTestId } = render(<Person />)

    expect(getByTestId('person-image')).toHaveAttribute('src', 'person_placeholder_img.png')
  })
})
