import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import githubIcon from '../../assets/github.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
          <h1>Nurmurod Jo'raqulov</h1>
          <h3>Frontned Developer</h3>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
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
        </a></div>
      </div>
      <div className="hero-image">
          <img src={Illustration} alt="Ilustração" />
      </div>
    </Container>
  )
}