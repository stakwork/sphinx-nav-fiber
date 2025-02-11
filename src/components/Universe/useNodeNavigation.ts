import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

export const useNodeNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  return {
    navigateToNode: (selectedNodeId: string | null) => {
      const params = new URLSearchParams(searchParams)

      if (!selectedNodeId) {
        params.delete('node') // Remove the parameter when no node is selected
      } else {
        params.set('node', selectedNodeId) // Set the node ID in query params
      }

      navigate(`${location.pathname}?${params.toString()}`, { replace: true })
    },
  }
}
