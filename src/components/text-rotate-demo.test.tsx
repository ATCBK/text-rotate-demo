import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Preview } from './text-rotate-demo'

describe('Preview', () => {
  it('renders the first structured learning feature panel', () => {
    render(<Preview />)

    expect(
      screen.getByText('先理解学生，再为他规划真正适合的学习过程'),
    ).toBeInTheDocument()
    expect(screen.getByText('个性化创新｜')).toBeInTheDocument()
    expect(
      screen.getByText('融合目标、基础、偏好与薄弱点，构建动态学习画像'),
    ).toBeInTheDocument()
  })
})
