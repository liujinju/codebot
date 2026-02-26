export default function ContactPage() {
  return (
    <section className="page-shell auth-shell">
      <article className="auth-card" data-reveal>
        <p className="eyebrow">Contact</p>
        <h1>联系我们</h1>
        <p>留下需求信息，我们会安排产品顾问与技术同学跟进。</p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="公司名称" />
          <input type="text" placeholder="联系人" />
          <input type="email" placeholder="联系邮箱" />
          <textarea rows="4" placeholder="请描述你的业务场景与需求" />
          <button type="submit" className="solid-btn lg">
            提交信息
          </button>
        </form>
      </article>
    </section>
  );
}
