import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { AutoSaveCheckMark } from './autoSaveCheckMark'
import { ApolloError } from '@apollo/react-hooks'

describe('AutoSaveCheckMark', () => {
  it('should render nothing', async () => {
    const { baseElement } = render(<AutoSaveCheckMark loading={false} />)
    expect(baseElement.firstChild).toBeEmptyDOMElement()
  })

  it('should render a spinner', async () => {
    const { baseElement } = render(<AutoSaveCheckMark loading={true} />)
    expect(baseElement).toBeInTheDocument()
    expect(await screen.findByTestId('autosave-loading')).toBeInTheDocument()
  })

  it('should render check mark', async () => {
    const { rerender } = render(<AutoSaveCheckMark loading={true} />)
    expect(await screen.findByTestId('autosave-loading')).toBeInTheDocument()
    rerender(<AutoSaveCheckMark loading={false} />)
    expect(await screen.findByTestId('autosave-success')).toBeInTheDocument()
  })

  it('should render error', async () => {
    const { baseElement } = render(<AutoSaveCheckMark loading={false} error={new ApolloError({})} />)
    expect(baseElement).toBeInTheDocument()
    expect(await screen.findByTestId('autosave-error')).toBeInTheDocument()
  })
})
