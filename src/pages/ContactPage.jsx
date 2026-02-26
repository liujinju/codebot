import { useState } from 'react';
import { useLocale } from '../contexts/LocaleContext';

export default function ContactPage() {
  const [message, setMessage] = useState('');
  const { isZh } = useLocale();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setMessage(
      isZh
        ? '你的需求已提交，我们会尽快联系你。'
        : 'Your request has been submitted. We will contact you shortly.'
    );
    form.reset();
  };

  return (
    <section className="page-shell auth-shell">
      <article className="auth-card" data-reveal>
        <p className="eyebrow">Contact</p>
        <h1>{isZh ? '联系我们' : 'Contact Us'}</h1>
        <p>
          {isZh
            ? '留下需求信息，我们会安排产品顾问与技术同学跟进。'
            : 'Leave your requirements and our product and technical team will follow up with you.'}
        </p>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <label className="form-field" htmlFor="company-name">
            <span>{isZh ? '公司名称' : 'Company Name'}</span>
            <input id="company-name" name="company" type="text" required />
          </label>

          <label className="form-field" htmlFor="contact-name">
            <span>{isZh ? '联系人' : 'Contact Person'}</span>
            <input id="contact-name" name="contact" type="text" required />
          </label>

          <label className="form-field" htmlFor="contact-email">
            <span>{isZh ? '联系邮箱' : 'Contact Email'}</span>
            <input id="contact-email" name="email" type="email" required />
          </label>

          <label className="form-field" htmlFor="contact-requirement">
            <span>{isZh ? '业务需求' : 'Business Requirement'}</span>
            <textarea id="contact-requirement" name="requirement" rows="4" required />
          </label>

          <button type="submit" className="solid-btn lg">
            {isZh ? '提交信息' : 'Submit'}
          </button>
        </form>

        {message ? (
          <p className="form-message" role="status" aria-live="polite">
            {message}
          </p>
        ) : null}
      </article>
    </section>
  );
}
