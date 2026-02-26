// Media assets are sourced from: https://www.xiaopeng.com/airobot.html
export const media = {
  heroVideo: 'https://s.xiaopeng.com/xp-fe/mainsite/2025/aiRobot/video/p1.mp4',
  heroPoster: 'https://s.xiaopeng.com/xp-fe/mainsite/2025/aiRobot/pc/p2-1.jpg',
  factoryVideo: 'https://s.xiaopeng.com/xp-fe/mainsite/2025/aiRobot/video/p3.mp4',
  product1: 'https://s.xiaopeng.com/xp-fe/mainsite/2025/aiRobot/pc/p2-1.jpg',
  product2: 'https://s.xiaopeng.com/xp-fe/mainsite/2025/aiRobot/pc/p2-2.jpg',
  product3: 'https://s.xiaopeng.com/xp-fe/mainsite/2025/aiRobot/pc/p2-3.jpg',
  product4: 'https://s.xiaopeng.com/xp-fe/mainsite/2025/aiRobot/pc/p2-4.jpg',
  appQr: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/common/app-code.jpg',
  appPhone: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/components/app-download/phone-g7.png',
};

export const DEFAULT_LOCALE = 'zh';

export function localize(value, locale = DEFAULT_LOCALE) {
  if (value && typeof value === 'object' && !Array.isArray(value) && 'zh' in value && 'en' in value) {
    return value[locale] || value.zh;
  }

  return value;
}

export const navItems = [
  { label: { zh: '产品', en: 'Products' }, to: '/products' },
  { label: { zh: '解决方案', en: 'Solutions' }, to: '/solutions' },
  { label: { zh: '开发者', en: 'Developers' }, to: '/developers' },
  { label: { zh: '案例', en: 'Cases' }, to: '/cases' },
  { label: { zh: '支持', en: 'Support' }, to: '/support' },
  { label: { zh: '关于我们', en: 'About' }, to: '/about' },
];

export const productSlides = [
  {
    title: { zh: 'EI-Humanoid Core', en: 'EI-Humanoid Core' },
    subtitle: {
      zh: '外观拟人 | 1:1 人体尺度结构',
      en: 'Humanoid Design | 1:1 Human-Scale Structure',
    },
    image: media.product1,
    specs: {
      zh: ['178cm 仿人比例', '高强度轻量化骨架', '双目 + 全景融合感知'],
      en: ['178cm human-like proportion', 'Lightweight high-strength skeleton', 'Binocular + panoramic fused perception'],
    },
  },
  {
    title: { zh: 'EI-Dexterous Hands', en: 'EI-Dexterous Hands' },
    subtitle: {
      zh: '双手拟人 | 精密力控执行',
      en: 'Humanoid Hands | Precision Force-Control Execution',
    },
    image: media.product2,
    specs: {
      zh: ['22 自由度灵巧手', '触觉反馈阵列', '工业级抓取鲁棒性'],
      en: ['22-DoF dexterous hands', 'Tactile feedback array', 'Industrial-grade grasping robustness'],
    },
  },
  {
    title: { zh: 'EI-Dialogue Engine', en: 'EI-Dialogue Engine' },
    subtitle: {
      zh: '对话拟人 | 连续多轮协作',
      en: 'Human-Like Dialogue | Continuous Multi-Turn Collaboration',
    },
    image: media.product3,
    specs: {
      zh: ['主动推理链路', '任务上下文记忆', '角色化语义交互'],
      en: ['Active reasoning chain', 'Task-context memory', 'Role-based semantic interaction'],
    },
  },
  {
    title: { zh: 'EI-Locomotion Stack', en: 'EI-Locomotion Stack' },
    subtitle: {
      zh: '行走拟人 | 自主平衡运动',
      en: 'Human-Like Locomotion | Autonomous Dynamic Balance',
    },
    image: media.product4,
    specs: {
      zh: ['全地形步态控制', '实时姿态补偿', '动态避障规划'],
      en: ['All-terrain gait control', 'Real-time posture compensation', 'Dynamic obstacle avoidance planning'],
    },
  },
];

export const capabilityCards = [
  {
    title: { zh: '多模态感知', en: 'Multimodal Perception' },
    desc: {
      zh: '视觉、触觉、语音、空间传感协同，构建可解释世界模型。',
      en: 'Vision, touch, voice, and spatial sensing collaborate to build an interpretable world model.',
    },
    tag: 'Perception',
  },
  {
    title: { zh: '运动与控制', en: 'Motion & Control' },
    desc: {
      zh: '结合模型预测控制与强化学习，实现毫米级动作稳定性。',
      en: 'Combines MPC and reinforcement learning for millimeter-level motion stability.',
    },
    tag: 'Control',
  },
  {
    title: { zh: '群体协作', en: 'Collaborative Intelligence' },
    desc: {
      zh: '机器人-机器人-人协同任务编排，支持复杂流程自动化。',
      en: 'Robot-robot-human orchestration supports automation for complex workflows.',
    },
    tag: 'Collaboration',
  },
  {
    title: { zh: '具身智能算法', en: 'Embodied AI Algorithms' },
    desc: {
      zh: '从仿真到真机迁移训练，持续迭代具身认知能力。',
      en: 'From simulation to real robots, transfer training continuously improves embodied cognition.',
    },
    tag: 'Embodied AI',
  },
];

export const solutions = [
  {
    slug: 'manufacturing',
    name: { zh: '智能制造', en: 'Smart Manufacturing' },
    detail: {
      zh: '柔性装配、质检巡检、物料搬运全流程智能化升级。',
      en: 'Flexible assembly, quality inspection, and material handling upgrades across full workflows.',
    },
  },
  {
    slug: 'logistics',
    name: { zh: '智慧物流', en: 'Intelligent Logistics' },
    detail: {
      zh: '仓储拣选、末端配送、异常处理场景的协同机器人集群。',
      en: 'Collaborative robot fleets for picking, last-mile delivery, and exception handling.',
    },
  },
  {
    slug: 'retail-service',
    name: { zh: '商业服务', en: 'Retail & Service' },
    detail: {
      zh: '展厅接待、导览讲解、零售辅助和沉浸式互动运营。',
      en: 'Showroom reception, guided explanation, retail assistance, and immersive interaction operations.',
    },
  },
  {
    slug: 'home-education',
    name: { zh: '家庭与教育', en: 'Home & Education' },
    detail: {
      zh: '家庭陪伴、学习辅导、儿童编程与 STEM 实践平台。',
      en: 'Companionship, tutoring, kids coding, and STEM practice platform for home and education.',
    },
  },
];

export const developerFeatures = [
  {
    title: { zh: 'EI-SDK', en: 'EI-SDK' },
    desc: {
      zh: '统一 API 接入感知、控制、对话和任务执行引擎。',
      en: 'Unified APIs for perception, control, dialogue, and task execution engines.',
    },
  },
  {
    title: { zh: 'Sim2Real Kit', en: 'Sim2Real Kit' },
    desc: {
      zh: '高保真仿真环境，支持策略训练与真机一键部署。',
      en: 'High-fidelity simulation for policy training and one-click real-robot deployment.',
    },
  },
  {
    title: { zh: 'Plugin Hub', en: 'Plugin Hub' },
    desc: {
      zh: '组件市场与插件生态，快速扩展行业功能模块。',
      en: 'A plugin ecosystem and marketplace to quickly extend domain capabilities.',
    },
  },
];

export const cases = [
  {
    title: { zh: '某新能源工厂装配线', en: 'New Energy Factory Assembly Line' },
    summary: {
      zh: '上线 8 周后，关键工位人机协作效率提升 37%。',
      en: 'After 8 weeks online, human-robot collaboration efficiency increased by 37% at key stations.',
    },
    image: media.product4,
  },
  {
    title: { zh: '大型连锁仓储中心', en: 'Large Chain Warehousing Center' },
    summary: {
      zh: '多机器人调度降低分拣差错率 52%，夜间吞吐提升 41%。',
      en: 'Multi-robot scheduling reduced sorting errors by 52% and increased night throughput by 41%.',
    },
    image: media.product2,
  },
  {
    title: { zh: '科技展厅互动运营', en: 'Tech Showroom Interactive Operations' },
    summary: {
      zh: '具身导览系统带来 3.1 倍访客停留时长与高频复访。',
      en: 'Embodied guidance system delivered 3.1x visitor dwell time and higher revisit frequency.',
    },
    image: media.product3,
  },
];

export const casesPage = [
  ...cases,
  {
    title: { zh: '康复机构智能辅助项目', en: 'Rehabilitation Assistance Program' },
    summary: {
      zh: '辅助训练流程自动化后，康复评估与训练协同效率提升 29%。',
      en: 'After automating assisted training workflows, evaluation-training collaboration efficiency improved by 29%.',
    },
    image: media.product1,
  },
];

export const supportLinks = [
  {
    tab: 'docs',
    title: { zh: '开发文档', en: 'Docs' },
    href: '/support?tab=docs',
    desc: {
      zh: 'API 参考、接入指南与最佳实践。',
      en: 'API reference, integration guides, and best practices.',
    },
  },
  {
    tab: 'faq',
    title: { zh: 'FAQ', en: 'FAQ' },
    href: '/support?tab=faq',
    desc: {
      zh: '常见部署、调试与许可证问题说明。',
      en: 'Answers for deployment, debugging, and license questions.',
    },
  },
  {
    tab: 'forum',
    title: { zh: '开发者论坛', en: 'Developer Forum' },
    href: '/support?tab=forum',
    desc: {
      zh: '问题讨论、示例共享、官方技术答疑。',
      en: 'Discussion, sample sharing, and official technical Q&A.',
    },
  },
];
