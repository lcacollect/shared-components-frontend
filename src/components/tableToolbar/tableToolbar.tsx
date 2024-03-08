import React from 'react'
import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid-pro'

export const TableToolbar = () => {
  const color = 'black'

  const fontWeight = 'bold'

  return (
    <GridToolbarContainer data-testid='table-toolbar'>
      <GridToolbarColumnsButton
        sx={{
          color,
          fontWeight,
        }}
        placeholder={''}
      />
      <GridToolbarFilterButton sx={{ color, fontWeight }} placeholder={''} />
    </GridToolbarContainer>
  )
}
