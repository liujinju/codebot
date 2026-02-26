import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../contexts/LocaleContext';

export default function AuthPage({ mode }) {
  const isLogin = mode === 'login';
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
      isLogin
        ? isZh
          ? '登录请求已提交（演示环境）。'
          : 'Login request submitted (demo environment).'
        : isZh
          ? '注册请求已提交（演示环境）。'
          : 'Signup request submitted (demo environment).'
    );
    form.reset();
  };

  return (
    <section className="page-shell auth-shell">
      <article className="auth-card" data-reveal>
        <p className="eyebrow">Account</p>
        <h1>{isLogin ? (isZh ? '登录' : 'Login') : isZh ? '注册' : 'Sign Up'}</h1>
        <p>
          {isLogin
            ? isZh
              ? '登录后访问开发者资源与平台控制台。'
              : 'Log in to access developer resources and the platform console.'
            : isZh
              ? '创建账号以下载 SDK 和加入开发者社区。'
              : 'Create an account to download the SDK and join the developer community.'}
        </p>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          {!isLogin ? (
            <label className="form-field" htmlFor="auth-name">
              <span>{isZh ? '姓名' : 'Name'}</span>
              <input id="auth-name" name="name" type="text" autoComplete="name" required />
            </label>
          ) : null}

          <label className="form-field" htmlFor="auth-email">
            <span>{isZh ? '邮箱' : 'Email'}</span>
            <input id="auth-email" name="email" type="email" autoComplete="email" required />
          </label>

          <label className="form-field" htmlFor="auth-password">
            <span>{isZh ? '密码' : 'Password'}</span>
            <input
              id="auth-password"
              name="password"
              type="password"
              minLength={8}
              autoComplete={isLogin ? 'current-password' : 'new-password'}
              required
            />
          </label>

          <p className="form-hint">{isZh ? '密码至少 8 位。' : 'Password must be at least 8 characters.'}</p>

          <button type="submit" className="solid-btn lg">
            {isLogin ? (isZh ? '登录' : 'Login') : isZh ? '创建账号' : 'Create Account'}
          </button>
        </form>

        {message ? (
          <p className="form-message" role="status" aria-live="polite">
            {message}
          </p>
        ) : null}

        <p className="auth-switch">
          {isLogin ? (isZh ? '还没有账号？' : "Don't have an account?") : isZh ? '已经有账号？' : 'Already have an account?'}
          <Link to={isLogin ? '/auth/register' : '/auth/login'}>
            {isLogin ? (isZh ? '去注册' : 'Sign Up') : isZh ? '去登录' : 'Login'}
          </Link>
        </p>
      </article>
    </section>
  );
}
