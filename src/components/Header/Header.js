import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Router>
    <Container>
      <Div1>
        <Link to="/">
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <DiCssdeck size="3rem" /> <span>Portfolio</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link to="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link to="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link to="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons to="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons to="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons to="https://google.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </Router>
);

export default Header;
