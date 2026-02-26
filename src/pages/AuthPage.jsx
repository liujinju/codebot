import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AuthPage({ mode }) {
  const isLogin = mode === 'login';
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setMessage(isLogin ? '登录请求已提交（演示环境）。' : '注册请求已提交（演示环境）。');
    form.reset();
  };

  return (
    <section className="page-shell auth-shell">
      <article className="auth-card" data-reveal>
        <p className="eyebrow">Account</p>
        <h1>{isLogin ? '登录' : '注册'}</h1>
        <p>{isLogin ? '登录后访问开发者资源与平台控制台。' : '创建账号以下载 SDK 和加入开发者社区。'}</p>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          {!isLogin ? (
            <label className="form-field" htmlFor="auth-name">
              <span>姓名</span>
              <input id="auth-name" name="name" type="text" autoComplete="name" required />
            </label>
          ) : null}

          <label className="form-field" htmlFor="auth-email">
            <span>邮箱</span>
            <input id="auth-email" name="email" type="email" autoComplete="email" required />
          </label>

          <label className="form-field" htmlFor="auth-password">
            <span>密码</span>
            <input
              id="auth-password"
              name="password"
              type="password"
              minLength={8}
              autoComplete={isLogin ? 'current-password' : 'new-password'}
              required
            />
          </label>

          <p className="form-hint">密码至少 8 位。</p>

          <button type="submit" className="solid-btn lg">
            {isLogin ? '登录' : '创建账号'}
          </button>
        </form>

        {message ? (
          <p className="form-message" role="status" aria-live="polite">
            {message}
          </p>
        ) : null}

        <p className="auth-switch">
          {isLogin ? '还没有账号？' : '已经有账号？'}
          <Link to={isLogin ? '/auth/register' : '/auth/login'}>
            {isLogin ? '去注册' : '去登录'}
          </Link>
        </p>
      </article>
    </section>
  );
}
