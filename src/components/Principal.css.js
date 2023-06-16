import { style, keyframes } from '@vanilla-extract/css'

const fadeInIcon = keyframes({
  '0%': {
    opacity: '0',
    transform: 'scale(.5)'
  },
  '49%': {
    opacity: '0',
    transform: 'scale(.5)'
  },
  '50%': { opacity: '1' },
  '90%': { transform: 'scale(1.2)' },
  '100%': { transform: 'scale(1)' }
})

const fondoAnim = keyframes({
  '0%': { backgroundPosition: 'right' },
  '100%': { backgroundPosition: 'left' }
})

export const principalContent = style({
  backgroundImage: "linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url('/assets/bg_page.webp')",
  backgroundSize: 'cover',
  padding: '0 1em',
  height: '85vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '8px',
  '@media': {
    'screen and (min-width: 640px)': {
      height: '75vh',
      padding: '0 2em'
    }
  }
})

export const titlePrincipalContent = style({
  margin: '0',
  fontSize: '3em'
})

export const paragraphPrincipalContent = style({
  margin: '0',
  fontSize: '1.2em'
})

export const listIcons = style({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '0',
  margin: '0',
  width: '100%',
  '@media': {
    'screen and (min-width: 460px)': {
      width: '50%'
    },
    'screen and (min-width: 640px)': {
      width: '100%',
      flexDirection: 'row'
    }
  }
})

export const itemCV = style({
  animation: `${fadeInIcon} .3s`
})

export const itemGithub = style({
  animation: `${fadeInIcon} .6s`
})

export const itemLinkedin = style({
  animation: `${fadeInIcon} .9s`
})

export const icon = style({
  padding: '.5em 0',
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  borderRadius: '5px',
  textDecoration: 'none',
  color: '#0a0a26',
  fontWeight: '600',
  letterSpacing: '0.3px',
  whiteSpace: 'nowrap',
  backgroundImage: 'linear-gradient(to right, #77e5e9 0%, #77e5e9 0%, #00faff 25%, #77e5e9 0%, #77e5e9 0%)',
  backgroundSize: '700%',
  animation: `${fondoAnim} 3s infinite`,
  ':hover': {
    backgroundImage: 'linear-gradient(to right, #010180 0%, #010180 0%, #090922 25%, #010180 0%, #010180 0%)',
    color: '#2cf6fd'
  },
  '@media': {
    'screen and (min-width: 640px)': {
      padding: '.5em 1.5em'
    }
  }
})

export const textOfButton = style({
  display: 'block',
  '@media': {
    'screen and (min-width: 640px)': {
      display: 'none'
    }
  }
})
