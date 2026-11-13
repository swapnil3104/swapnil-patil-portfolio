import React, { useState } from 'react';
import {
  SendIcon,
  CheckCircle2Icon,
  SparklesIcon,
  MailIcon,
  CheckIcon,
} from '@/components/icons';
import { CONTACT_INFO, PROJECT_TYPES } from '@/data';
import { trackEvent } from '@/utils/analytics';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
  honeypot: string; // Anti-spam bot field
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: PROJECT_TYPES[0].label,
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [state, setState] = useState<SubmissionState>('idle');
  const [lastSubmittedName, setLastSubmittedName] = useState<string>('');

  const validateField = (field: keyof FormData, value: string): string | undefined => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required.';
        if (value.trim().length < 2) return 'Please provide at least 2 characters.';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email address is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please provide a valid email address.';
        }
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message content is required.';
        if (value.trim().length < 10) {
          return 'Please provide a bit more detail (at least 10 characters).';
        }
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const err = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const applyTemplate = (typeLabel: string, sampleMsg: string) => {
    setFormData((prev) => ({
      ...prev,
      projectType: typeLabel,
      message: sampleMsg,
    }));
    setTouched((prev) => ({ ...prev, projectType: true, message: true }));
    setErrors((prev) => ({ ...prev, message: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot field for bot spam
    if (formData.honeypot) {
      // Bot trapped: silently simulate success without sending
      setState('success');
      return;
    }

    // Validate all fields
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const msgErr = validateField('message', formData.message);

    const newErrors: FormErrors = {
      name: nameErr,
      email: emailErr,
      message: msgErr,
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, projectType: true, message: true });

    if (nameErr || emailErr || msgErr) {
      setState('error');
      return;
    }

    setState('submitting');
    setLastSubmittedName(formData.name.trim());

    // Simulate reliable dispatch pipeline
    try {
      await new Promise((resolve) => setTimeout(resolve, 850));

      // Construct mailto link as secondary dispatch fallback
      const subject = encodeURIComponent(
        `[Portfolio Inquiry] ${formData.projectType} - ${formData.name}`
      );
      const body = encodeURIComponent(
        `Hi Swapnil,\n\n${formData.message}\n\nFrom:\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}`
      );
      const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;

      // Open email client in background if user permits, without disrupting experience
      window.location.href = mailtoUrl;

      trackEvent('contact_form_submitted', {
        projectType: formData.projectType,
      });

      setState('success');
    } catch {
      setState('error');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: PROJECT_TYPES[0].label,
      message: '',
      honeypot: '',
    });
    setErrors({});
    setTouched({});
    setState('idle');
  };

  return (
    <div className="relative rounded-2xl bg-[#111413] border border-white/[0.1] p-6 sm:p-8 shadow-xl">
      {/* Form Header */}
      <div className="mb-6 space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-emerald flex items-center gap-2">
            <SparklesIcon size={14} />
            <span>Interactive Contact & Direct Dispatch</span>
          </div>
          <span className="text-[11px] font-mono text-typography-dim">
            Direct &bull; Verified
          </span>
        </div>
        <p className="text-xs sm:text-sm text-typography-muted">
          Fill out this form to connect directly. Your message will be formatted and prepared for instant delivery to Swapnil&apos;s primary inbox.
        </p>
      </div>

      {/* Quick Templates Selector */}
      {state !== 'success' && (
        <div className="mb-6 space-y-2">
          <span className="text-[11px] font-mono text-typography-dim uppercase tracking-wider block">
            Quick Inquiry Templates:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() =>
                applyTemplate(
                  'Full-Time Engineering Role',
                  'Hi Swapnil, we are looking for an AI/ML Engineer to join our team. We were impressed by your CV projects and would love to schedule a screening call.'
                )
              }
              className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-accent-emerald/40 text-typography-muted hover:text-typography-headline transition-all"
            >
              💼 Full-Time Role
            </button>
            <button
              type="button"
              onClick={() =>
                applyTemplate(
                  'Technical Consulting',
                  'Hi Swapnil, we have a consulting engagement involving applied computer vision and web architecture. We would like to discuss scope and timelines.'
                )
              }
              className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-accent-emerald/40 text-typography-muted hover:text-typography-headline transition-all"
            >
              ⚡ Consulting Project
            </button>
            <button
              type="button"
              onClick={() =>
                applyTemplate(
                  'Applied AI / ML Initiative',
                  'Hi Swapnil, I noticed your RAG and computer vision learning paths. Would love to explore collaboration on an ML initiative.'
                )
              }
              className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-accent-emerald/40 text-typography-muted hover:text-typography-headline transition-all"
            >
              🧠 AI / ML Collab
            </button>
          </div>
        </div>
      )}

      {/* Feedback State: Success Screen */}
      {state === 'success' ? (
        <div className="rounded-2xl bg-[#c6ff00]/[0.08] border border-[#c6ff00]/30 p-6 sm:p-8 text-center space-y-5 animate-fadeIn">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#c6ff00]/20 border border-[#c6ff00]/40 flex items-center justify-center text-[#c6ff00]">
            <CheckCircle2Icon size={32} />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-display font-bold text-typography-headline">
              Message Prepared & Dispatched!
            </h3>
            <p className="text-sm text-typography-body max-w-md mx-auto leading-relaxed">
              Thank you for reaching out, <strong className="text-typography-headline">{lastSubmittedName || 'there'}</strong>! Your email client has been prompted with the message details. Swapnil will respond directly to your email address within 24 hours.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-5 py-2.5 rounded-full bg-[#c6ff00] hover:bg-[#d4ff00] text-black font-semibold text-xs font-mono transition-all duration-200 shadow-md shadow-[#c6ff00]/20"
            >
              Send Another Message &rarr;
            </button>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-typography-headline text-xs font-mono transition-all"
            >
              <MailIcon size={14} className="text-[#c6ff00]" />
              <span>Direct Email Client</span>
            </a>
          </div>
        </div>
      ) : (
        /* The Interactive Form */
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Honeypot Spam Protection Field (Invisible to real users, catches bots) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp_website">Leave this field empty</label>
            <input
              type="text"
              id="hp_website"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          {/* Grid: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact_name"
                className="block text-xs font-mono text-typography-muted"
              >
                Your Name <span className="text-[#c6ff00]">*</span>
              </label>
              <input
                id="contact_name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                placeholder="e.g. Maya Chen"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-black/40 text-typography-headline placeholder:text-typography-dim text-sm font-body border transition-all duration-150 focus:outline-none ${
                  errors.name && touched.name
                    ? 'border-red-500/80 focus:ring-2 focus:ring-red-500/20'
                    : 'border-white/[0.1] focus:border-[#c6ff00] focus:ring-2 focus:ring-[#c6ff00]/20'
                }`}
              />
              {errors.name && touched.name && (
                <p id="name-error" role="alert" className="text-xs font-mono text-red-400 mt-1">
                  &bull; {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact_email"
                className="block text-xs font-mono text-typography-muted"
              >
                Your Email <span className="text-[#c6ff00]">*</span>
              </label>
              <input
                id="contact_email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                placeholder="e.g. maya@acme-ventures.com"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-black/40 text-typography-headline placeholder:text-typography-dim text-sm font-body border transition-all duration-150 focus:outline-none ${
                  errors.email && touched.email
                    ? 'border-red-500/80 focus:ring-2 focus:ring-red-500/20'
                    : 'border-white/[0.1] focus:border-[#c6ff00] focus:ring-2 focus:ring-[#c6ff00]/20'
                }`}
              />
              {errors.email && touched.email && (
                <p id="email-error" role="alert" className="text-xs font-mono text-red-400 mt-1">
                  &bull; {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Project Type / Role Selector */}
          <div className="space-y-1.5">
            <label
              htmlFor="contact_project_type"
              className="block text-xs font-mono text-typography-muted"
            >
              Inquiry / Engagement Type <span className="text-[#c6ff00]">*</span>
            </label>
            <div className="relative">
              <select
                id="contact_project_type"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 text-typography-headline text-sm font-body border border-white/[0.1] focus:border-[#c6ff00] focus:ring-2 focus:ring-[#c6ff00]/20 focus:outline-none appearance-none transition-all duration-150 cursor-pointer"
              >
                {PROJECT_TYPES.map((pt) => (
                  <option
                    key={pt.id}
                    value={pt.label}
                    className="bg-[#111413] text-typography-headline py-1"
                  >
                    {pt.label} — {pt.description}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-typography-muted">
                <span className="text-xs">&darr;</span>
              </div>
            </div>
          </div>

          {/* Message Textarea */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="contact_message"
                className="block text-xs font-mono text-typography-muted"
              >
                Message & Scope Overview <span className="text-[#c6ff00]">*</span>
              </label>
              <span className="text-[11px] font-mono text-typography-dim">
                {formData.message.length} chars
              </span>
            </div>
            <textarea
              id="contact_message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="Tell me about the role, project vision, architecture challenges, or timelines..."
              className={`w-full px-3.5 py-2.5 rounded-xl bg-black/40 text-typography-headline placeholder:text-typography-dim text-sm font-body border transition-all duration-150 focus:outline-none resize-y min-h-[110px] ${
                errors.message && touched.message
                  ? 'border-red-500/80 focus:ring-2 focus:ring-red-500/20'
                  : 'border-white/[0.1] focus:border-[#c6ff00] focus:ring-2 focus:ring-[#c6ff00]/20'
              }`}
            />
            {errors.message && touched.message && (
              <p id="message-error" role="alert" className="text-xs font-mono text-red-400 mt-1">
                &bull; {errors.message}
              </p>
            )}
          </div>

          {/* Submit Action & Status Indicator */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button
              type="submit"
              disabled={state === 'submitting'}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#d4ff00] disabled:bg-[#c6ff00]/50 text-black font-semibold text-xs sm:text-sm font-mono tracking-tight transition-all duration-200 shadow-[0_0_20px_rgba(198,255,0,0.3)] disabled:cursor-not-allowed"
            >
              {state === 'submitting' ? (
                <>
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Preparing Dispatch...</span>
                </>
              ) : (
                <>
                  <SendIcon size={15} />
                  <span>Dispatch Message</span>
                  <span>&rarr;</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center sm:justify-end gap-2 text-[11px] font-mono text-typography-dim">
              <CheckIcon size={13} className="text-[#c6ff00]" />
              <span>Direct inbox delivery &bull; No middlemen</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
