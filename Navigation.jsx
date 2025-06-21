import React, { useState } from 'react';
import { Menu, X, Home, FileText, User, Mail, Code } from 'lucide-react';
import { currentColors } from '../lib/colors';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: '首页', href: '#home', icon: Home },
    { name: '文章', href: '#articles', icon: FileText },
    { name: '作品', href: '#projects', icon: Code },
    { name: '关于', href: '#about', icon: User },
    { name: '联系', href: '#contact', icon: Mail },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ 
        backgroundColor: `${currentColors.background}CC`,
        borderColor: `${currentColors.primary}33`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(45deg, ${currentColors.primary}, ${currentColors.accent})`
              }}
            >
              TechVision
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{ 
                      color: currentColors.text,
                      ':hover': {
                        backgroundColor: `${currentColors.primary}20`,
                        color: currentColors.primary
                      }
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = `${currentColors.primary}20`;
                      e.target.style.color = currentColors.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = currentColors.text;
                    }}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md transition-colors duration-300"
              style={{ 
                color: currentColors.text,
                ':hover': { backgroundColor: `${currentColors.primary}20` }
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = `${currentColors.primary}20`;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div 
          className="md:hidden border-t"
          style={{ 
            backgroundColor: currentColors.surface,
            borderColor: `${currentColors.primary}33`
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
                  style={{ color: currentColors.text }}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = `${currentColors.primary}20`;
                    e.target.style.color = currentColors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = currentColors.text;
                  }}
                >
                  <IconComponent className="w-5 h-5 mr-3" />
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

