import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import githubIcon from '../../assets/github.svg'
import telegram from '../../assets/telegram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://vinayaksingh.in" className="logo">
        <span>Jo'raqulov  Nurmurod</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          <span>❤️</span>
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://github.com/Nurmurod23/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://t.me/Nurmurod1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a>
      </div>
    </Container>
  )
}
