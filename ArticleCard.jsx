import React from 'react';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { currentColors } from '../lib/colors';

const ArticleCard = ({ article, index }) => {
  return (
    <article 
      className="group relative overflow-hidden rounded-xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      style={{
        backgroundColor: currentColors.surface,
        borderColor: `${currentColors.primary}30`,
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* 背景渐变效果 */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${currentColors.primary}10, ${currentColors.accent}10)`
        }}
      />
      
      {/* 文章图片 */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
        />
        
        {/* 分类标签 */}
        <div className="absolute top-4 left-4">
          <span 
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: `${currentColors.accent}90`,
              color: currentColors.background
            }}
          >
            {article.category}
          </span>
        </div>
      </div>

      {/* 文章内容 */}
      <div className="p-6 relative z-10">
        {/* 标题 */}
        <h3 
          className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
          style={{
            color: currentColors.text,
            backgroundImage: `linear-gradient(45deg, ${currentColors.primary}, ${currentColors.accent})`
          }}
        >
          {article.title}
        </h3>

        {/* 摘要 */}
        <p 
          className="text-sm mb-4 line-clamp-3"
          style={{ color: currentColors.textSecondary }}
        >
          {article.excerpt}
        </p>

        {/* 标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded text-xs"
              style={{
                backgroundColor: `${currentColors.primary}20`,
                color: currentColors.primary
              }}
            >
              <Tag size={10} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* 元信息 */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-4">
            <span 
              className="flex items-center"
              style={{ color: currentColors.textSecondary }}
            >
              <Calendar size={12} className="mr-1" />
              {article.date}
            </span>
            <span 
              className="flex items-center"
              style={{ color: currentColors.textSecondary }}
            >
              <Clock size={12} className="mr-1" />
              {article.readTime}
            </span>
          </div>
          
          {/* 阅读更多按钮 */}
          <button 
            className="flex items-center font-medium transition-all duration-300 hover:scale-105"
            style={{ color: currentColors.accent }}
          >
            阅读更多
            <ArrowRight size={12} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* 悬浮边框效果 */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `0 0 0 1px ${currentColors.primary}50, 0 0 20px ${currentColors.primary}20`
        }}
      />
    </article>
  );
};

export default ArticleCard;

