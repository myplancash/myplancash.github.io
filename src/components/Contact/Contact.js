import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Section, Heading, ContactInfo, SocialIcons, IconLink} from './Contact.styles'; // Import your styled-components styles
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
  return (
    <Section id="contact">
      <Heading>Contact</Heading>
      <ContactForm />  
      <ContactInfo>
        You can reach out to me at <a href="mailto:sergio.smiling@gmail.com">sergio.smiling@gmail.com</a>.
      </ContactInfo>
      <SocialIcons>
        <IconLink href="https://www.linkedin.com/in/sergioestebantorres/">
          <FontAwesomeIcon icon={faLinkedin} />
        </IconLink>
        <IconLink href="https://github.com/myplancash">
          <FontAwesomeIcon icon={faGithub} />
        </IconLink>
      </SocialIcons>
    </Section>
  );
}

export default Contact;
