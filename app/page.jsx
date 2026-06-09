'use client';

import { useEffect, useState } from 'react';

const projects = [
  {
    id: 'kenmofm',
    title: 'Kenmo FM',
    short: 'AI Radio',
    meta: 'Python / Gemini / Voice',
    accent: 'glacier',
    tags: ['Python', 'Gemini API', 'Voicevox', 'GCP TTS', 'Icecast'],
    links: [
      ['Official', 'https://kenmofm.org'],
      ['YouTube', 'https://www.youtube.com/@kenmofm2'],
      ['Apple', 'https://podcasts.apple.com/jp/podcast/kenmofm-podcast/id1869841487'],
      ['Spotify', 'https://open.spotify.com/show/6GPejhAfmMvC5DOkWc6MN5?si=c3e08f183a954b03'],
    ],
    details: ['24時間稼働の自動ラジオ。', 'スレッド、ニュース、音声合成を番組化。'],
    detailsEn: ['A 24/7 automated AI radio system.', 'It turns threads, news, and synthesized voices into continuous programming.'],
  },
  {
    id: 'log-cockpit',
    title: 'Server Log Cockpit',
    short: 'Log UI',
    meta: 'Flask / Chart.js',
    accent: 'rain',
    tags: ['Python', 'Flask', 'Chart.js', 'Nginx'],
    links: [['GitHub', 'https://github.com/caster2731/Server-log-cockpit']],
    details: ['Nginx log を読むダッシュボード。', 'PV、UU、エラー率、リクエストを可視化。'],
    detailsEn: ['A glassy dashboard for reading Nginx access logs.', 'It visualizes page views, unique users, error rates, and request trends.'],
  },
  {
    id: 'gravity',
    title: 'Gravity Storage',
    short: '3D Explorer',
    meta: 'React / Three.js',
    accent: 'moss',
    tags: ['React', 'Three.js', 'FastAPI', 'Vite'],
    links: [['GitHub', 'https://github.com/caster2731/Gravity-Storage']],
    details: ['フォルダを3D空間で探索。', 'サイズや種類を視覚的に変換。'],
    detailsEn: ['A 3D explorer for navigating folders spatially.', 'File size and type are translated into visual form.'],
  },
  {
    id: 'scanner',
    title: 'IP Scanner v2',
    short: 'Async Scanner',
    meta: 'FastAPI / aiohttp',
    accent: 'mist',
    tags: ['Python', 'FastAPI', 'aiohttp', 'WebSocket', 'Playwright'],
    links: [],
    details: ['非同期のWebサービス探索。', '証明書、ヘッダー、スクリーンショットを収集。'],
    detailsEn: ['An async scanner for discovering web services.', 'It collects certificates, headers, titles, and screenshots.'],
  },
  {
    id: 'timer',
    title: '石油備蓄枯渇タイマー',
    short: 'Countdown',
    meta: 'Next.js / Flask',
    accent: 'tide',
    tags: ['Next.js', 'Flask', 'Python', 'RSS', 'FRED API'],
    links: [['Live', 'https://kenmofm.org/timer/']],
    details: ['備蓄残日数のカウントダウン。', 'シナリオ別に状態を表示。'],
    detailsEn: ['A countdown dashboard for oil reserve scenarios.', 'It compares remaining time across multiple assumptions.'],
  },
];

const heroLetters = ['C', 'A', 'S', 'T', 'E', 'R'];

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveProject(null);
    };

    document.body.classList.add('is-modal-open');
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.classList.remove('is-modal-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeProject]);

  return (
    <>
      <div className="site-bg" aria-hidden="true">
        <span className="photo-layer" />
        <span className="glass-haze haze-a" />
        <span className="glass-haze haze-b" />
        <span className="waterline waterline-a" />
        <span className="waterline waterline-b" />
      </div>

      <header className="nav">
        <a className="brand" href="#" aria-label="Caster home">
          Caster
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="https://github.com/caster2731" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio / 2026</p>
            <h1 className="wordmark" id="hero-title" aria-label="Caster">
              {heroLetters.map((letter, index) => (
                <span key={letter} style={{ '--letter-delay': `${index * 70}ms` }}>
                  {letter}
                </span>
              ))}
            </h1>
            <p className="hero-line">AI radio. Automation. Dashboards.</p>
          </div>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Projects</h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <button
                className={`project-row accent-${project.accent}`}
                key={project.id}
                type="button"
                onClick={() => setActiveProject(project)}
                style={{ '--row-delay': `${index * 80}ms` }}
              >
                <span className="row-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="row-main">
                  <span className="row-title">{project.title}</span>
                  <span className="row-short">{project.short}</span>
                </span>
                <span className="row-meta">{project.meta}</span>
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <span>caster2731.github.io</span>
        <span>2026</span>
      </footer>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={onClose}>
      <div className={`modal-panel accent-${project.accent}`} onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close project details">
          Close
        </button>
        <p className="eyebrow">{project.short}</p>
        <h2 id="modal-title">{project.title}</h2>
        <div className="detail-copy">
          <div className="detail-block">
            <span>JP</span>
            {project.details.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="detail-block">
            <span>EN</span>
            {project.detailsEn.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {project.links.length > 0 && (
          <div className="link-row">
            {project.links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title}: ${label}`}
                title={label}
              >
                <LinkIcon label={label} />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function LinkIcon({ label }) {
  const icons = {
    Official: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16" />
        <path d="M12 4c2 2.2 3 4.8 3 8s-1 5.8-3 8" />
        <path d="M12 4c-2 2.2-3 4.8-3 8s1 5.8 3 8" />
      </>
    ),
    YouTube: (
      <>
        <path d="M21 9.1a3 3 0 0 0-2.1-2.1C17 6.5 12 6.5 12 6.5s-5 0-6.9.5A3 3 0 0 0 3 9.1 31 31 0 0 0 2.6 12 31 31 0 0 0 3 14.9a3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-2.9 31 31 0 0 0-.4-2.9Z" />
        <path d="m10.4 9.8 4.2 2.2-4.2 2.2V9.8Z" />
      </>
    ),
    Apple: (
      <>
        <path d="M16.5 13.3c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.7-1.2-.1-2.4.7-3 .7s-1.6-.7-2.6-.7c-1.3 0-2.6.8-3.3 2-1.4 2.5-.4 6.2 1 8.2.7 1 1.5 2.1 2.5 2.1s1.4-.7 2.6-.7 1.6.7 2.6.7 1.8-1 2.5-2a8.7 8.7 0 0 0 1.1-2.3 3.7 3.7 0 0 1-2.2-3.2Z" />
        <path d="M14.6 6.8c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.6.7-1 1.7-.9 2.6 1 0 1.9-.5 2.5-1.2Z" />
      </>
    ),
    Spotify: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M8.1 10.1c2.7-.8 6-.5 8.1.8" />
        <path d="M8.7 13c2.1-.6 4.7-.4 6.4.6" />
        <path d="M9.3 15.6c1.5-.4 3.4-.3 4.7.5" />
      </>
    ),
    GitHub: (
      <>
        <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.7-.2.7-.5v-1.7c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.3-.3-4.7-1.2-4.7-5.1 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.4.2 2.5.1 2.8.7.7 1.1 1.7 1.1 2.8 0 4-2.4 4.8-4.7 5.1.4.3.8 1 .8 2v2.3c0 .3.2.6.8.5A9.2 9.2 0 0 0 12 2.8Z" />
      </>
    ),
    Live: (
      <>
        <path d="M7 4.5h10a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 17V7A2.5 2.5 0 0 1 7 4.5Z" />
        <path d="m10.5 8.8 5.1 3.2-5.1 3.2V8.8Z" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {icons[label] ?? icons.Official}
    </svg>
  );
}
