import { style } from '@vanilla-extract/css'

export const header = style({
  backdropFilter: 'blur(35px)',
  position: 'fixed',
  right: '0',
  left: '0',
  top: '0',
  padding: '0 1em',
  zIndex: '10',
  maxWidth: '1220px',
  margin: '0 auto',
  '@media': {
    'screen and (min-width: 640px)': {
      padding: '0 2em'
    },
    'screen and (min-width: 1280px)': {
      padding: '0'
    }
  }
})

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const logoNombre = style({
  fontFamily: "'Parisienne', cursive",
  fontSize: '2.2em',
  textShadow: '0 0 8px #00b8ff, 0 0 8px #00b8ff'
})

export const listHeader = style({
  display: 'flex',
  justifyContent: 'end',
  gap: '20px',
  listStyle: 'none',
  margin: '0',
  padding: '1em 0'
})

export const itemsList = style({
  textDecoration: 'none',
  color: 'white'
})

export const titleSection = style({
  textAlign: 'center',
  fontSize: '2em',
  padding: '1.6em 0 .5em',
  margin: '0'
})

export const footer = style({
  padding: '0 1em',
  marginTop: '2em',
  letterSpacing: '0.4px',
  '@media': {
    'screen and (min-width: 640px)': {
      padding: '0 2em'
    }
  }
})

export const miName = style({
  fontWeight: '700',
  fontSize: '18px'
})
