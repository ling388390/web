import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { currentColors } from '../lib/colors';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: '导航',
      links: [
        { name: '首页', href: '#home' },
        { name: '文章', href: '#articles' },
        { name: '作品', href: '#projects' },
        { name: '关于', href: '#about' },
        { name: '联系', href: '#contact' }
      ]
    },
    {
      title: '技术栈',
      links: [
        { name: 'React', href: '#' },
        { name: 'Vue.js', href: '#' },
        { name: 'Node.js', href: '#' },
        { name: 'Python', href: '#' },
        { name: 'Docker', href: '#' }
      ]
    },
    {
      title: '资源',
      links: [
        { name: '技术博客', href: '#' },
        { name: '开源项目', href: '#' },
        { name: '学习笔记', href: '#' },
        { name: 'RSS订阅', href: '#' },
        { name: '站点地图', href: '#' }
      ]
    }
  ];

  return (
    <footer 
      className="relative pt-20 pb-8"
      style={{ backgroundColor: currentColors.background }}
    >
      {/* 顶部装饰线 */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${currentColors.primary}, transparent)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 品牌信息 */}
          <div className="lg:col-span-1">
            <h3 
              className="text-2xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(45deg, ${currentColors.primary}, ${currentColors.accent})`
              }}
            >
              TechVision
            </h3>
            <p 
              className="text-sm mb-6 leading-relaxed"
              style={{ color: currentColors.textSecondary }}
            >
              探索前沿技术，分享编程智慧，记录数字时代的思考与创新。让我们一起用技术创造美好未来。
            </p>
            
            {/* 技术标签 */}
            <div className="flex flex-wrap gap-2">
              {['React', 'AI', 'Web3', 'Cloud'].map((tech) => (
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
          </div>

          {/* 链接列表 */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 
                className="text-lg font-semibold mb-4"
                style={{ color: currentColors.text }}
              >
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm transition-all duration-300 hover:translate-x-1"
                      style={{ color: currentColors.textSecondary }}
                      onMouseEnter={(e) => {
                        e.target.style.color = currentColors.primary;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = currentColors.textSecondary;
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 分割线 */}
        <div 
          className="h-px mb-8"
          style={{ backgroundColor: `${currentColors.primary}30` }}
        />

        {/* 底部信息 */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* 版权信息 */}
          <div className="flex items-center mb-4 md:mb-0">
            <span 
              className="text-sm"
              style={{ color: currentColors.textSecondary }}
            >
              © {currentYear} TechVision. Made with
            </span>
            <Heart 
              size={16} 
              className="mx-2 animate-pulse"
              style={{ color: currentColors.accent }}
            />
            <span 
              className="text-sm"
              style={{ color: currentColors.textSecondary }}
            >
              by Manus AI
            </span>
          </div>

          {/* 回到顶部按钮 */}
          <button
            onClick={scrollToTop}
            className="flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: `${currentColors.primary}20`,
              color: currentColors.primary,
              border: `1px solid ${currentColors.primary}30`
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = `${currentColors.primary}30`;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = `${currentColors.primary}20`;
            }}
          >
            <ArrowUp size={16} className="mr-2" />
            回到顶部
          </button>
        </div>

        {/* 技术声明 */}
        <div className="text-center mt-8">
          <p 
            className="text-xs"
            style={{ color: currentColors.textSecondary }}
          >
            本站使用 React + Tailwind CSS 构建 | 部署在云端 | 持续集成/持续部署
          </p>
        </div>
      </div>

      {/* 背景装饰 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <div 
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: `radial-gradient(circle, ${currentColors.primary}, transparent)`
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: `radial-gradient(circle, ${currentColors.accent}, transparent)`
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;

