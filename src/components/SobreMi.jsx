import { useTranslation } from 'react-i18next'
import { titleSection } from '../../App.css'
import { section, miDescripcion } from './SobreMi.css'

export const SobreMi = () => {
  const { t } = useTranslation()

  return (
    <section id='sobreMi' className={section}>
      <h2 className={titleSection}>
        {t('aboutMe.title')}
      </h2>

      <p className={`${miDescripcion} textBalanced`}>
        {t('aboutMe.description')}
      </p>
    </section>
  )
}
