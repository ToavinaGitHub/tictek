// Contact page only: hydrates the server-rendered form so it can validate and send.
import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import ContactForm from '../contact/ContactForm';

const root = document.getElementById('contact-form');

if (root) {
  hydrateRoot(
    root,
    <StrictMode>
      <ContactForm lang={root.dataset.lang} />
    </StrictMode>,
  );
}
