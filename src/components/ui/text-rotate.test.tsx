import { createRef } from 'react'
import { act, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { TextRotate, type TextRotateRef } from './text-rotate'

describe('TextRotate', () => {
  it('renders the current text accessibly and exposes navigation methods', () => {
    const onNext = vi.fn()
    const ref = createRef<TextRotateRef>()

    render(
      <TextRotate
        ref={ref}
        texts={['Alpha', 'Beta', 'Gamma']}
        auto={false}
        splitBy="words"
        onNext={onNext}
      />,
    )

    expect(screen.getByText('Alpha', { selector: '.sr-only' })).toBeInTheDocument()

    act(() => ref.current?.next())
    expect(screen.getByText('Beta', { selector: '.sr-only' })).toBeInTheDocument()
    expect(onNext).toHaveBeenLastCalledWith(1)

    act(() => ref.current?.jumpTo(2))
    expect(screen.getByText('Gamma', { selector: '.sr-only' })).toBeInTheDocument()

    act(() => ref.current?.previous())
    expect(screen.getByText('Beta', { selector: '.sr-only' })).toBeInTheDocument()

    act(() => ref.current?.reset())
    expect(screen.getByText('Alpha', { selector: '.sr-only' })).toBeInTheDocument()
  })
})
