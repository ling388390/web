import React, { useEffect } from 'react';
import './App.css';
import { currentColors } from './lib/colors';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ArticlesSection from './components/ArticlesSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // 应用动态颜色到CSS变量
    const root = document.documentElement;
    root.style.setProperty('--primary-color', currentColors.primary);
    root.style.setProperty('--secondary-color', currentColors.secondary);
    root.style.setProperty('--accent-color', currentColors.accent);
    root.style.setProperty('--background-color', currentColors.background);
    root.style.setProperty('--surface-color', currentColors.surface);
    root.style.setProperty('--text-color', currentColors.text);
    root.style.setProperty('--text-secondary-color', currentColors.textSecondary);

    // 平滑滚动
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // 添加平滑滚动事件监听
    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="App min-h-screen" style={{ backgroundColor: currentColors.background }}>
      <Navigation />
      <main>
        <HeroSection />
        <ArticlesSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

