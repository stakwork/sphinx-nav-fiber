/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { random } from 'lodash'
import { RefObject } from 'react'
import { colors } from '~/utils/colors'

type SwingPoint = {
  x: number
  y: number
  radian: number
  range: number
  phase: number
}

const dpr = window.devicePixelRatio || 1

const pi = Math.PI
const points = 12
const radius = 200 * dpr
const h = 600 * dpr
const w = 600 * dpr

const center = {
  x: (w / 2) * dpr,
  y: (h / 2) * dpr,
}

const rangeMin = 3
const rangeMax = 25

export const createBtn = (ref: RefObject<HTMLCanvasElement>) => {
  const ctx = ref.current?.getContext('2d')
  const el = ref.current

  if (!ctx || !el) {
    return null
  }

  const gradients = getGradients(ctx)

  ctx.scale(dpr, dpr)

  el.width = w * dpr
  el.height = h * dpr

  const circles = getCircles(gradients)

  const intervalId = setInterval(() => {
    swingCircle(ctx, circles, gradients)
  }, 16) // 60FPS

  return () => clearInterval(intervalId)
}

function cycle(num1: number, num2: number) {
  return ((num1 % num2) + num2) % num2
}

function swingCircle(ctx2: CanvasRenderingContext2D, circles: SwingPoint[][], gradients: CanvasGradient[]) {
  ctx2.clearRect(0, 0, w * dpr, h * dpr)

  ctx2.globalAlpha = 0.9
  ctx2.globalCompositeOperation = 'screen'

  for (let k = 0; k < circles.length; k += 1) {
    const swingpoints = circles[k]

    for (let i = 0; i < swingpoints.length; i += 1) {
      swingpoints[i].phase += random(0, 9, false) * -0.01

      const phase = 4

      const r = radius + swingpoints[i].range * phase * Math.sin(swingpoints[i].phase) - rangeMax

      swingpoints[i].radian += pi / 360

      const ptX = center.x + r * Math.cos(swingpoints[i].radian)
      const ptY = center.y + r * Math.sin(swingpoints[i].radian)

      swingpoints[i] = {
        x: ptX,
        y: ptY,
        radian: swingpoints[i].radian,
        range: swingpoints[i].range,
        phase: swingpoints[i].phase,
      }
    }

    const fill = gradients[k]

    drawCurve(swingpoints, fill, ctx2)
  }
}

function getCircles(gradients: CanvasGradient[]) {
  const circles: SwingPoint[][] = []

  for (let idx = 0; idx <= gradients.length - 1; idx += 1) {
    const swingpoints: SwingPoint[] = []
    let radian = 0

    for (let i = 0; i < points; i += 1) {
      radian = ((pi * 2) / points) * i

      const ptX = center.x + radius * Math.cos(radian)
      const ptY = center.y + radius * Math.sin(radian)

      swingpoints.push({
        x: ptX,
        y: ptY,
        radian,
        range: random(rangeMin, rangeMax),
        phase: 0,
      })
    }

    circles.push(swingpoints)
  }

  return circles
}

function getGradients(ctx: CanvasRenderingContext2D) {
  const gradient1 = ctx.createLinearGradient(0, 0, w, 0)

  gradient1.addColorStop(0, colors.green100)
  gradient1.addColorStop(1, colors.green400)

  const gradient2 = ctx.createLinearGradient(0, 0, w, 0)

  gradient2.addColorStop(0, colors.lightBlue300)
  gradient2.addColorStop(1, colors.lightBlue500)

  const gradient3 = ctx.createLinearGradient(0, 0, w, 0)

  gradient3.addColorStop(0, colors.bluePressState)
  gradient3.addColorStop(1, colors.blueTextAccent)

  const gradient4 = ctx.createLinearGradient(0, 0, w, 0)

  gradient4.addColorStop(0, colors.modalShield)
  gradient4.addColorStop(1, colors.primaryBlueBorder)

  const gradients = [gradient1, gradient2, gradient3, gradient4]

  return gradients
}

function drawCurve(pts: any, fillStyle: CanvasGradient, ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = fillStyle
  ctx.beginPath()

  ctx.moveTo((pts[cycle(-1, points)].x + pts[0].x) / 2, (pts[cycle(-1, points)].y + pts[0].y) / 2)

  for (let i = 0; i < pts.length; i += 1) {
    ctx.quadraticCurveTo(
      pts[i].x,
      pts[i].y,
      (pts[i].x + pts[cycle(i + 1, points)].x) / 2,
      (pts[i].y + pts[cycle(i + 1, points)].y) / 2,
    )
  }

  ctx.closePath()
  ctx.fill()
}
