import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle } from 'lucide-react';
import { currentColors } from '../lib/colors';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('表单提交:', formData);
    alert('消息已发送！我会尽快回复您。');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: '邮箱',
      value: 'zhang.tech@example.com',
      href: 'mailto:zhang.tech@example.com'
    },
    {
      icon: Phone,
      label: '电话',
      value: '+86 138 0000 0000',
      href: 'tel:+8613800000000'
    },
    {
      icon: MapPin,
      label: '位置',
      value: '中国 · 北京',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: '#333'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: '#0077B5'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: '#1DA1F2'
    },
    {
      icon: MessageCircle,
      label: '微信',
      href: '#',
      color: '#07C160'
    }
  ];

  return (
    <section 
      id="contact" 
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
            联系我
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: currentColors.textSecondary }}
          >
            有项目合作或技术交流的想法？欢迎随时与我联系
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 左侧：联系信息 */}
          <div>
            <h3 
              className="text-2xl font-bold mb-8"
              style={{ color: currentColors.text }}
            >
              联系方式
            </h3>

            {/* 联系信息列表 */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center p-4 rounded-lg border transition-all duration-300 hover:scale-105 group"
                    style={{
                      backgroundColor: currentColors.background,
                      borderColor: `${currentColors.primary}30`
                    }}
                  >
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-all duration-300"
                      style={{
                        backgroundColor: `${currentColors.primary}20`,
                        color: currentColors.primary
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <div 
                        className="text-sm font-medium mb-1"
                        style={{ color: currentColors.textSecondary }}
                      >
                        {info.label}
                      </div>
                      <div 
                        className="font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                        style={{
                          color: currentColors.text,
                          backgroundImage: `linear-gradient(45deg, ${currentColors.primary}, ${currentColors.accent})`
                        }}
                      >
                        {info.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* 社交媒体链接 */}
            <div>
              <h4 
                className="text-xl font-bold mb-6"
                style={{ color: currentColors.text }}
              >
                社交媒体
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{
                        backgroundColor: `${currentColors.primary}20`,
                        color: currentColors.primary
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = social.color;
                        e.target.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = `${currentColors.primary}20`;
                        e.target.style.color = currentColors.primary;
                      }}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* 可用性状态 */}
            <div 
              className="mt-12 p-6 rounded-lg border"
              style={{
                backgroundColor: currentColors.background,
                borderColor: `${currentColors.accent}30`
              }}
            >
              <div className="flex items-center mb-3">
                <div 
                  className="w-3 h-3 rounded-full mr-3 animate-pulse"
                  style={{ backgroundColor: currentColors.accent }}
                />
                <span 
                  className="font-semibold"
                  style={{ color: currentColors.text }}
                >
                  当前状态：可接受项目
                </span>
              </div>
              <p 
                className="text-sm"
                style={{ color: currentColors.textSecondary }}
              >
                我目前有时间接受新的项目合作和技术咨询。欢迎讨论您的想法！
              </p>
            </div>
          </div>

          {/* 右侧：联系表单 */}
          <div>
            <h3 
              className="text-2xl font-bold mb-8"
              style={{ color: currentColors.text }}
            >
              发送消息
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 姓名和邮箱 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: currentColors.text }}
                  >
                    姓名 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{
                      backgroundColor: currentColors.background,
                      borderColor: `${currentColors.primary}30`,
                      color: currentColors.text
                    }}
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: currentColors.text }}
                  >
                    邮箱 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{
                      backgroundColor: currentColors.background,
                      borderColor: `${currentColors.primary}30`,
                      color: currentColors.text
                    }}
                    placeholder="请输入您的邮箱"
                  />
                </div>
              </div>

              {/* 主题 */}
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: currentColors.text }}
                >
                  主题 *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300"
                  style={{
                    backgroundColor: currentColors.background,
                    borderColor: `${currentColors.primary}30`,
                    color: currentColors.text
                  }}
                  placeholder="请输入消息主题"
                />
              </div>

              {/* 消息内容 */}
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: currentColors.text }}
                >
                  消息内容 *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                  style={{
                    backgroundColor: currentColors.background,
                    borderColor: `${currentColors.primary}30`,
                    color: currentColors.text
                  }}
                  placeholder="请详细描述您的需求或想法..."
                />
              </div>

              {/* 提交按钮 */}
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
                <Send size={20} className="mr-2" />
                发送消息
              </button>
            </form>

            {/* 响应时间说明 */}
            <div 
              className="mt-6 p-4 rounded-lg"
              style={{
                backgroundColor: `${currentColors.accent}20`,
                border: `1px solid ${currentColors.accent}30`
              }}
            >
              <p 
                className="text-sm text-center"
                style={{ color: currentColors.accent }}
              >
                💡 我通常会在24小时内回复您的消息
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

