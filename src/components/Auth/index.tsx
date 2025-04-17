import { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import * as sphinx from 'sphinx-bridge'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { OnboardingModal } from '~/components/ModalsContainer/OnboardingFlow'
import { isDevelopment, isE2E } from '~/constants'
import { getIsAdmin } from '~/network/auth'
import { useDataStore } from '~/stores/useDataStore'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useUserStore } from '~/stores/useUserStore'
import { sphinxBridge } from '~/testSphinxBridge'
import { updateBudget } from '~/utils'
import { isAndroid, isWebView } from '~/utils/isWebView'
import { Splash } from '../App/Splash'

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const [unAuthorized, setUnauthorized] = useState(false)
  const { setBudget, setIsAdmin, setPubKey, setIsAuthenticated, setSwarmUiUrl } = useUserStore((s) => s)
  const { splashDataLoading } = useDataStore((s) => s)
  const [renderMainPage, setRenderMainPage] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(false)

  const {
    setTrendingTopicsFeatureFlag,
    setQueuedSourcesFeatureFlag,
    setCustomSchemaFeatureFlag,
    setRealtimeGraphFeatureFlag,
    setChatInterfaceFeatureFlag,
    setFastFiltersFeatureFlag,
    setChatSplashScreenAsDefault,
  } = useFeatureFlagStore((s) => s)

  const handleAuth = useCallback(async () => {
    localStorage.removeItem('admin')
    localStorage.removeItem('signature')

    let sphinxEnable

    try {
      if (!isE2E) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        sphinxEnable = await sphinx.enable()
      } else {
        sphinxEnable = await sphinxBridge.enable()
      }

      sessionStorage.setItem('isSphinx', sphinxEnable ? 'true' : 'false')

      setPubKey(sphinxEnable?.pubkey)
    } catch (error) {
      setPubKey('')
    }

    if (isE2E || isDevelopment) {
      setIsAuthenticated(true)
    }
  }, [setPubKey, setIsAuthenticated])

  const handleIsAdmin = useCallback(async () => {
    try {
      const res = await getIsAdmin()

      if (res.data) {
        const isAdmin = !!res.data.isAdmin

        localStorage.setItem('admin', JSON.stringify({ isAdmin }))

        if (isAdmin && res.data.swarmUiUrl) {
          setSwarmUiUrl(res.data.swarmUiUrl)
        }

        setIsAdmin(isAdmin)
        setTrendingTopicsFeatureFlag(res.data.trendingTopics)
        setQueuedSourcesFeatureFlag(res.data.queuedSources)
        setCustomSchemaFeatureFlag(res.data.customSchema)
        setRealtimeGraphFeatureFlag(res.data.realtimeGraph || false)
        setChatInterfaceFeatureFlag(res.data.chatInterface || false)
        setFastFiltersFeatureFlag(res.data.fastFilters || false)
        setChatSplashScreenAsDefault(res.data.chatSplashScreenAsDefault || false)

        if (isAdmin && !res.data.title) {
          setShowOnboarding(true)
        }
      }

      setIsAuthenticated(true)
      setRenderMainPage(true)
    } catch (error) {
      /* not an admin */
      setUnauthorized(true)
    }
  }, [
    setIsAuthenticated,
    setIsAdmin,
    setTrendingTopicsFeatureFlag,
    setQueuedSourcesFeatureFlag,
    setCustomSchemaFeatureFlag,
    setRealtimeGraphFeatureFlag,
    setChatInterfaceFeatureFlag,
    setFastFiltersFeatureFlag,
    setSwarmUiUrl,
    setChatSplashScreenAsDefault,
  ])

  // auth checker
  useEffect(() => {
    const init = async () => {
      if (isWebView() || isE2E || isAndroid()) {
        try {
          if (isAndroid()) {
            // eslint-disable-next-line no-promise-executor-return
            await new Promise((r) => setTimeout(r, 5000))
          }

          await handleAuth()
        } catch (error) {
          console.error(error)
        }
      }

      await updateBudget(setBudget)

      await handleIsAdmin()
    }

    init()
  }, [handleAuth, handleIsAdmin, setBudget])

  const message = 'This is a private Graph, Contact Admin'

  if (unAuthorized) {
    return (
      <StyledFlex>
        <StyledText>{message}</StyledText>
      </StyledFlex>
    )
  }

  return (
    <>
      {showOnboarding && <OnboardingModal />}
      {splashDataLoading && <Splash />}
      {renderMainPage && children}
    </>
  )
}

const StyledText = styled(Text)`
  font-size: 5rem;
  font-weight: 600;
  font-family: 'Barlow';
  text-align: center;
`

const StyledFlex = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
