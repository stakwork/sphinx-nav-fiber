import { Fade, IconButton, IconButtonProps, Paper, Stack, styled } from '@mui/material'

import { useState } from 'react'
import { SentimentAnalysis } from './SentimentAnalysis'

import { MdClose } from 'react-icons/md'
import { colors } from '~/utils/colors'
import { ActionsMenu } from './ActionsMenu'
import { AskQuestion } from './AskQuestion'
import { TabsVariants } from './const'
import { useHelper } from './context'
import { TeachMe } from './TeachMe'

export const MENU_WIDTH = 400

type ComponentsMapperType = Record<TabsVariants, JSX.Element>

const ComponentsMapper: ComponentsMapperType = {
  askQuestion: <AskQuestion />,
  teachMe: <TeachMe />,
  sentiment: <SentimentAnalysis />,
}

const heightMap: Record<TabsVariants | 'default', number> = {
  askQuestion: 400,
  sentiment: 600,
  teachMe: 400,
  default: 200,
}

export const HelperContent = () => {
  const { isShow, setIsShow } = useHelper()
  const [selectedView, setSelectedView] = useState<TabsVariants | null>(null)

  return (
    <ContentWrapper>
      <Fade in={isShow} mountOnEnter unmountOnExit>
        <Stack
          bgcolor={colors.listBg}
          component={Paper}
          elevation={2}
          height={heightMap[selectedView ?? 'default']}
          p={2}
          pb={4}
          pt={4}
          sx={{
            transition: ({ transitions }) => `${transitions.create(['height', 'opacity'])}!important`,
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
          width={{ xs: 'calc(100vw - 8px * 4)', sm: MENU_WIDTH }}
        >
          <CloseButton
            onClick={() => {
              setSelectedView(null)
              setIsShow((s) => !s)
            }}
          />
          <ActionsMenu active={selectedView} onChange={setSelectedView} />
          {selectedView && ComponentsMapper[selectedView]}
        </Stack>
      </Fade>
    </ContentWrapper>
  )
}

const ContentWrapper = styled('div')(() => ({
  position: 'absolute',
  bottom: '1rem',
  right: '1rem',
}))

const CloseButton = styled((props: IconButtonProps) => (
  <IconButton component="button" size="small" {...props}>
    <MdClose />
  </IconButton>
))(() => ({
  position: 'absolute',
  right: '0.5rem',
  top: '0.5rem',
}))
