import { titleSection } from '../../App.css'
import { listTecnologies, tecnology } from './Tecnologias.css'
import {
  IconoHTML,
  IconoCSS,
  IconoJS,
  IconoBootstrap,
  IconoTailwind,
  IconoReact,
  IconoGit,
  IconoRedux,
  IconoMongoDB,
  IconoNodeJS
} from '../Iconos'

export const Tecnologias = () => {
  const icons = [
    {
      Icon: IconoHTML,
      text: 'HTML'
    },
    {
      Icon: IconoCSS,
      text: 'CSS'
    },
    {
      Icon: IconoJS,
      text: 'JavaScript'
    },
    {
      Icon: IconoBootstrap,
      text: 'Bootstrap'
    },
    {
      Icon: IconoTailwind,
      text: 'TailwindCss'
    },
    {
      Icon: IconoReact,
      text: 'React'
    },
    {
      Icon: IconoGit,
      text: 'Git'
    },
    {
      Icon: IconoRedux,
      text: 'redux'
    },
    {
      Icon: IconoMongoDB,
      text: 'MongoDB'
    },
    {
      Icon: IconoNodeJS,
      text: 'NodeJs'
    }
  ]

  return (
    <section id='tecnologias'>
      <h2 className={titleSection}>Tecnologias</h2>

      <ul className={listTecnologies}>
        {icons.map((data, i) => {
          const { Icon, text } = data

          return (
            <li key={i} className={tecnology}>
              <Icon /> {text}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
