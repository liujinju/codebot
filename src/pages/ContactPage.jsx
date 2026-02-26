import { useState } from 'react';

export default function ContactPage() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setMessage('你的需求已提交，我们会尽快联系你。');
    form.reset();
  };

  return (
    <section className="page-shell auth-shell">
      <article className="auth-card" data-reveal>
        <p className="eyebrow">Contact</p>
        <h1>联系我们</h1>
        <p>留下需求信息，我们会安排产品顾问与技术同学跟进。</p>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <label className="form-field" htmlFor="company-name">
            <span>公司名称</span>
            <input id="company-name" name="company" type="text" required />
          </label>

          <label className="form-field" htmlFor="contact-name">
            <span>联系人</span>
            <input id="contact-name" name="contact" type="text" required />
          </label>

          <label className="form-field" htmlFor="contact-email">
            <span>联系邮箱</span>
            <input id="contact-email" name="email" type="email" required />
          </label>

          <label className="form-field" htmlFor="contact-requirement">
            <span>业务需求</span>
            <textarea id="contact-requirement" name="requirement" rows="4" required />
          </label>

          <button type="submit" className="solid-btn lg">
            提交信息
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
