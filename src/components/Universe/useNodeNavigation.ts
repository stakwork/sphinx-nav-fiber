import { useLocation, useNavigate } from 'react-router-dom'

export const useNodeNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return {
    navigateToNode: (selectedNodeId: string | null) => {
      if (!selectedNodeId) {
        navigate('..', { replace: true })

        return
      }

      const basePath = location.pathname.split('/node/')[0].replace(/\/$/, '')

      navigate(`${basePath}/node/${selectedNodeId}`, { replace: true })
    },
  }
}
