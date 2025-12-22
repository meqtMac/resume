import React, { useState } from 'react';
import SmartScoreIcon from './SmartScoreIcon';
import './Resume.css';

type Language = 'zh' | 'en';

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

interface Translations {
  name: { first: string; last: string };
  sections: {
    experience: string;
    language: string;
    skills: string;
    links: string;
    summary: string;
    projects: string;
  };
  education: Education;
  workExperiences: WorkExperience[];
  languages: string[];
  summary: string;
  projects: Project[];
  graduationSuffix: string;
  appBadge: string;
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
      <span style={{ color: '#ffffff' }}>{firstChar}</span>
      <span style={{ color: '#ffffff' }}>{nextTwoChars}</span>
      <span style={{ color: '#a1a1aa' }}>{restChars}</span>
    </>
  );
};

const Resume: React.FC = () => {
  const [language, setLanguage] = useState<Language>('zh');

  const contactInfo: ContactInfo = {
    phone: '+86 18992685597',
    email: 'meqt@foxmail.com'
  };

  const skills = [
    'Swift, Objective C, UIKit',
    'Vue3, React, tailwindcss, vite',
    'Python',
    'Rust',
    'Cursor'
  ];

  const translations: Record<Language, Translations> = {
    zh: {
      name: { first: '蒋', last: '艺' },
      sections: {
        experience: 'Experience',
        language: 'Language',
        skills: 'Skills',
        links: 'Links',
        summary: 'Summary',
        projects: 'Projects'
      },
      education: {
        school: '华中科技大学',
        degree: '本科',
        major: '电子信息工程',
        graduationDate: '2024年7月',
        location: '武汉'
      },
      workExperiences: [
        {
          company: '腾讯',
          location: '深圳',
          positions: [
            {
              title: 'iOS客户端开发',
              startDate: '2024-7',
              endDate: ''
            },
          ]
        },
      ],
      languages: ['TOEFL成绩 101分'],
      summary: '1.5年iOS开发经验，App Store上线个人App。精通Swift/Objective-C、UIKit，熟悉Runtime机制，使用Instruments进行性能调优。具备AIGC项目开发经验，掌握大模型多轮对话、多模态AI应用（文生图/视频/音频）、SSE流式输出。了解HLS/HEVC多媒体技术。拥抱AI开发，熟练使用Cursor等工具提效。',
     graduationSuffix: '毕业',
      appBadge: '独立上线App',
      projects: [
        {
          title: '个人App 智能钢琴谱',
          link: 'https://apps.apple.com/cn/app/%E6%99%BA%E8%83%BD%E9%92%A2%E7%90%B4%E8%B0%B1/id6504392318?l=en-GB',
          details: '基于AI技术的智能乐谱APP，通过音频识别自动翻谱。使用Swift开发，集成UIKit/SwiftUI混合架构，Realm本地数据库存储。核心技术：CoreML本地模型部署进行乐谱位置识别，Accelerate框架调用硬件加速的二维傅立叶变换优化音频处理性能。',
          experiences: [
            {
              title: '腾讯视频移动端播放器',
              company: '腾讯视频',
              date: '2024年7月 - 至今',
              location: '深圳',
              responsibilities: [
                '性能优化：使用Xcode Instruments进行性能分析，通过节流机制优化MPVolumeView API调用，显著提升音量调节响应帧率。',
                '投屏技术开发：负责DLNA标准投屏及腾讯视频私有投屏协议的音量控制模块，实现三方厂商导流至私有投屏的技术方案。',
                '技术架构升级：主导播放器业务Swift混编改造，解决NSProxy响应式架构在Swift环境下的兼容性问题及x86_64模拟器构建适配。',
              ]
            },
            {
              title: '灵芽AI创作者社区 lumio.qq.com',
              company: '腾讯视频',
              date: '2025年9月 - 至今',
              location: '深圳',
              responsibilities: [
                '首页多tab瀑布流开发；动态卡片解析和渲染、瀑布流布局、数据缓存、自动播放能力。',
                '支持多模态的AIGC生成form业务；支持生图、生视频、生音频、多图prompt、首尾帧prompt。',
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
      ]
    },
    en: {
      name: { first: 'Jiang', last: 'Yi' },
      sections: {
        experience: 'Experience',
        language: 'Language',
        skills: 'Skills',
        links: 'Links',
        summary: 'Summary',
        projects: 'Projects'
      },
      education: {
        school: 'Huazhong University of Science and Technology',
        degree: "Bachelor's Degree",
        major: 'Electronic Information Engineering',
        graduationDate: 'July 2024',
        location: 'Wuhan'
      },
      workExperiences: [
        {
          company: 'Tencent',
          location: 'Shenzhen',
          positions: [
            {
              title: 'iOS Client Developer',
              startDate: '2024-7',
              endDate: ''
            },
          ]
        },
      ],
      languages: ['TOEFL Score: 101'],
      summary: '1.5 years of iOS development experience with App Store launch of personal App. Proficient in Swift/Objective-C, UIKit, Runtime mechanisms, and Instruments performance optimization. Experienced in AIGC projects with multi-turn LLM conversations, multimodal AI capabilities (text-to-image/video/audio) and SSE streaming. Familiar with HLS/HEVC multimedia technologies. Embracing AI-assisted development with tools like Cursor for enhanced productivity.',
      graduationSuffix: 'Graduated',
      appBadge: 'Independent App Launch',
      projects: [
        {
          title: 'Personal App Smart Piano Score',
          link: 'https://apps.apple.com/cn/app/%E6%99%BA%E8%83%BD%E9%92%A2%E7%90%B4%E8%B0%B1/id6504392318?l=en-GB',
          details: 'AI-powered intelligent sheet music APP with automatic page turning based on audio recognition. Developed in Swift with hybrid UIKit/SwiftUI architecture and Realm local database. Core technologies: CoreML local model deployment for score position recognition, Accelerate framework leveraging hardware-accelerated 2D FFT for optimized audio processing performance.',
          experiences: [
            {
              title: 'Tencent Video Mobile Player',
              company: 'Tencent Video',
              date: 'July 2024 - Present',
              location: 'Shenzhen',
              responsibilities: [
                'Performance Optimization: Conducted performance analysis using Xcode Instruments, implemented throttling mechanisms to optimize MPVolumeView API calls, significantly improving volume control response frame rate.',
                'Casting Technology Development: Led DLNA standard casting and Tencent Video proprietary casting protocol volume control modules, implemented technical solutions for third-party manufacturer redirection to proprietary casting.',
                'Technical Architecture Upgrade: Spearheaded Swift mixed compilation transformation for player business, resolved NSProxy reactive architecture compatibility issues in Swift environment and x86_64 simulator build adaptation.',
              ]
            },
            {
              title: 'AIGC Creator Community lumio.qq.com',
              company: 'Tencent Video',
              date: 'September 2025 - Present',
              location: 'Shenzhen',
              responsibilities: [
                'Homepage multi-tab waterfall flow development; dynamic card parsing and rendering, waterfall layout, data caching, autoplay capabilities.',
                'Multimodal AIGC generation form business; supporting text-to-image, text-to-video, text-to-audio, multi-image prompts, and first/last frame prompts.',
              ]
            },
            {
              title: 'Software Development Intern - iOS Mobile Applications',
              company: 'DongCheDi',
              date: 'October 2023 - December 2023',
              location: 'Beijing',
              responsibilities: [
                'SwiftUI Live Activities and Dynamic Island adaptation',
              ]
            }
          ]
        }
      ]
    }
  };

  const currentTranslation = translations[language];



  return (
    <div className="resume-container">
      {/* Language Switcher */}
      <div className="language-switcher">
        <button 
          className={`lang-btn ${language === 'zh' ? 'active' : ''}`}
          onClick={() => setLanguage('zh')}
        >
          中文
        </button>
        <button 
          className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
        >
          English
        </button>
      </div>

      {/* Header */}
      <header className="resume-header">
        <h1 className="name">
          <span className="first-name">{currentTranslation.name.first}</span>
          <span className="last-name">{currentTranslation.name.last}</span>
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
            <h2 className="section-title">{formatSectionTitle(currentTranslation.sections.experience)}</h2>
            <div className="education-item">
              <div className="education-header">
                <div className="education-info">
                  <h3 className="school-name">{currentTranslation.education.school}</h3>
                  <div className="degree-info">
                    {currentTranslation.education.degree}{currentTranslation.education.major}
                  </div>
                  <div className="graduation-date">{currentTranslation.education.graduationDate} {currentTranslation.graduationSuffix}</div>
                </div>
                <div className="education-location">{currentTranslation.education.location}</div>
              </div>
            </div>

            {currentTranslation.workExperiences.map((work, index) => (
              <div key={index} className="work-experience-item">
                <div className="work-header">
                  <h3 className="company-name">{work.company}</h3>
                  <div className="work-location">{work.location}</div>
                </div>
                {work.positions.map((position, posIndex) => (
                  <div key={posIndex} className="position-item">
                    <div className="position-info">{position.title}</div>
                    <div className="work-date">
                      {position.startDate}
                      {position.endDate && ` - ${position.endDate}`}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </section>

          {/* Language */}
          <section className="section">
            <h2 className="section-title">{formatSectionTitle(currentTranslation.sections.language)}</h2>
            <ul className="language-list">
              {currentTranslation.languages.map((lang, index) => (
                <li key={index} className="language-item">{lang}</li>
              ))}
            </ul>
          </section>

          {/* Skills */}
          <section className="section">
            <h2 className="section-title">{formatSectionTitle(currentTranslation.sections.skills)}</h2>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} className="skill-item">{formatSkillText(skill)}</li>
              ))}
            </ul>
          </section>

          {/* Links */}
          <section className="section">
            <h2 className="section-title">{formatSectionTitle(currentTranslation.sections.links)}</h2>
            <div className="links">
              <div className="link-item">
                <span className="link-label">GitHub</span>
                <a href="#" className="link-value">meqtMac</a>
              </div>
              <div className="link-item">
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
            <h2 className="section-title">{formatSectionTitle(currentTranslation.sections.summary)}</h2>
            <p className="summary-text">
              {currentTranslation.summary}
            </p>
          </section>

          {/* Projects */}
          <section className="section">
            <h2 className="section-title">{formatSectionTitle(currentTranslation.sections.projects)}</h2>
            {currentTranslation.projects.map((project, index) => (
              <div key={index} className="project">
                <div className="project-header">
                  {project.isApp && <span className="app-badge">{currentTranslation.appBadge}</span>}
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