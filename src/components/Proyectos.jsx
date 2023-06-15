import { Github, Globe } from 'lucide-react'
import {
  card,
  imageCard,
  listProyects,
  buttonsCard,
  bodyCard,
  titleProyect,
  contentButtons
} from './Proyectos.css'
import { titleSection } from '../../App.css'
import { dataProyects } from '../consts'

export const Proyectos = () => {
  const goToProyect = (urlProyect) => {
    window.open(urlProyect)
  }

  return (
    <section id='proyectos'>
      <h2 className={titleSection}>Proyectos</h2>

      <ul className={listProyects}>
        {dataProyects.map(dataProyect => (
          <li
            key={dataProyect.imageProyect}
            className={card}
            onClick={() => goToProyect(dataProyect.enlaceApp)}
          >
            <header>
              <img src={dataProyect.imageProyect} alt='Proyecto aplicacion de chat' className={imageCard} />
            </header>
            <div className={bodyCard}>
              <div>
                <h4 className={titleProyect}>{dataProyect.title}</h4>
                <p>{dataProyect.description}</p>
              </div>
              <div className={contentButtons}>
                <a
                  className={buttonsCard}
                  href={dataProyect.enlaceGithub}
                  target='_blank'
                  rel='noreferrer noopener'
                  onClick={e => e.stopPropagation()}
                >
                  <Github />
                  Ver el código
                </a>

                <a
                  className={buttonsCard}
                  href={dataProyect.enlaceApp}
                  target='_blank'
                  rel='noreferrer noopener'
                  onClick={e => e.stopPropagation()}
                >
                  <Globe />
                  Ver la página
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
