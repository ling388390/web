import React, { useEffect, useState } from 'react';
import { ChevronDown, Terminal, Code2, Cpu } from 'lucide-react';
import { currentColors } from '../lib/colors';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = '欢迎来到科技视界';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  const FloatingIcon = ({ Icon, delay, x, y }) => (
    <div
      className="absolute opacity-20 animate-pulse"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        color: currentColors.accent
      }}
    >
      <Icon size={24} />
    </div>
  );

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: currentColors.background }}
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        {/* 网格背景 */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(${currentColors.primary}22 1px, transparent 1px), linear-gradient(90deg, ${currentColors.primary}22 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* 浮动图标 */}
        <FloatingIcon Icon={Terminal} delay={0} x={10} y={20} />
        <FloatingIcon Icon={Code2} delay={1} x={85} y={15} />
        <FloatingIcon Icon={Cpu} delay={2} x={15} y={80} />
        <FloatingIcon Icon={Terminal} delay={3} x={80} y={75} />
        
        {/* 渐变光效 */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: `radial-gradient(circle, ${currentColors.primary}, transparent)`
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: `radial-gradient(circle, ${currentColors.accent}, transparent)`
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* 主标题 */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span 
            className="bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(45deg, ${currentColors.primary}, ${currentColors.accent})`
            }}
          >
            {text}
          </span>
          {isTyping && (
            <span 
              className="animate-pulse"
              style={{ color: currentColors.primary }}
            >
              |
            </span>
          )}
        </h1>

        {/* 副标题 */}
        <p 
          className="text-xl md:text-2xl mb-8 leading-relaxed"
          style={{ color: currentColors.textSecondary }}
        >
          探索前沿技术，分享编程智慧，记录数字时代的思考与创新
        </p>

        {/* 特色标签 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['人工智能', '前端开发', '云计算', '区块链', '物联网'].map((tag, index) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: `${currentColors.primary}20`,
                borderColor: `${currentColors.primary}50`,
                color: currentColors.primary
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: currentColors.primary,
              color: currentColors.background,
              boxShadow: `0 0 20px ${currentColors.primary}40`
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = `0 0 30px ${currentColors.primary}60`;
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = `0 0 20px ${currentColors.primary}40`;
            }}
          >
            开始探索
          </button>
          
          <button
            className="px-8 py-3 rounded-lg font-semibold border transition-all duration-300 hover:scale-105"
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
            查看作品
          </button>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            size={32} 
            style={{ color: currentColors.textSecondary }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

