import { Container } from "./styles";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
       
          <h2>About me</h2>
          <p>
          Hello me! My name is Nurmurod, I am a Frontend Developer. I currently know HTML, CSS, JAVASCRIPT, REACT, REDUX TOOLKIT, NEXT.JS AND TYPESCRIPT technologies and libraries. I speak English at an intermediate level. I have the ability to learn programming languages quickly.
          </p>
          <h3>Here are my main skills:</h3>
       
        <div className="hard-skills">
          <div className="hability">
              <img src={reactIcon} alt="React" />
          </div>
          <div className="hability">
              <img src={typescriptIcon} alt="Typescript" />
          </div>
          <div className="hability">
              <img src={htmlIcon} alt="Html" />
          </div>
          <div className="hability">
              <img src={cssIcon} alt="Css" />
          </div>
          <div className="hability">
              <img src={boostrapIcon} alt="bootstrap" />
          </div>
          <div className="hability">
              <img src={jsIcon} alt="JavaScript" />
          </div>
        </div>
      </div>
    </Container>
  )
}
