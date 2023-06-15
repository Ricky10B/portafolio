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
  titlePrincipalContent
} from './Principal.css'

export const Principal = () => {
  return (
    <section className={principalContent} id='principal'>
      <div>
        <h1 className={titlePrincipalContent}>Hola, soy Ricky Beltrán</h1>
        <p className={paragraphPrincipalContent}>Desarrollador web</p>
      </div>

      <ul className={listIcons}>
        <li className={itemCV}>
          <a
            href='https://github.com/Ricky10B'
            target='_blank'
            rel='noreferrer noopener'
            download
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
    </section>
  )
}
