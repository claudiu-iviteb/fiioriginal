/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'

import Layout from '../components/Layout'

const initialErrors = {
  nameError: '',
  emailError: '',
  messageError: '',
}

interface Errors {
  nameError?: string
  emailError?: string
  messageError?: string
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [response, setResponse] = useState('')
  const [errorState, setErrorState] = useState(initialErrors)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
    setErrorState(initialErrors)
  }

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const errors: Errors = {}

    if (formState.name.trim().length < 3) {
      errors.nameError = 'Serios? Asta e numele tau?'
    }

    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if (!emailRegex.test(formState.email)) {
      errors.emailError = 'Pe bune? Introdu o adresa valida...'
    }

    if (formState.message.trim().length < 10) {
      errors.messageError = 'Mesajul trebuie sa contina minim 10 caractere'
    }

    if (!Object.keys(errors).length) {
      setResponse('sending')

      fetch('https://us-central1-contact-form-65563.cloudfunctions.net/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })
        .then((res) => {
          if (res.ok) setResponse('success')
        })
        .catch((err) => {
          setResponse('error')
          console.error(err)
        })
    } else {
      setErrorState({ ...errorState, ...errors })
    }
  }

  const pageBody = response === 'success'
    ? (
      <div className="success-message response">
        Mesajul a fost trimis. Vei primi raspuns in cel mai scurt timp posibil.
      </div>
    ) : response === 'error'
      ? (
        <div className="error-message response">
          Din pacate intampinam o problema tehnica. Te rog sa revii.
        </div>
      ) : response === 'sending'
        ? (
          <div className="sending response">
            Sending...
          </div>
        )
        : (
          <div className="form-container">
            <form className="contact-form" onSubmit={submitHandler}>
              <label htmlFor="name">
                Numele tau:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formState.name}
                onChange={handleChange}
                className={errorState.nameError && 'error'}
              />

              <span className="error-message">{errorState.nameError}</span>
              <label htmlFor="email">
                Adresa de email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                className={errorState.emailError && 'error'}
              />

              <span className="error-message">{errorState.emailError}</span>
              <label htmlFor="message">
                Mesaj:
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formState.message}
                onChange={handleChange}
                className={errorState.messageError && 'error'}
              />

              <span className="error-message">{errorState.messageError}</span>
              <button type="submit">Trimite mesajul</button>
            </form>
          </div>
        )

  return (
    <Layout title="Contact" description="Ai ceva de transmis? Aici e locul">
      <div className="page-content">
        <h1>Contact</h1>
        {pageBody}
      </div>
    </Layout>
  )
}
