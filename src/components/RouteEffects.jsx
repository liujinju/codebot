import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_META = {
  title: 'Embodied Intelligence Platform',
  description: '面向企业客户、开发者与消费者的具身智能平台。',
  image: 'https://s.xiaopeng.com/xp-fe/mainsite/2025/aiRobot/pc/p2-1.jpg',
};

const ROUTE_META = {
  '/': {
    title: 'Embodied Intelligence Platform',
    description: '企业级具身智能产品与开发者生态，覆盖产品、方案与支持体系。',
  },
  '/products': {
    title: '产品矩阵',
    description: '查看 EI 平台的核心产品组件，包括本体、控制、对话与运动能力。',
  },
  '/solutions': {
    title: '行业解决方案',
    description: '按制造、物流、商业服务与教育等场景查看具身智能解决方案。',
  },
  '/developers': {
    title: '开发者生态',
    description: '获取 SDK、API 文档和 Sim2Real 开发工具链。',
  },
  '/cases': {
    title: '客户案例',
    description: '通过真实案例了解具身智能平台的落地效果和业务价值。',
  },
  '/support': {
    title: '支持与资源',
    description: '快速访问开发文档、FAQ、论坛与状态公告。',
  },
  '/about': {
    title: '关于我们',
    description: '了解 EI 平台的使命、能力边界与发展里程碑。',
  },
  '/auth/login': {
    title: '登录',
    description: '登录账号以访问开发者资源和平台控制台。',
  },
  '/auth/register': {
    title: '注册',
    description: '创建账号，下载 SDK 并加入开发者社区。',
  },
  '/privacy': {
    title: '隐私政策',
    description: '查看平台的数据收集、处理与隐私保护规则。',
  },
  '/terms': {
    title: '服务条款',
    description: '查看平台服务条款、许可范围与使用规范。',
  },
  '/social': {
    title: '社交媒体',
    description: '关注平台的最新技术发布与社区活动。',
  },
  '/contact': {
    title: '联系我们',
    description: '提交业务需求，获取产品顾问与技术支持。',
  },
};

const SOLUTION_META = {
  manufacturing: {
    title: '智能制造解决方案',
    description: '面向制造场景提供柔性装配、巡检和物料搬运能力。',
  },
  logistics: {
    title: '智慧物流解决方案',
    description: '面向仓储与配送场景提供多机器人协同调度能力。',
  },
  'retail-service': {
    title: '商业服务解决方案',
    description: '面向商业服务场景提供导览、接待和互动运营能力。',
  },
  'home-education': {
    title: '家庭与教育解决方案',
    description: '面向家庭与教育场景提供陪伴、学习和编程实践能力。',
  },
};

function applyMeta(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute('content', value);
  }
}

function resolveMeta(pathname) {
  if (pathname.startsWith('/solutions/')) {
    const slug = pathname.split('/')[2];
    return {
      ...DEFAULT_META,
      ...ROUTE_META['/solutions'],
      ...(SOLUTION_META[slug] || {}),
    };
  }

  return {
    ...DEFAULT_META,
    ...(ROUTE_META[pathname] || {}),
  };
}

export default function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const meta = resolveMeta(location.pathname);
    const pageTitle = `${meta.title} | EI•OS`;

    document.title = pageTitle;
    applyMeta('meta[name="description"]', meta.description);
    applyMeta('meta[property="og:title"]', pageTitle);
    applyMeta('meta[property="og:description"]', meta.description);
    applyMeta('meta[property="og:image"]', meta.image || DEFAULT_META.image);
  }, [location.pathname]);

  return null;
}
