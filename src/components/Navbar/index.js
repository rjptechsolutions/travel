import React, { useState, useEffect } from "react"

import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
  Nav,
  NavIcon,
  NavLogo,
  NavbarContainer,
  MobMenuIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements"
export default function Navbar() {
  const [click, setClick] = useState(true)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              Traveller
            </NavLogo>
            <MobMenuIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobMenuIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/destinations">Destinations</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/showcase">Clicks</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact">Contact</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}
