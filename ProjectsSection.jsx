import React, { useState } from 'react';
import { ExternalLink, Github, Play, Code, Smartphone, Globe } from 'lucide-react';
import { currentColors } from '../lib/colors';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const projects = [
    {
      id: 1,
      title: 'AI智能聊天助手',
      description: '基于大语言模型的智能对话系统，支持多轮对话、上下文理解和个性化回复。采用React + Node.js + OpenAI API构建。',
      category: '人工智能',
      technologies: ['React', 'Node.js', 'OpenAI', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
      status: '已完成',
      featured: true
    },
    {
      id: 2,
      title: '实时数据可视化平台',
      description: '企业级数据可视化解决方案，支持实时数据流处理、多维度图表展示和交互式仪表板设计。',
      category: '数据可视化',
      technologies: ['Vue.js', 'D3.js', 'WebSocket', 'Python'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
      status: '进行中',
      featured: true
    },
    {
      id: 3,
      title: '区块链投票系统',
      description: '基于以太坊的去中心化投票平台，确保投票过程的透明性和不可篡改性。支持智能合约和Web3集成。',
      category: '区块链',
      technologies: ['Solidity', 'Web3.js', 'React', 'IPFS'],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
      status: '已完成',
      featured: false
    },
    {
      id: 4,
      title: '微服务架构电商平台',
      description: '采用微服务架构的现代电商解决方案，包含用户管理、商品目录、订单处理、支付集成等核心功能。',
      category: '后端开发',
      technologies: ['Spring Boot', 'Docker', 'Kubernetes', 'Redis'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
      status: '已完成',
      featured: false
    },
    {
      id: 5,
      title: '跨平台移动应用',
      description: '使用React Native开发的跨平台移动应用，提供原生性能和用户体验。集成了推送通知、地理定位等功能。',
      category: '移动开发',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
      status: '进行中',
      featured: false
    },
    {
      id: 6,
      title: '云原生监控系统',
      description: '基于Prometheus和Grafana的云原生应用监控解决方案，提供实时性能监控、告警和日志分析功能。',
      category: '云计算',
      technologies: ['Prometheus', 'Grafana', 'Kubernetes', 'Go'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
      status: '已完成',
      featured: true
    }
  ];

  const categories = ['全部', '人工智能', '数据可视化', '区块链', '后端开发', '移动开发', '云计算'];

  const filteredProjects = projects.filter(project => 
    selectedCategory === '全部' || project.category === selectedCategory
  );

  const getStatusColor = (status) => {
    switch (status) {
      case '已完成':
        return currentColors.accent;
      case '进行中':
        return currentColors.secondary;
      default:
        return currentColors.textSecondary;
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case '移动开发':
        return Smartphone;
      case '数据可视化':
        return Globe;
      default:
        return Code;
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: currentColors.surface }}
    >
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(45deg, ${currentColors.primary}, ${currentColors.accent})`
            }}
          >
            项目作品
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: currentColors.textSecondary }}
          >
            展示技术实践成果，从概念到实现的完整项目经历
          </p>
        </div>

        {/* 分类筛选 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: selectedCategory === category 
                  ? currentColors.primary 
                  : `${currentColors.primary}20`,
                color: selectedCategory === category 
                  ? currentColors.background 
                  : currentColors.primary,
                border: `1px solid ${currentColors.primary}50`
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            
            return (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{
                  backgroundColor: currentColors.background,
                  borderColor: `${currentColors.primary}30`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* 特色项目标识 */}
                {project.featured && (
                  <div 
                    className="absolute top-4 right-4 z-20 px-2 py-1 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: currentColors.accent,
                      color: currentColors.background
                    }}
                  >
                    精选
                  </div>
                )}

                {/* 项目图片 */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  {/* 悬浮操作按钮 */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <button
                        className="p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                        style={{
                          backgroundColor: `${currentColors.primary}90`,
                          color: currentColors.background
                        }}
                      >
                        <Play size={20} />
                      </button>
                      <button
                        className="p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                        style={{
                          backgroundColor: `${currentColors.accent}90`,
                          color: currentColors.background
                        }}
                      >
                        <Github size={20} />
                      </button>
                    </div>
                  </div>

                  {/* 状态标识 */}
                  <div className="absolute bottom-4 left-4">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                      style={{
                        backgroundColor: `${getStatusColor(project.status)}90`,
                        color: currentColors.background
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* 项目信息 */}
                <div className="p-6">
                  {/* 分类和标题 */}
                  <div className="flex items-center mb-3">
                    <CategoryIcon 
                      size={16} 
                      className="mr-2"
                      style={{ color: currentColors.accent }}
                    />
                    <span 
                      className="text-sm font-medium"
                      style={{ color: currentColors.accent }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3 
                    className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                    style={{
                      color: currentColors.text,
                      backgroundImage: `linear-gradient(45deg, ${currentColors.primary}, ${currentColors.accent})`
                    }}
                  >
                    {project.title}
                  </h3>

                  <p 
                    className="text-sm mb-4 line-clamp-3"
                    style={{ color: currentColors.textSecondary }}
                  >
                    {project.description}
                  </p>

                  {/* 技术栈 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{
                          backgroundColor: `${currentColors.primary}20`,
                          color: currentColors.primary
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex gap-3">
                    <button
                      className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: currentColors.primary,
                        color: currentColors.background
                      }}
                    >
                      <ExternalLink size={14} className="mr-2" />
                      查看演示
                    </button>
                    <button
                      className="px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 hover:scale-105"
                      style={{
                        borderColor: currentColors.accent,
                        color: currentColors.accent,
                        backgroundColor: 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = `${currentColors.accent}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                      }}
                    >
                      <Github size={14} />
                    </button>
                  </div>
                </div>

                {/* 悬浮边框效果 */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `0 0 0 1px ${currentColors.primary}50, 0 0 30px ${currentColors.primary}20`
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

