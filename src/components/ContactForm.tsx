'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, AlertCircle } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry / Job Opportunity',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'Project Inquiry / Job Opportunity',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit form.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error occurred. Please use direct mailto link below.');
    }
  };

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject
  )}&body=${encodeURIComponent(`Hi Fibin,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;

  return (
    <div className="navy-panel p-4 sm:p-6 border border-[var(--border-ink)] shadow-xs">
      <div className="flex items-center justify-between mb-4 border-b border-[var(--border-ink)] pb-2 font-mono-spec">
        <span className="font-bold text-xs text-[var(--accent-orange)]">
          [CONTRACTOR INQUIRY TRANSMISSION]
        </span>
        <span className="text-[10px] text-[var(--text-muted)]">FORM SPEC DWG-06</span>
      </div>

      {status === 'success' ? (
        <div className="p-6 border-2 border-[var(--accent-orange)] bg-[var(--badge-bg)] text-center space-y-3 font-mono-spec">
          <CheckCircle2 className="w-10 h-10 text-[var(--accent-orange)] mx-auto" />
          <h4 className="font-heading font-bold text-lg text-[var(--text-ink)]">
            INQUIRY TRANSMITTED SUCCESSFULLY!
          </h4>
          <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto">
            Your message has been logged in Fibin&apos;s project queue. Expect a response within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="px-4 py-2 border border-[var(--accent-orange)] text-[var(--accent-orange)] font-bold text-xs hover:bg-[var(--accent-orange)] hover:text-white transition-colors"
          >
            SEND ANOTHER SPECIFICATION
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 font-mono-spec text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase mb-1.5 text-[var(--text-secondary)]">
                SENDER NAME <span className="text-[var(--accent-orange)]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Architect Sarah Jenkins"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2.5 border border-[var(--border-ink)] bg-[var(--bg-paper)] text-[var(--text-ink)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-orange)] focus:ring-1 focus:ring-[var(--accent-orange)] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase mb-1.5 text-[var(--text-secondary)]">
                EMAIL ADDRESS <span className="text-[var(--accent-orange)]">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="sarah@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2.5 border border-[var(--border-ink)] bg-[var(--bg-paper)] text-[var(--text-ink)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-orange)] focus:ring-1 focus:ring-[var(--accent-orange)] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase mb-1.5 text-[var(--text-secondary)]">
              SPECIFICATION SUBJECT
            </label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full p-2.5 border border-[var(--border-ink)] bg-[var(--bg-paper)] text-[var(--text-ink)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-orange)] focus:ring-1 focus:ring-[var(--accent-orange)] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase mb-1.5 text-[var(--text-secondary)]">
              PROJECT BRIEF / MESSAGE DETAILS <span className="text-[var(--accent-orange)]">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Outline project requirements, timeline, or position details..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-2.5 border border-[var(--border-ink)] bg-[var(--bg-paper)] text-[var(--text-ink)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-orange)] focus:ring-1 focus:ring-[var(--accent-orange)] focus:outline-none resize-none transition-colors"
            />
          </div>

          {status === 'error' && (
            <div className="p-3 border border-[var(--accent-orange)] bg-[var(--badge-bg)] text-[var(--accent-orange)] flex items-center space-x-2 text-xs font-bold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-6 py-3 bg-[var(--accent-orange)] text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-xs hover:bg-[var(--accent-orange-hover)] transition-all disabled:opacity-50 focus:ring-2 focus:ring-[var(--accent-orange)]"
            >
              {status === 'submitting' ? (
                <span>TRANSMITTING...</span>
              ) : (
                <>
                  <span>TRANSMIT SPECIFICATION</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <a
              href={mailtoUrl}
              className="px-4 py-3 border border-[var(--border-ink)] bg-[var(--bg-paper)] text-[var(--text-ink)] font-bold text-xs uppercase tracking-wider flex items-center space-x-2 hover:border-[var(--accent-orange)] hover:text-[var(--accent-orange)] transition-colors"
            >
              <Mail className="w-4 h-4 text-[var(--accent-orange)]" />
              <span>DIRECT MAILTO FALLBACK</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
};
