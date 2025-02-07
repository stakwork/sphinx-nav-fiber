import styled, { keyframes } from 'styled-components'

const slideInRight = keyframes`
  from {
    transform: translateX(100%) scale(0.98);
    opacity: 0;
  }
  to {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
`

const slideOutRight = keyframes`
  from {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
  to {
    transform: translateX(100%) scale(0.98);
    opacity: 0;
  }
`

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%) scale(0.98);
    opacity: 0;
  }
  to {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
`

const slideOutLeft = keyframes`
  from {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
  to {
    transform: translateX(-100%) scale(0.98);
    opacity: 0;
  }
`

export const AnimatedSearchWrapper = styled.div<{ isAIChatActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: width 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  overflow: hidden;

  .search-section {
    animation: ${({ isAIChatActive }) => (isAIChatActive ? slideOutLeft : slideInLeft)} 0.5s
      cubic-bezier(0.25, 1, 0.5, 1);
  }

  .ai-chat-section {
    animation: ${({ isAIChatActive }) => (isAIChatActive ? slideInRight : slideOutRight)} 0.5s
      cubic-bezier(0.25, 1, 0.5, 1);
  }
`
