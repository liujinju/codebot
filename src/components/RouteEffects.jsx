import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { localize } from '../data/siteData';
import { useLocale } from '../contexts/LocaleContext';

const DEFAULT_META = {
  title: { zh: 'Embodied Intelligence Platform', en: 'Embodied Intelligence Platform' },
  description: {
    zh: '面向企业客户、开发者与消费者的具身智能平台。',
    en: 'An embodied intelligence platform for enterprises, developers, and consumers.',
  },
  image: 'https://s.xiaopeng.com/xp-fe/mainsite/2025/aiRobot/pc/p2-1.jpg',
};

const ROUTE_META = {
  '/': {
    title: { zh: 'Embodied Intelligence Platform', en: 'Embodied Intelligence Platform' },
    description: {
      zh: '企业级具身智能产品与开发者生态，覆盖产品、方案与支持体系。',
      en: 'Enterprise-grade embodied intelligence products and developer ecosystem across products, solutions, and support.',
    },
  },
  '/products': {
    title: { zh: '产品矩阵', en: 'Product Portfolio' },
    description: {
      zh: '查看 EI 平台的核心产品组件，包括本体、控制、对话与运动能力。',
      en: 'Explore EI core product components including embodiment, control, dialogue, and locomotion.',
    },
  },
  '/solutions': {
    title: { zh: '行业解决方案', en: 'Industry Solutions' },
    description: {
      zh: '按制造、物流、商业服务与教育等场景查看具身智能解决方案。',
      en: 'Explore embodied intelligence solutions for manufacturing, logistics, retail service, and education.',
    },
  },
  '/developers': {
    title: { zh: '开发者生态', en: 'Developer Ecosystem' },
    description: {
      zh: '获取 SDK、API 文档和 Sim2Real 开发工具链。',
      en: 'Get SDK access, API docs, and Sim2Real toolchains.',
    },
  },
  '/cases': {
    title: { zh: '客户案例', en: 'Customer Cases' },
    description: {
      zh: '通过真实案例了解具身智能平台的落地效果和业务价值。',
      en: 'Discover practical results and business value through real customer cases.',
    },
  },
  '/support': {
    title: { zh: '支持与资源', en: 'Support & Resources' },
    description: {
      zh: '快速访问开发文档、FAQ 与开发者论坛。',
      en: 'Quick access to docs, FAQ, and developer forum.',
    },
  },
  '/about': {
    title: { zh: '关于我们', en: 'About Us' },
    description: {
      zh: '了解 EI 平台的使命、能力边界与发展里程碑。',
      en: 'Learn about EI mission, capability boundaries, and milestones.',
    },
  },
  '/auth/login': {
    title: { zh: '登录', en: 'Login' },
    description: {
      zh: '登录账号以访问开发者资源和平台控制台。',
      en: 'Log in to access developer resources and platform console.',
    },
  },
  '/auth/register': {
    title: { zh: '注册', en: 'Sign Up' },
    description: {
      zh: '创建账号，下载 SDK 并加入开发者社区。',
      en: 'Create an account to download SDK and join developer community.',
    },
  },
  '/privacy': {
    title: { zh: '隐私政策', en: 'Privacy Policy' },
    description: {
      zh: '查看平台的数据收集、处理与隐私保护规则。',
      en: 'Review data collection, processing, and privacy protection policies.',
    },
  },
  '/terms': {
    title: { zh: '服务条款', en: 'Terms of Service' },
    description: {
      zh: '查看平台服务条款、许可范围与使用规范。',
      en: 'Review terms of service, license scope, and usage policies.',
    },
  },
  '/social': {
    title: { zh: '社交媒体', en: 'Social Media' },
    description: {
      zh: '关注平台的最新技术发布与社区活动。',
      en: 'Follow the latest technical updates and community events.',
    },
  },
  '/contact': {
    title: { zh: '联系我们', en: 'Contact Us' },
    description: {
      zh: '提交业务需求，获取产品顾问与技术支持。',
      en: 'Submit business requirements and get product and technical support.',
    },
  },
};

const SOLUTION_META = {
  manufacturing: {
    title: { zh: '智能制造解决方案', en: 'Smart Manufacturing Solution' },
    description: {
      zh: '面向制造场景提供柔性装配、巡检和物料搬运能力。',
      en: 'Provides flexible assembly, inspection, and material handling capabilities for manufacturing scenarios.',
    },
  },
  logistics: {
    title: { zh: '智慧物流解决方案', en: 'Intelligent Logistics Solution' },
    description: {
      zh: '面向仓储与配送场景提供多机器人协同调度能力。',
      en: 'Provides collaborative multi-robot scheduling for warehousing and delivery scenarios.',
    },
  },
  'retail-service': {
    title: { zh: '商业服务解决方案', en: 'Retail Service Solution' },
    description: {
      zh: '面向商业服务场景提供导览、接待和互动运营能力。',
      en: 'Provides guiding, reception, and interactive operation capabilities for retail service scenarios.',
    },
  },
  'home-education': {
    title: { zh: '家庭与教育解决方案', en: 'Home & Education Solution' },
    description: {
      zh: '面向家庭与教育场景提供陪伴、学习和编程实践能力。',
      en: 'Provides companionship, learning, and coding practice capabilities for home and education scenarios.',
    },
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
  const { locale } = useLocale();

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
    const pageTitle = `${localize(meta.title, locale)} | EI•OS`;
    const description = localize(meta.description, locale);

    document.title = pageTitle;
    applyMeta('meta[name="description"]', description);
    applyMeta('meta[property="og:title"]', pageTitle);
    applyMeta('meta[property="og:description"]', description);
    applyMeta('meta[property="og:image"]', meta.image || DEFAULT_META.image);
  }, [location.pathname, locale]);

  return null;
}
