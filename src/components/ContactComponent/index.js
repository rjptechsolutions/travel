import { ContactContainer, TestText, Heading } from "./ContactElements"
import React from "react"
import { FaEnvelope, FaPhone, FaPhoneAlt } from "react-icons/fa"

const ContactComponent = () => (
  <ContactContainer>
    <Heading>Contact</Heading>
    <TestText>
      15, Rohaan Star, Million Road, Near Capital City Hall, New York, USA
      421201
    </TestText>
    <TestText>
      <FaEnvelope /> rohaantraveller@gmail.com
    </TestText>
    <TestText>
      <FaPhoneAlt />
      (+91) 9 9 9 9 9 9 9 9 9
    </TestText>
  </ContactContainer>
)

export default ContactComponent
