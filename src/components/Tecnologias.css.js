import { style } from '@vanilla-extract/css'

export const listTecnologies = style({
  listStyle: 'none',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(min(180px, 100%), 1fr))',
  justifyItems: 'center',
  gap: '26px',
  padding: '0 1em',
  '@media': {
    'screen and (min-width: 640px)': {
      padding: '0 2em'
    }
  }
})

export const tecnology = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  width: '180px',
  border: '2px solid #00b8ff',
  borderRadius: '8px',
  padding: '6px 27px',
  fontWeight: 'bold'
})
