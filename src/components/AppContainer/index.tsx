import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { isE2E } from '~/constants'
import { E2ETests } from '~/utils'
import { AppProviders } from '../App/Providers'
import { AuthGuard } from '../Auth'
import { LandingPage } from '../mindset/components/LandingPage'
import { TweetsLandingPage } from '../mindset/tweet/components/LandingPage'

// Lazy-loaded components
const LazyApp = lazy(() => import('../App').then(({ App }) => ({ default: App })))
const LazyMindSet = lazy(() => import('../mindset').then(({ MindSet }) => ({ default: MindSet })))
const LazyTweetMindSet = lazy(() => import('../mindset/tweet').then(({ TweetMindset }) => ({ default: TweetMindset })))
const LazyTopicMindSet = lazy(() => import('../mindset/topic').then(({ TopicMindset }) => ({ default: TopicMindset })))

export const AppContainer = () => {
  const isMindSetHost =
    window.location?.hostname === 'graphmindset.sphinx.chat' || (window.location.hostname === 'localhost' && !isE2E)

  return (
    <AppProviders>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {isMindSetHost && (
            <>
              <Route element={<LandingPage />} path="/" />
              <Route element={<LazyMindSet />} path="/episode/:episodeId" />
              <Route element={<LazyMindSet />} path="/episode/:episodeId/node/:selectedNodeId" />
              <Route element={<LazyTweetMindSet />} path="/tweet/:tweetId" />
              <Route element={<LazyTweetMindSet />} path="/tweet/:tweetId/node/:selectedNodeId" />
              <Route element={<LazyTopicMindSet />} path="/topic/:topicId" />
              <Route element={<LazyTopicMindSet />} path="/topic/:topicId/node/:selectedNodeId" />
              <Route element={<Navigate replace to="/" />} path="/episode" />
              <Route element={<TweetsLandingPage />} path="/tweet" />
            </>
          )}
          <Route
            element={
              <AuthGuard>
                <LazyApp />
              </AuthGuard>
            }
            path="/"
          />
          <Route
            element={
              <AuthGuard>
                <LazyApp />
              </AuthGuard>
            }
            path="/search"
          />
          <Route
            element={
              <AuthGuard>
                <LazyApp />
              </AuthGuard>
            }
            path="*"
          />
        </Routes>
      </Suspense>
      <E2ETests />
    </AppProviders>
  )
}
