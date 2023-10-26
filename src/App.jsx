import {
  header,
  nav,
  listHeader,
  itemsList,
  logoNombre,
  footer,
  miName,
  buttonI18n,
  containerI18n,
  languageSelected
} from '../App.css'
import { Trans, useTranslation } from 'react-i18next'
import { Proyectos } from './components/Proyectos'
import { Principal } from './components/Principal'
import { SobreMi } from './components/SobreMi'
import { Tecnologias } from './components/Tecnologias'

const lngs = {
  es: { nativeName: 'Español' },
  en: { nativeName: 'English' }
}

export const App = () => {
  const { i18n, t } = useTranslation()

  return (
    <main>
      <header className={header}>
        <nav className={nav}>
          <a className={logoNombre}>
            Ricky
          </a>
          <ul className={listHeader}>
            <li>
              <a href='#principal' className={itemsList}>{t('header.links.home')}</a>
            </li>
            <li>
              <a href='#sobreMi' className={itemsList}>{t('header.links.aboutMe')}</a>
            </li>
            <li>
              <a href='#proyectos' className={itemsList}>{t('header.links.proyects')}</a>
            </li>
            <li>
              <a href='#tecnologias' className={itemsList}>{t('header.links.tecnologies')}</a>
            </li>
          </ul>
        </nav>
      </header>

      <div>
        <Principal />
        <SobreMi />
        <Proyectos />
        <Tecnologias />
      </div>

      <div className={footer}>
        <hr />
        <Trans i18nKey='footer.developed'>
          Desarrollado por <span className={miName}>Ricky Beltrán</span>
        </Trans>

        <article className={containerI18n}>
          {
            Object.keys(lngs).map(lng => (
              <button
                key={lng}
                type='submit'
                onClick={() => i18n.changeLanguage(lng)}
                className={`${buttonI18n} ${i18n.resolvedLanguage === lng && languageSelected}`}
              >{lngs[lng].nativeName}
              </button>
            ))
          }
        </article>
      </div>
    </main>
  )
}
