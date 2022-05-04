import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Main from '../layouts/Main';

import data from '../data/contact';

// Validates the first half of an email address.
const validateText = (text) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = [
  'hi',
  'hello',
  'hola',
  'you-can-email-me-at-literally-anything! Really',
  'well, not anything. But most things',
  'like-this',
  'or-this',
  'but not this :(  ',
  'you.can.also.email.me.with.specific.topics.like',
  'just-saying-hi',
  'please-work-for-us',
  'help',
  'admin',
  'or-I-really-like-your-website',
  'I\'ll-stop-distracting-you-now',
  'thanks',
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const Contact = () => {
  return (
    <Main>
      <Helmet title="Contact" />
      <article className="post" id="contact">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScQMkYEfn-NkwQOE5jRCcucbLboWCYujK1lNRx0M9UqY5BqQg/viewform?embedded=true"
                width="640" height="840" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
        </iframe>
        <ul className="icons">
          {data.map((s) => (
            <li key={s.label}>
              <a href={s.link}>
                <FontAwesomeIcon icon={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </article>
    </Main>
  );
};

export default Contact;
