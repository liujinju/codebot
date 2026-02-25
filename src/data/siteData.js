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

export const navItems = [
  { label: '产品', href: '#products' },
  { label: '解决方案', href: '#solutions' },
  { label: '开发者', href: '#developers' },
  { label: '案例', href: '#cases' },
  { label: '支持', href: '#support' },
  { label: '关于我们', href: '#about' },
];

export const productSlides = [
  {
    title: 'EI-Humanoid Core',
    subtitle: '外观拟人 | 1:1 人体尺度结构',
    image: media.product1,
    specs: ['178cm 仿人比例', '高强度轻量化骨架', '双目 + 全景融合感知'],
  },
  {
    title: 'EI-Dexterous Hands',
    subtitle: '双手拟人 | 精密力控执行',
    image: media.product2,
    specs: ['22 自由度灵巧手', '触觉反馈阵列', '工业级抓取鲁棒性'],
  },
  {
    title: 'EI-Dialogue Engine',
    subtitle: '对话拟人 | 连续多轮协作',
    image: media.product3,
    specs: ['主动推理链路', '任务上下文记忆', '角色化语义交互'],
  },
  {
    title: 'EI-Locomotion Stack',
    subtitle: '行走拟人 | 自主平衡运动',
    image: media.product4,
    specs: ['全地形步态控制', '实时姿态补偿', '动态避障规划'],
  },
];

export const capabilityCards = [
  {
    title: '多模态感知',
    desc: '视觉、触觉、语音、空间传感协同，构建可解释世界模型。',
    tag: 'Perception',
  },
  {
    title: '运动与控制',
    desc: '结合模型预测控制与强化学习，实现毫米级动作稳定性。',
    tag: 'Control',
  },
  {
    title: '群体协作',
    desc: '机器人-机器人-人协同任务编排，支持复杂流程自动化。',
    tag: 'Collaboration',
  },
  {
    title: '具身智能算法',
    desc: '从仿真到真机迁移训练，持续迭代具身认知能力。',
    tag: 'Embodied AI',
  },
];

export const solutions = [
  {
    name: '智能制造',
    detail: '柔性装配、质检巡检、物料搬运全流程智能化升级。',
  },
  {
    name: '智慧物流',
    detail: '仓储拣选、末端配送、异常处理场景的协同机器人集群。',
  },
  {
    name: '商业服务',
    detail: '展厅接待、导览讲解、零售辅助和沉浸式互动运营。',
  },
  {
    name: '家庭与教育',
    detail: '家庭陪伴、学习辅导、儿童编程与 STEM 实践平台。',
  },
];

export const developerFeatures = [
  {
    title: 'EI-SDK',
    desc: '统一 API 接入感知、控制、对话和任务执行引擎。',
  },
  {
    title: 'Sim2Real Kit',
    desc: '高保真仿真环境，支持策略训练与真机一键部署。',
  },
  {
    title: 'Plugin Hub',
    desc: '组件市场与插件生态，快速扩展行业功能模块。',
  },
];

export const cases = [
  {
    title: '某新能源工厂装配线',
    summary: '上线 8 周后，关键工位人机协作效率提升 37%。',
    image: media.product4,
  },
  {
    title: '大型连锁仓储中心',
    summary: '多机器人调度降低分拣差错率 52%，夜间吞吐提升 41%。',
    image: media.product2,
  },
  {
    title: '科技展厅互动运营',
    summary: '具身导览系统带来 3.1 倍访客停留时长与高频复访。',
    image: media.product3,
  },
];

export const supportLinks = [
  { title: '开发文档', href: '#', desc: 'API 参考、接入指南与最佳实践。' },
  { title: 'FAQ', href: '#', desc: '常见部署、调试与许可证问题说明。' },
  { title: '开发者论坛', href: '#', desc: '问题讨论、示例共享、官方技术答疑。' },
  { title: '状态与公告', href: '#', desc: '平台状态、更新日志、安全公告。' },
];
