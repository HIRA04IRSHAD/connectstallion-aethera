import { useState, type FormEvent } from 'react';

/*
 * Form submissions
 * Paste a form endpoint here (for example from formspree.io) to receive
 * enquiries and job applications by email. While it is empty the forms run
 * in demo mode: they show the thank-you message but nothing is sent.
 */
export const FORM_ENDPOINT = '';

type Status = { kind: 'idle' | 'sending' | 'success' | 'error'; message: string };

export function useFormSubmit(successMessage: string) {
  const [status, setStatus] = useState<Status>({ kind: 'idle', message: '' });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus({ kind: 'sending', message: '' });
    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        console.warn('Stallion Connect: FORM_ENDPOINT is empty, so this form ran in demo mode and nothing was sent.');
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      form.reset();
      setStatus({ kind: 'success', message: successMessage });
    } catch {
      setStatus({ kind: 'error', message: 'Sorry, something went wrong. Please call or email us instead.' });
    }
  };

  return { status, onSubmit, sending: status.kind === 'sending' };
}
