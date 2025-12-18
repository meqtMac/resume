import React from 'react';
import SmartScoreIcon from './SmartScoreIcon';
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
}

interface WorkExperience {
  company: string;
  positions: {
    title: string;
    startDate: string;
    endDate: string;
  }[];
  location: string;
}



interface Project {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  link?: string;
  linkText?: string;
  details?: string;
  isApp?: boolean;
  showIcon?: boolean;
  experiences?: Experience[];
}

interface Experience {
  title: string;
  company: string;
  date: string;
  location: string;
  responsibilities: string[];
}



const formatSkillText = (text: string) => {
  // 简化处理：直接将整个技能项用mono字体显示
  return <span className="tech-term">{text}</span>;
};

const formatSectionTitle = (title: string) => {
  const firstChar = title.charAt(0).toUpperCase();
  const nextTwoChars = title.slice(1, 3).toLowerCase();
  const restChars = title.slice(3).toLowerCase();

  return (
    <>
      <span style={{ color: '#3E0097' }}>{firstChar}</span>
      <span style={{ color: '#3E0097' }}>{nextTwoChars}</span>
      <span style={{ color: '#000000' }}>{restChars}</span>
    </>
  );
};

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
    location: '武汉'
  };

  const workExperiences: WorkExperience[] = [
    {
      company: '腾讯视频',
      location: '深圳',
      positions: [
        {
          title: '腾讯视频iOS客户端开发',
          startDate: '2024-7',
          endDate: ''
        },
      ]
    },
  ];

  const skills = [
    'Swift, Objective C, UIKit',
    'Vue3, React, tailwindcss, vite',
    'Python',
    'Rust',
    'Cursor'
  ];

  const languages = [
    'TOEFL成绩 101分'
  ];



  const projects: Project[] = [
    {
      title: '智能钢琴谱',
      link: 'https://apps.apple.com/cn/app/%E6%99%BA%E8%83%BD%E9%92%A2%E7%90%B4%E8%B0%B1/id6504392318?l=en-GB',
      linkText: 'App Store上线',
      details: '智能钢琴谱，是一款基于人工智能技术的智能乐谱APP。它能根据你的演奏，自动帮您翻谱。',
      image: '/assets/smartscore.png',
      experiences: [
        {
          title: '腾讯视频移动端播放器、投屏业务维护',
          company: '腾讯视频',
          date: '2024年7月 - 至今',
          location: '深圳',
          responsibilities: [
            '使用Xcode Instruments排查；通过节流+inspect 系统MPVolueView API调用提高优化音量调节帧率。',
            'DLNA投屏 & 腾讯视频私有投屏音量调控能力、三方厂商导流私有投屏能力开发。',
            'iOS，Android、鸿蒙键盘控制播放能力适配。',
            'KMM生成objc头文件治理，优化无需暴露的类。推动播放器业务引入Swift混编，排查通过NSProxy实现的ObjectiveC对象响应式能力在Swift中无法实现的问题。',
            '通过AI编码工具；使用Webview开发腾讯内部开关下发平台Debug工具。',
          ]
        },
        {
          title: '在研AIGC前端项目',
          company: '腾讯视频',
          date: '2025年9月 - 至今',
          location: '深圳',
          responsibilities: [
            '首页多tab瀑布流开发；动态卡片渲染、瀑布流布局、数据缓存、SSR能力开发。',
            '主导使用tailwindcss移动端页面适配，在移动端快速上线业务。',
            '通过AI使用rust开发protobuf message - ts interface & 自定义协议 map<string, string> 解析器工具，并部署水线；用于前端瀑布流动态下发方案。'
          ]
        },

        {
          title: '软件开发实习生 - iOS移动应用',
          company: '懂车帝',
          date: '2023年10月 - 2023年12月',
          location: '北京',
          responsibilities: [
            'SwiftUI实时活动、灵动岛适配',
          ]
        }
      ]
    }
  ];



  return (
    <div className="resume-container">
      {/* Header */}
      <header className="resume-header">
        <h1 className="name">
          <span className="first-name">蒋</span>
          <span className="last-name">艺</span>
        </h1>
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
        {/* Left Column */}
        <aside className="resume-sidebar">
          {/* Experience */}
          <section className="section">
            <h2 className="section-title">{formatSectionTitle("Experience")}</h2>
            <div className="education-item">
              <div className="education-header">
                <div className="education-info">
                  <h3 className="school-name">{education.school}</h3>
                  <div className="degree-info">
                    {education.degree}{education.major}
                  </div>
                  <div className="graduation-date">📅 {education.graduationDate}毕业</div>
                </div>
                <div className="education-location">📍 {education.location}</div>
              </div>
            </div>

            {workExperiences.map((work, index) => (
              <div key={index} className="work-experience-item">
                <div className="work-header">
                  <h3 className="company-name">{work.company}</h3>
                  <div className="work-location">📍 {work.location}</div>
                </div>
                {work.positions.map((position, posIndex) => (
                  <div key={posIndex} className="position-item">
                    <div className="position-info">{position.title}</div>
                    <div className="work-date">
                      📅 {position.startDate}
                      {position.endDate && ` - ${position.endDate}`}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </section>

          {/* Language */}
          <section className="section">
            <h2 className="section-title">{formatSectionTitle("Language")}</h2>
            <ul className="language-list">
              {languages.map((language, index) => (
                <li key={index} className="language-item">{language}</li>
              ))}
            </ul>
          </section>

          {/* Skills */}
          <section className="section">
            <h2 className="section-title">{formatSectionTitle("Skills")}</h2>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} className="skill-item">{formatSkillText(skill)}</li>
              ))}
            </ul>
          </section>

          {/* Links */}
          <section className="section">
            <h2 className="section-title">{formatSectionTitle("Links")}</h2>
            <div className="links">
              <div className="link-item">
                <span className="link-icon">🔗</span>
                <span className="link-label">GitHub</span>
                <a href="#" className="link-value">meqtMac</a>
              </div>
              <div className="link-item">
                <span className="link-icon">🔗</span>
                <span className="link-label">Blog</span>
                <a href="#" className="link-value">meqtmac.github.io</a>
              </div>
            </div>
          </section>


        </aside>

        {/* Right Column */}
        <main className="resume-content">
          {/* Summary */}
          <section className="section">
            <h2 className="section-title">{formatSectionTitle("Summary")}</h2>
            <p className="summary-text">
              职业iOS移动客户端开发，业余前端开发；熟练掌握Cursor AI编码工具使用。
            </p>
          </section>

          {/* Projects */}
          <section className="section">
            <h2 className="section-title">{formatSectionTitle("Projects")}</h2>
            {projects.map((project, index) => (
              <div key={index} className="project">
                <div className="project-header">
                  {project.isApp && <span className="app-badge">独立上线App</span>}
                  {project.title && !project.isApp && <span className="project-type">{project.title}</span>}
                  {project.subtitle && <span className="project-title">{project.subtitle}</span>}
                </div>

                {project.description && (
                  <div className="project-description">
                    {project.description}
                  </div>
                )}

                {project.link && (
                  <div className="project-link">
                    <span className="link-icon">🔗</span>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.linkText}
                    </a>
                  </div>
                )}

                {project.showIcon && (
                  <div className="project-app-icon">
                    <SmartScoreIcon size={60} />
                  </div>
                )}

                {project.image && (
                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.title || project.subtitle}
                      className="project-image"
                    />
                  </div>
                )}

                {project.details && (
                  <div className="project-details">
                    <p>{project.details}</p>
                  </div>
                )}

                {project.experiences && project.experiences.length > 0 && (
                  <div className="project-experiences">
                    {project.experiences.map((exp, expIndex) => (
                      <div key={expIndex} className="experience-item">
                        <div className="experience-header">
                          <div className="experience-title-section">
                            <h3 className="experience-title">{exp.title}</h3>
                            <div className="experience-company">{exp.company}</div>
                          </div>
                        </div>
                        <ul className="experience-responsibilities">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>

        </main>
      </div>
    </div>
  );
};

export default Resume;