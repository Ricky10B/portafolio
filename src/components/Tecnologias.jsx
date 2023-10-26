import { titleSection } from '../../App.css'
import { listTecnologies, tecnology } from './Tecnologias.css'
import { icons } from '../consts'
import { useTranslation } from 'react-i18next'

export const Tecnologias = () => {
  const { t } = useTranslation()

  return (
    <section id='tecnologias'>
      <h2 className={titleSection}>
        {t('technologies.title')}
      </h2>

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
