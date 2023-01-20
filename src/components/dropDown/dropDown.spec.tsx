import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { DropDown } from './dropDown'

describe('dropDown', () => {
  it('renders options correctly', () => {
    const options = ['option 1', 'option 2', 'option 3']
    const { getByTestId } = render(<DropDown inputLabel='input label' options={options} setSelected={() => null} />)
    const nativeSelect = getByTestId('native-select')
    expect(nativeSelect.children[0]).toHaveLength(3)
    expect(nativeSelect.children[0][0]).toHaveTextContent('option 1')
    expect(nativeSelect.children[0][1]).toHaveTextContent('option 2')
    expect(nativeSelect.children[0][2]).toHaveTextContent('option 3')
  })

  it('renders input label correctly', () => {
    const inputLabel = 'Test Label'
    const options = ['option 1', 'option 2']
    const { getByText } = render(<DropDown options={options} inputLabel={inputLabel} setSelected={() => null} />)
    const label = getByText(inputLabel)
    expect(label).toBeInTheDocument()
  })
})
