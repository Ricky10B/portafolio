import { Linkedin, Github, FileText } from 'lucide-react'
import {
  icon,
  itemCV,
  itemGithub,
  itemLinkedin,
  listIcons,
  paragraphPrincipalContent,
  principalContent,
  textOfButton,
  titlePrincipalContent,
  containerImageCodigo,
  imageCodigo
} from './Principal.css'

export const Principal = () => {
  return (
    <section className={principalContent} id='principal'>
      <div>
        <div>
          <h1 className={titlePrincipalContent}>Hola, soy Ricky Beltrán</h1>
          <p className={paragraphPrincipalContent}>Desarrollador web</p>
        </div>

        <ul className={listIcons}>
          <li className={itemCV}>
            <a
              href='/assets/CV RICKY BELTRAN.pdf'
              target='_blank'
              rel='noreferrer noopener'
              className={icon}
            >
              <FileText /><span>Descargar CV</span>
            </a>
          </li>
          <li className={itemGithub}>
            <a
              href='https://github.com/Ricky10B'
              target='_blank'
              rel='noreferrer noopener'
              className={icon}
            >
              <Github /><span className={textOfButton}>Github</span>
            </a>
          </li>
          <li className={itemLinkedin}>
            <a
              href='https://co.linkedin.com/in/ricky-beltran-92663a173'
              target='_blank'
              rel='noreferrer noopener'
              className={icon}
            >
              <Linkedin /><span className={textOfButton}>Linkedin</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={containerImageCodigo}>
        <picture>
          <img className={imageCodigo} src='/assets/imagen-codigo.webp' />
        </picture>
      </div>

    </section>
  )
}
