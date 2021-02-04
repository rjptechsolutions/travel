import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import {
  FooterContainer,
  SocialMedia,
  SocialMedaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElement"
export default function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMedaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            Traveller
          </SocialLogo>
          <WebsiteRights>
            Traveller &copy; {new Date().getFullYear()}
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twiter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedinIn />
            </SocialIconLink>
          </SocialIcons>
        </SocialMedaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}
