import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { currentColors } from '../lib/colors';
import ArticleCard from './ArticleCard';

const ArticlesSection = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  // 模拟文章数据
  const articles = [
    {
      id: 1,
      title: '深入理解React 18的并发特性',
      excerpt: '探索React 18中引入的并发渲染机制，了解Suspense、Transitions和新的Hooks如何改变我们构建用户界面的方式。',
      category: '前端开发',
      tags: ['React', 'JavaScript', '并发编程'],
      date: '2024-01-15',
      readTime: '8分钟',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'AI驱动的代码生成：未来已来',
      excerpt: '从GitHub Copilot到ChatGPT，人工智能正在重塑软件开发流程。本文探讨AI工具如何提升开发效率。',
      category: '人工智能',
      tags: ['AI', 'GPT', '代码生成'],
      date: '2024-01-12',
      readTime: '12分钟',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: '微服务架构的最佳实践',
      excerpt: '在云原生时代，微服务架构成为企业级应用的首选。本文分享微服务设计、部署和监控的实战经验。',
      category: '后端开发',
      tags: ['微服务', 'Docker', 'Kubernetes'],
      date: '2024-01-10',
      readTime: '15分钟',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Web3与区块链技术前瞻',
      excerpt: '区块链技术正在重新定义互联网。从DeFi到NFT，从智能合约到去中心化应用，探索Web3的无限可能。',
      category: '区块链',
      tags: ['Web3', '区块链', 'DeFi'],
      date: '2024-01-08',
      readTime: '10分钟',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: '现代CSS布局技术深度解析',
      excerpt: '从Flexbox到Grid，从Container Queries到Subgrid，现代CSS为我们提供了强大的布局能力。',
      category: '前端开发',
      tags: ['CSS', 'Grid', 'Flexbox'],
      date: '2024-01-05',
      readTime: '6分钟',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: '云原生应用开发指南',
      excerpt: '云原生不仅仅是部署在云上，更是一种全新的应用设计和开发理念。了解如何构建真正的云原生应用。',
      category: '云计算',
      tags: ['云原生', 'DevOps', 'CI/CD'],
      date: '2024-01-03',
      readTime: '11分钟',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
    }
  ];

  const categories = ['全部', '前端开发', '后端开发', '人工智能', '区块链', '云计算'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '全部' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section 
      id="articles" 
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
            技术文章
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: currentColors.textSecondary }}
          >
            分享前沿技术洞察，记录编程学习心得，探讨行业发展趋势
          </p>
        </div>

        {/* 搜索和筛选 */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* 搜索框 */}
            <div className="relative flex-1 max-w-md">
              <Search 
                size={20} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                style={{ color: currentColors.textSecondary }}
              />
              <input
                type="text"
                placeholder="搜索文章..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300"
                style={{
                  backgroundColor: currentColors.surface,
                  borderColor: `${currentColors.primary}30`,
                  color: currentColors.text,
                  focusRingColor: currentColors.primary
                }}
              />
            </div>

            {/* 分类筛选 */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
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

            {/* 视图切换 */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className="p-2 rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: viewMode === 'grid' 
                    ? `${currentColors.primary}30` 
                    : 'transparent',
                  color: viewMode === 'grid' 
                    ? currentColors.primary 
                    : currentColors.textSecondary
                }}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className="p-2 rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: viewMode === 'list' 
                    ? `${currentColors.primary}30` 
                    : 'transparent',
                  color: viewMode === 'list' 
                    ? currentColors.primary 
                    : currentColors.textSecondary
                }}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* 文章网格 */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredArticles.map((article, index) => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              index={index}
            />
          ))}
        </div>

        {/* 加载更多按钮 */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-3 rounded-lg font-semibold border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: currentColors.primary,
              color: currentColors.primary,
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = `${currentColors.primary}20`;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            加载更多文章
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;

