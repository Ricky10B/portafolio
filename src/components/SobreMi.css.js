import { style } from '@vanilla-extract/css'

export const section = style({
  padding: '0 1em',
  textAlign: 'center',
  '@media': {
    'screen and (min-width: 640px)': {
      padding: '0 2em'
    },
    'screen and (min-width: 768px)': {
      width: '75%',
      margin: '0 auto'
    }
  }
})

export const miDescripcion = style({
  fontSize: '18px',
  color: 'white',
  letterSpacing: '0.4px'
})
