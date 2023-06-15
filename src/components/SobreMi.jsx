import { titleSection } from '../../App.css'
import { section, miDescripcion } from './SobreMi.css'

export const SobreMi = () => {
  return (
    <section id='sobreMi' className={section}>
      <h2 className={titleSection}>Sobre Mi</h2>

      <p className={miDescripcion}>Soy un desarrollador web autodidacta que le regocija crear software, los retos y aprender, mi enfoque principal es el frontend pero también tengo conocimientos de backend</p>
    </section>
  )
}
