// 科技感配色生成器
export const generateTechColors = () => {
  const techColorPalettes = [
    {
      primary: '#00D4FF', // 电光蓝
      secondary: '#FF6B35', // 橙红
      accent: '#7B68EE', // 中紫色
      background: '#0A0A0A', // 深黑
      surface: '#1A1A1A', // 深灰
      text: '#FFFFFF',
      textSecondary: '#B0B0B0'
    },
    {
      primary: '#39FF14', // 荧光绿
      secondary: '#FF073A', // 鲜红
      accent: '#FFD700', // 金色
      background: '#0D1117', // GitHub深色
      surface: '#161B22',
      text: '#F0F6FC',
      textSecondary: '#8B949E'
    },
    {
      primary: '#FF00FF', // 品红
      secondary: '#00FFFF', // 青色
      accent: '#FFFF00', // 黄色
      background: '#000000', // 纯黑
      surface: '#1C1C1C',
      text: '#FFFFFF',
      textSecondary: '#CCCCCC'
    },
    {
      primary: '#8A2BE2', // 蓝紫色
      secondary: '#FF4500', // 橙红色
      accent: '#00CED1', // 深绿松石色
      background: '#0F0F23', // 深蓝黑
      surface: '#1E1E3F',
      text: '#E6E6FA',
      textSecondary: '#9370DB'
    },
    {
      primary: '#FF1493', // 深粉红
      secondary: '#00FF7F', // 春绿色
      accent: '#1E90FF', // 道奇蓝
      background: '#0C0C0C', // 接近黑色
      surface: '#1F1F1F',
      text: '#FFFFFF',
      textSecondary: '#D3D3D3'
    }
  ];

  const randomIndex = Math.floor(Math.random() * techColorPalettes.length);
  return techColorPalettes[randomIndex];
};

// 生成当前使用的配色
export const currentColors = generateTechColors();

