'use client';

import { useState } from 'react';

const WEBHOOK_URL = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL;

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    if (!WEBHOOK_URL) {
      setStatus('error');
      setErrorMsg("Le webhook n'est pas configure. Ecrivez-nous a michel@fox-berens.com.");
      return;
    }
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'fox-berens.com/contact', submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg("Envoi impossible. Reessayez ou ecrivez a michel@fox-berens.com.");
    }
  }

  const disabled = status === 'sending';

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-muted mb-2">Nom complet</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            disabled={disabled}
            className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-sm text-light placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors disabled:opacity-60"
            placeholder="Jean Dupont"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-muted mb-2">Email professionnel</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            disabled={disabled}
            className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-sm text-light placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors disabled:opacity-60"
            placeholder="jean@entreprise.ch"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm text-muted mb-2">Entreprise</label>
        <input
          id="company"
          type="text"
          name="company"
          disabled={disabled}
          className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-sm text-light placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors disabled:opacity-60"
          placeholder="Nom de votre entreprise"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-muted mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          disabled={disabled}
          className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-sm text-light placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none disabled:opacity-60"
          placeholder="Décrivez en quelques lignes votre workflow ou contrainte compliance..."
        />
      </div>
      <button
        type="submit"
        disabled={disabled}
        className="w-full bg-accent text-dark font-semibold px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-colors text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>

      {status === 'success' && (
        <p role="status" className="text-sm text-accent text-center">
          Message bien recu. Reponse sous 24h ouvrees.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="text-sm text-red-400 text-center">{errorMsg}</p>
      )}
      {status !== 'success' && status !== 'error' && (
        <p className="text-xs text-muted/60 text-center">
          Reponse sous 24 heures ouvrees. Vos donnees ne sont jamais partagees.
        </p>
      )}
    </form>
  );
}
