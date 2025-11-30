import React from 'react';
import './Resume.css';

interface ContactInfo {
  phone: string;
  email: string;
}

interface Education {
  school: string;
  degree: string;
  major: string;
  graduationDate: string;
  location: string;
  gpa: string;
  rank: string;
}

interface Skill {
  category: string;
  items: string[];
}

interface Project {
  title: string;
  description: string;
  image?: string;
  link?: string;
  details?: string;
  icon: string;
}

interface Experience {
  title: string;
  company: string;
  date: string;
  location: string;
  responsibilities: string[];
}

const Resume: React.FC = () => {
  const contactInfo: ContactInfo = {
    phone: '+86 18992685597',
    email: 'meqt@foxmail.com'
  };

  const education: Education = {
    school: '华中科技大学',
    degree: '本科',
    major: '电子信息工程',
    graduationDate: '2024年7月',
    location: '湖北，武汉',
    gpa: '3.86/4',
    rank: '6/26'
  };

  const skills: Skill[] = [
    {
      category: 'DEVELOPING',
      items: [
        'Web: JS, React',
        '客户端: ObjC, Swift, Kotlin',
        '算法: Python, Matlab, C++',
        '兴趣: Rust, wasm, wgpu'
      ]
    },
    {
      category: 'LANGUAGE',
      items: ['托福成绩: 101']
    }
  ];

  const coursework = [
    '数学', '高等数学', '线性代数', '概率论', '复变函数', '随机过程',
    '数理方程与特殊函数', '数值分析', '通信', '信息论基础', '信号与系统',
    '数字信号处理', '通信原理', '计算机', '数据结构', '计算机网络',
    '计算机组成与原理', '操作系统', '多媒体方向选修课', '数字图像处理',
    '数字影音处理', '多媒体技术与应用'
  ];

  const projects: Project[] = [
    {
      title: '独立上线App: 智能钢琴谱',
      description: '智能钢琴谱（链接可点击）（本科期间帮老师实现）',
      icon: '🎵'
    },
    {
      title: '智能钢琴谱',
      description: '智能钢琴谱，是一款基于人工智能技术的智能乐谱APP。它能根据你的演奏，自动帮您翻谱。',
      image: '/assets/smartscore.png',
      icon: '🎵'
    },
    {
      title: '个人项目：衍射仿真应用',
      description: '',
      link: 'LightPlayground.swiftpm',
      image: '/assets/lightPlayground.png',
      details: '将O(n²)的非近似公式优化化为O(n²log(n))的估算算法，通过利用二维快速傅里叶变换，使实时用户交互成为可能。',
      icon: '🔬'
    }
  ];

  const experiences: Experience[] = [
    {
      title: '客户端开发',
      company: '腾讯视频',
      date: '2024年7月',
      location: '深圳',
      responsibilities: [
        '推动组内使用Swift混编，排查组内runtime机制的异常。',
        '技术需求：远程音频控制（手机控制电视）。',
        '护眼模式需求：距离检测，眨眼检测创新功能开发。',
        '学习动态化跨端方案VectorLayout，进行相关开发。',
        '学习KMM(Kotlin Multiplatform Mobile)三端一码方案。'
      ]
    },
    {
      title: '软件开发实习生 - iOS移动应用',
      company: '字节跳动-懂车帝',
      date: '2023年10月 - 2023年12月',
      location: '北京',
      responsibilities: [
        'SwiftUI实时活动，灵动岛适配。',
        '学习动态化跨端方案Lynx。',
        '首页Feed流相关需求开发。'
      ]
    }
  ];

  return (
    <div className="resume-container">
      {/* Header */}
      <header className="resume-header">
        <h1>蒋艺</h1>
        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">📞</span>
            <span>{contactInfo.phone}</span>
          </div>
          <div className="contact-item">
            <span className="icon">✉️</span>
            <span>{contactInfo.email}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="resume-main">
        {/* Sidebar */}
        <aside className="resume-sidebar">
          {/* Education */}
          <section className="section">
            <h2>Education</h2>
            <div className="education-item">
              <h3>{education.school}</h3>
              <div className="education-details">
                {education.degree} - {education.major}
              </div>
              <div className="education-details">
                📅 {education.graduationDate}
              </div>
              <div className="education-details">
                📍 {education.location}
              </div>
              <div className="gpa-info">
                <span><strong>GPA:</strong> {education.gpa}</span>
              </div>
              <div className="gpa-info">
                <span><strong>排名:</strong> {education.rank}</span>
              </div>
            </div>
          </section>

          {/* Links */}
          <section className="section">
            <h2>Links</h2>
            <div className="links">
              <a href="#" className="link-item">🔗 GitHub: meqtMac</a>
              <a href="#" className="link-item">📝 Blog: meqtmac.github.io</a>
            </div>
          </section>

          {/* Skills */}
          <section className="section">
            <h2>Skills</h2>
            {skills.map((skill, index) => (
              <div key={index} className="skills-category">
                <h3>{skill.category}</h3>
                <div className="skills-list">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex}>• {item}</div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Coursework */}
          <section className="section">
            <h2>Coursework</h2>
            <div className="coursework-list">
              {coursework.map((course, index) => (
                <div key={index} className="coursework-item">{course}</div>
              ))}
            </div>
          </section>
        </aside>

        {/* Content */}
        <main className="resume-content">
          {/* Summary */}
          <section className="section">
            <h2>Summary</h2>
            <p>
              移动客户端开发，前端开发，图形 API（Metal，WebGPU）所有涉猎，希望
              从事相关的前端，客户端相关开发及图形学研究，直觉相关研究。
            </p>
          </section>

          {/* Projects */}
          <section className="section">
            <h2>Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="project">
                <h3 className="project-title">
                  <div className="project-icon">{project.icon}</div>
                  {project.title}
                </h3>
                {project.description && (
                  <div className="project-description">
                    {project.description}
                  </div>
                )}
                {project.link && (
                  <div className="project-link">
                    <a href="#">🔗 {project.link}</a>
                  </div>
                )}
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                )}
                {project.details && (
                  <div className="project-details">
                    <p>{project.details}</p>
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* Experience */}
          <section className="section">
            <h2>Experience</h2>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <div className="experience-info">
                    <div className="experience-title">{exp.title}</div>
                    <div className="experience-company">{exp.company}</div>
                  </div>
                  <div className="experience-meta">
                    <div className="experience-date">📅 {exp.date}</div>
                    <div className="experience-location">📍 {exp.location}</div>
                  </div>
                </div>
                <div className="experience-description">
                  <ul>
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;