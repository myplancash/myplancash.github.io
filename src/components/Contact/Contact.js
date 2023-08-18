import React from 'react';
import { Section, Heading, ContactInfo } from './Contact.styles'; // Import your styled-components styles

const Contact = () => {
  return (
    <Section id="contact">
      <Heading>Contact</Heading>
      <ContactInfo>
        You can reach out to me at <a href="mailto:sergio.smiling@gmail.com">sergio.smiling@gmail.com</a>.
      </ContactInfo>
    </Section>
  );
}

export default Contact;
