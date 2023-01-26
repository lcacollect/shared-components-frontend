import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import { SxProps } from '@mui/material'

interface DropDownProps {
  inputLabel: string
  options: string[]
  setSelected: (value: string) => void
  sx?: SxProps
}

export const DropDown: React.FC<DropDownProps> = ({ inputLabel, options, setSelected, sx }) => {
  const optionList = options.map((option, index) => (
    <option key={index} value={option.toLocaleLowerCase()}>
      {option}
    </option>
  ))

  return (
    <Box sx={{ minWidth: 120, ...sx }} data-testid='drop-down'>
      <FormControl fullWidth>
        <InputLabel variant='standard' htmlFor='uncontrolled-native'>
          {inputLabel}
        </InputLabel>
        <NativeSelect
          onChange={(e) => setSelected(e.target.value)}
          defaultValue={30}
          inputProps={{
            name: '',
            id: 'uncontrolled-native',
          }}
          data-testid='native-select'
        >
          {optionList}
        </NativeSelect>
      </FormControl>
    </Box>
  )
}
