import { Link } from 'react-router-dom';

export default function AuthPage({ mode }) {
  const isLogin = mode === 'login';

  return (
    <section className="page-shell auth-shell">
      <article className="auth-card" data-reveal>
        <p className="eyebrow">Account</p>
        <h1>{isLogin ? '登录' : '注册'}</h1>
        <p>{isLogin ? '登录后访问开发者资源与平台控制台。' : '创建账号以下载 SDK 和加入开发者社区。'}</p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          {!isLogin ? <input type="text" placeholder="姓名" autoComplete="name" /> : null}
          <input type="email" placeholder="邮箱" autoComplete="email" />
          <input type="password" placeholder="密码" autoComplete={isLogin ? 'current-password' : 'new-password'} />
          <button type="submit" className="solid-btn lg">
            {isLogin ? '登录' : '创建账号'}
          </button>
        </form>

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
