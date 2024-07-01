import { useEffect, useState } from 'react';

import classes from './contact-form.module.css';
import Notification from '../ui/notification';

const sendContactData = async (contactData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactData),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
};

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();
  const [inputError, setInputError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestError(null);
        setRequestStatus(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredMessage ||
      enteredName.trim() === '' ||
      !enteredMessage ||
      enteredMessage.trim() === ''
    ) {
      setInputError('Invalid values, please check your inputs.');
      return;
    }
    setRequestStatus('pending');

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus('success');
      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  };

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      title: 'Sending message...',
      message: 'Your message is on the way!',
      status: 'pending',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      title: 'Message sent!',
      message: 'Successfully sent your message.',
      status: 'success',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      title: 'Error!',
      message: requestError,
      status: 'error',
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label html="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label html="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label html="message">Your Message</label>
          <textarea
            id="message"
            required
            rows="5"
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>
        {inputError && <p>{inputError}</p>}
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </section>
  );
};
export default ContactForm;
