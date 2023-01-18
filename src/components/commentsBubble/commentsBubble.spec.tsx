import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CommentsBubble } from './commentsBubble'

describe('commentsBubble', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<CommentsBubble comments={[]} />)
    expect(baseElement).toBeTruthy()
    expect(await screen.findByTestId('comments-bubble')).toBeInTheDocument()
    expect(await screen.findByTestId('comments-bubble-comment')).toBeInTheDocument()
    expect(await screen.findByTestId('comments-bubble-comment')).toHaveTextContent('0')
  })
})
