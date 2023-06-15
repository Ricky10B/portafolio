import { style } from '@vanilla-extract/css'

export const listProyects = style({
  listStyle: 'none',
  margin: '0',
  padding: '0 1em',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
  gap: '2.5em',
  '@media': {
    'screen and (min-width: 640px)': {
      padding: '0 2em'
    }
  }
})

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  background: '#041449',
  borderRadius: '8px',
  boxShadow: '1px 4px 13px #000',
  textDecoration: 'none',
  color: '#d6d6d6',
  minHeight: '480px',
  height: '100%',
  transition: 'transform .7s',
  cursor: 'pointer',
  ':hover': {
    transform: 'scale(1.05)',
    opacity: '.85'
  }
})

export const imageCard = style({
  width: '100%',
  height: '100%',
  display: 'block',
  aspectRatio: '16/9',
  borderTopRightRadius: '8px',
  borderTopLeftRadius: '8px'
})

export const bodyCard = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
  padding: '.5em 1em'
})

export const titleProyect = style({
  margin: '.5em 0',
  fontSize: '22px'
})

export const descriptionProyect = style({
  margin: '.2em 0'
})

export const contentButtons = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  '@media': {
    'screen and (min-width: 500px)': {
      flexDirection: 'row'
    }
  }
})

export const buttonsCard = style({
  background: '#0a0a26',
  padding: '.5em 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
  cursor: 'pointer',
  borderRadius: '5px',
  textDecoration: 'none',
  color: '#fff',
  fontWeight: '500',
  ':hover': {
    background: '#fff',
    color: '#0a0a26'
  }
})
