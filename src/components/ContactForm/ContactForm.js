import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import {FormWrapper, Form, Label, Input, Textarea, SubmitButton} from './ContactForm.styles'

function ContactForm() {
  const [state, handleSubmit] = useForm("mbjvyedk");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          name="email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows="4"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <SubmitButton type="submit" disabled={state.submitting}>
          Submit
        </SubmitButton>
      </Form>
    </FormWrapper>
  );
}

export default ContactForm;