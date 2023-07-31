import { style } from '@vanilla-extract/css'

export const header = style({
  backdropFilter: 'blur(35px)',
  display: 'flex',
  position: 'fixed',
  right: '0',
  left: '0',
  top: 'auto',
  bottom: '0',
  overflow: 'auto',
  padding: '0 1em',
  zIndex: '10',
  maxWidth: '1220px',
  margin: '0 auto',
  '@media': {
    'screen and (min-width: 640px)': {
      display: 'block',
      padding: '0 2em',
      top: '0',
      bottom: 'auto'
    },
    'screen and (min-width: 1280px)': {
      padding: '0'
    }
  },
  '::-webkit-scrollbar': {
    height: '.6em',
    background: '#fff',
    borderRadius: '20px'
  },
  '::-webkit-scrollbar-thumb': {
    background: '#918edf',
    borderRadius: '20px'
  }
})

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',
  '@media': {
    'screen and (min-width: 640px)': {
      justifyContent: 'space-between'
    }
  }
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
  padding: '1em 0',
  '@media': {
    'screen and (min-width: 640px)': {
      padding: '1em 0'
    }
  }
})

export const itemsList = style({
  textDecoration: 'none',
  color: 'white',
  whiteSpace: 'nowrap',
  ':hover': {
    textShadow: '0 0 8px #00b8ff, 0 0 8px #00b8ff, 0 0 8px #00b8ff'
  }
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
  marginBottom: '5em',
  letterSpacing: '0.4px',
  '@media': {
    'screen and (min-width: 640px)': {
      padding: '0 2em',
      marginBottom: '0'
    }
  }
})

export const miName = style({
  fontWeight: '700',
  fontSize: '18px'
})

export const headerImageProyect = style({
  height: '100%',
  overflow: 'hidden'
})
