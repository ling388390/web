import React from 'react';
import { Code, Coffee, Heart, Award, Users, Zap } from 'lucide-react';
import { currentColors } from '../lib/colors';

const AboutSection = () => {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Vue.js', level: 90 },
    { name: 'Node.js/Python', level: 85 },
    { name: 'Docker/Kubernetes', level: 80 },
    { name: 'AI/Machine Learning', level: 75 },
    { name: 'Blockchain/Web3', level: 70 }
  ];

  const stats = [
    { icon: Code, label: '项目经验', value: '50+' },
    { icon: Coffee, label: '代码行数', value: '100K+' },
    { icon: Users, label: '团队协作', value: '20+' },
    { icon: Award, label: '技术认证', value: '15+' }
  ];

  const timeline = [
    {
      year: '2024',
      title: '全栈架构师',
      company: '科技创新公司',
      description: '负责企业级应用架构设计，推动技术团队数字化转型'
    },
    {
      year: '2022',
      title: '高级前端工程师',
      company: '互联网公司',
      description: '主导多个大型项目的前端架构设计和技术选型'
    },
    {
      year: '2020',
      title: '前端开发工程师',
      company: '软件公司',
      description: '参与多个Web应用开发，积累丰富的项目经验'
    },
    {
      year: '2018',
      title: '计算机科学学士',
      company: '知名大学',
      description: '专业学习计算机科学基础理论和编程技能'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: currentColors.background }}
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
            关于我
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: currentColors.textSecondary }}
          >
            热爱技术，追求创新，用代码改变世界
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* 左侧：个人介绍 */}
          <div>
            {/* 头像和基本信息 */}
            <div className="text-center lg:text-left mb-8">
              <div 
                className="w-32 h-32 mx-auto lg:mx-0 rounded-full mb-6 overflow-hidden border-4"
                style={{ borderColor: currentColors.primary }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="个人头像"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 
                className="text-2xl font-bold mb-2"
                style={{ color: currentColors.text }}
              >
                张科技
              </h3>
              <p 
                className="text-lg mb-4"
                style={{ color: currentColors.accent }}
              >
                全栈开发工程师 & 技术博主
              </p>
            </div>

            {/* 个人描述 */}
            <div className="mb-8">
              <p 
                className="text-lg leading-relaxed mb-4"
                style={{ color: currentColors.textSecondary }}
              >
                我是一名充满激情的全栈开发工程师，拥有6年的软件开发经验。专注于现代Web技术、云原生架构和人工智能应用开发。
              </p>
              <p 
                className="text-lg leading-relaxed mb-4"
                style={{ color: currentColors.textSecondary }}
              >
                热衷于探索前沿技术，善于将复杂的技术概念转化为易懂的内容。通过技术博客分享知识，帮助更多开发者成长。
              </p>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: currentColors.textSecondary }}
              >
                相信技术的力量能够改变世界，致力于用代码创造更美好的数字未来。
              </p>
            </div>

            {/* 统计数据 */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="text-center p-4 rounded-lg border transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: currentColors.surface,
                      borderColor: `${currentColors.primary}30`
                    }}
                  >
                    <IconComponent 
                      size={32} 
                      className="mx-auto mb-2"
                      style={{ color: currentColors.primary }}
                    />
                    <div 
                      className="text-2xl font-bold mb-1"
                      style={{ color: currentColors.text }}
                    >
                      {stat.value}
                    </div>
                    <div 
                      className="text-sm"
                      style={{ color: currentColors.textSecondary }}
                    >
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 技能标签 */}
            <div>
              <h4 
                className="text-xl font-bold mb-4"
                style={{ color: currentColors.text }}
              >
                核心技能
              </h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'Vue.js', 'Node.js', 'Python', 'TypeScript', 'Docker', 'Kubernetes', 'AI/ML', 'Blockchain'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: `${currentColors.primary}20`,
                      color: currentColors.primary,
                      border: `1px solid ${currentColors.primary}50`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧：技能和时间线 */}
          <div>
            {/* 技能进度条 */}
            <div className="mb-12">
              <h4 
                className="text-xl font-bold mb-6"
                style={{ color: currentColors.text }}
              >
                技术专长
              </h4>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span 
                        className="text-sm font-medium"
                        style={{ color: currentColors.text }}
                      >
                        {skill.name}
                      </span>
                      <span 
                        className="text-sm"
                        style={{ color: currentColors.textSecondary }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div 
                      className="w-full h-2 rounded-full overflow-hidden"
                      style={{ backgroundColor: `${currentColors.primary}20` }}
                    >
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${currentColors.primary}, ${currentColors.accent})`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 职业时间线 */}
            <div>
              <h4 
                className="text-xl font-bold mb-6"
                style={{ color: currentColors.text }}
              >
                职业历程
              </h4>
              <div className="relative">
                {/* 时间线 */}
                <div 
                  className="absolute left-4 top-0 bottom-0 w-0.5"
                  style={{ backgroundColor: `${currentColors.primary}50` }}
                />
                
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative flex items-start">
                      {/* 时间点 */}
                      <div 
                        className="flex-shrink-0 w-8 h-8 rounded-full border-4 flex items-center justify-center"
                        style={{
                          backgroundColor: currentColors.background,
                          borderColor: currentColors.primary
                        }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: currentColors.primary }}
                        />
                      </div>
                      
                      {/* 内容 */}
                      <div className="ml-6 flex-1">
                        <div 
                          className="text-sm font-bold mb-1"
                          style={{ color: currentColors.accent }}
                        >
                          {item.year}
                        </div>
                        <h5 
                          className="text-lg font-bold mb-1"
                          style={{ color: currentColors.text }}
                        >
                          {item.title}
                        </h5>
                        <div 
                          className="text-sm mb-2"
                          style={{ color: currentColors.primary }}
                        >
                          {item.company}
                        </div>
                        <p 
                          className="text-sm"
                          style={{ color: currentColors.textSecondary }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部CTA */}
        <div className="text-center mt-16">
          <div 
            className="inline-flex items-center px-6 py-3 rounded-lg text-lg font-semibold"
            style={{
              backgroundColor: `${currentColors.primary}20`,
              color: currentColors.primary,
              border: `1px solid ${currentColors.primary}50`
            }}
          >
            <Heart size={20} className="mr-2" />
            让我们一起用技术创造美好未来
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

