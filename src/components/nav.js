// http://negomi.github.io/react-burger-menu/
import React from "react"

// Gatsby
import { Link } from "gatsby"

// Components
import { slide as Menu } from "react-burger-menu"

// Styles
import {
  StyledNav,
  StyledMobileNav,
  StyledFooterNav,
  StyledSocialNav,
} from "../styles/StyledNav"

export const Nav = ({ location }) => {
  return (
    <StyledNav>
      <Link to="/" id="home" className="menu-item" activeClassName="active">
        Home
      </Link>
      <Link
        to="#aboutSection"
        id="about"
        className="menu-item"
        activeClassName="active"
      >
        About
      </Link>
      <Link
        to="/how-it-works"
        id="how-it-works"
        className="menu-item"
        activeClassName="active"
      >
        How It Works
      </Link>
      <Link
        to="/our-team"
        id="team"
        className="menu-item"
        activeClassName="active"
      >
        Our Team
      </Link>
      <Link
        to="/give-help"
        id="give-help"
        className="menu-item buttonBlue"
        activeClassName="active"
      >
        Give Help
      </Link>
      <Link
        to="/get-help"
        id="get-help"
        className="menu-item buttonPurple"
        activeClassName="active"
      >
        Get Help
      </Link>
    </StyledNav>
  )
}

export const MobileNav = ({ location }) => {
  var styles = {
    bmMenuWrap: {
      transitionDuration: ".3s",
    },
  }

  return (
    <StyledMobileNav>
      <Menu
        styles={styles}
        width={"250px"}
        customBurgerIcon={<h4>Menu</h4>}
        right
        noOverlay
        disableAutoFocus
      >
        <Link to="/" id="home" className="menu-item" activeClassName="active">
          Home
        </Link>
        <Link
          to="#aboutSection"
          id="about"
          className="menu-item"
          activeClassName="active"
        >
          About
        </Link>
        <Link
          to="/how-it-works"
          id="how-it-works"
          className="menu-item"
          activeClassName="active"
        >
          How It Works
        </Link>
        <Link
          to="/our-team"
          id="team"
          className="menu-item"
          activeClassName="active"
        >
          Our Team
        </Link>
        <Link
          to="/give-help"
          id="give-help"
          className="menu-item buttonBlue"
          activeClassName="active"
        >
          Give Help
        </Link>
        <Link
          to="/get-help"
          id="get-help"
          className="menu-item buttonPurple"
          activeClassName="active"
        >
          Get Help
        </Link>
      </Menu>
    </StyledMobileNav>
  )
}

export const FooterNav = () => {
  return (
    <StyledFooterNav>
      <Link
        to="/terms-of-service"
        id="tos"
        className="menu-item"
        activeClassName="active"
      >
        Terms of Service
      </Link>
      <Link
        to="/privacy-policy"
        id="privacy-policy"
        className="menu-item"
        activeClassName="active"
      >
        Privacy Policy
      </Link>
      <Link
        to="/resources"
        id="resources"
        className="menu-item"
        activeClassName="active"
      >
        Resources
      </Link>
      <Link
        to="/give-help"
        id="give-help"
        className="menu-item"
        activeClassName="active"
      >
        Give Help
      </Link>
      <Link
        to="/get-help"
        id="get-help"
        className="menu-item"
        activeClassName="active"
      >
        Get Help
      </Link>
    </StyledFooterNav>
  )
}

export const SocialNav = () => {
  return (
    <StyledSocialNav>
      <a
        href="https://www.instagram.com/artistrescuetrust/"
        className="instagram"
      >
        <i class="fab fa-instagram-square"></i>
      </a>
      <a href="https://twitter.com/artist_rescue" className="twitter">
        <i class="fab fa-twitter-square"></i>
      </a>
      <a
        href="https://www.facebook.com/artistrescuetrust/"
        className="facebook"
      >
        <i class="fab fa-facebook-square"></i>
      </a>
      <a
        href="https://www.linkedin.com/company/artistrescuetrust/"
        className="linkedin"
      >
        <i class="fab fa-linkedin"></i>
      </a>
    </StyledSocialNav>
  )
}