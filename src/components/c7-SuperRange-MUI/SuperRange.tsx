import React from 'react'

import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = props => {
  return (
    <Slider
      sx={{
        // стили для слайдера // пишет студент
        width: 150,
        color: '#00CC22',

        '& .MuiSlider-thumb': {
          color: 'white',
          border: 'solid 1px #00CC22',
          borderRadius: '50%',
        },
        '& .MuiSlider-thumb::after': {
          content: "' '",
          width: '6px',
          height: '6px',
          backgroundColor: '#00CC22',
          borderRadius: '50%',
        },
        '& .MuiSlider-rail': {
          opacity: 1,
          backgroundColor: '#8B8B8B',
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange
