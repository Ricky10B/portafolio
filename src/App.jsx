import {
  header,
  nav,
  listHeader,
  itemsList,
  logoNombre,
  footer,
  miName
} from '../App.css'
import { Proyectos } from './components/Proyectos'
import { Principal } from './components/Principal'
import { SobreMi } from './components/SobreMi'
import { Tecnologias } from './components/Tecnologias'

export const App = () => {
  return (
    <main>
      <header className={header}>
        <nav className={nav}>
          <a className={logoNombre}>
            Ricky
          </a>
          <ul className={listHeader}>
            <li>
              <a href='#principal' className={itemsList}>Inicio</a>
            </li>
            <li>
              <a href='#sobreMi' className={itemsList}>Sobre Mi</a>
            </li>
            <li>
              <a href='#proyectos' className={itemsList}>Proyectos</a>
            </li>
            <li>
              <a href='#tecnologias' className={itemsList}>Tecnologías</a>
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
        <p>Desarrollado por <span className={miName}>Ricky Beltrán</span></p>
      </div>
    </main>
  )
}
