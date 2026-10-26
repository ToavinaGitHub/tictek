// Contact and careers pages only: hydrates the server-rendered form so it can
// validate and send. Each island is a <div data-form="…" data-lang="…">.
import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import ContactForm from '../forms/ContactForm';
import CareersForm from '../forms/CareersForm';

const FORMS = { contact: ContactForm, careers: CareersForm };

for (const root of document.querySelectorAll('[data-form]')) {
  const Form = FORMS[root.dataset.form];
  if (Form) {
    hydrateRoot(
      root,
      <StrictMode>
        <Form lang={root.dataset.lang} />
      </StrictMode>,
    );
  }
}
