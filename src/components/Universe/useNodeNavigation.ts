import { useLocation, useNavigate } from 'react-router-dom'

export const useNodeNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return {
    navigateToNode: (selectedNodeId: string | null) => {
      const basePath = location.pathname.split('/node/')[0]

      if (!selectedNodeId) {
        navigate(basePath, { replace: true })

        return
      }

      navigate(`${basePath}/node/${selectedNodeId}`, { replace: true })
    },
  }
}
