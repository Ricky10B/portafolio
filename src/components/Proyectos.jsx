import { Github, Globe } from 'lucide-react'
import {
  card,
  imageCard,
  listProjects,
  buttonsCard,
  bodyCard,
  titleProyect,
  descriptionProyect,
  contentButtons
} from './Proyectos.css'
import { titleSection } from '../../App.css'
import { dataProjects } from '../consts'
import { useTranslation } from 'react-i18next'

export const Proyectos = () => {
  const { t } = useTranslation()

  const goToProyect = (urlProject) => {
    window.open(urlProject, '_blank', 'noreferrer noopener')
  }

  return (
    <section id='proyectos'>
      <h2 className={titleSection}>
        {t('projects.title')}
      </h2>

      <ul className={listProjects}>
        {dataProjects.map(dataProject => (
          <li
            key={dataProject.imageProject}
            className={card}
            onClick={() => goToProyect(dataProject.enlaceApp)}
          >
            <header>
              <img
                src={dataProject.imageProject}
                alt={t(`projects.itemsCards.images.description${dataProject.id}`)}
                className={imageCard}
              />
            </header>
            <div className={bodyCard}>
              <div>
                <h4 className={titleProyect}>
                  {t(`projects.itemsCards.titles.title${dataProject.id}`)}
                </h4>
                <p className={descriptionProyect}>
                  {t(`projects.itemsCards.descriptions.description${dataProject.id}`)}
                </p>
              </div>
              <div className={contentButtons}>
                <a
                  className={buttonsCard}
                  href={dataProject.enlaceGithub}
                  target='_blank'
                  rel='noreferrer noopener'
                  onClick={e => e.stopPropagation()}
                >
                  <Github />
                  {t('projects.itemsCards.buttons.showCode')}
                </a>

                <a
                  className={buttonsCard}
                  href={dataProject.enlaceApp}
                  target='_blank'
                  rel='noreferrer noopener'
                  onClick={e => e.stopPropagation()}
                >
                  <Globe />
                  {t('projects.itemsCards.buttons.showPage')}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
