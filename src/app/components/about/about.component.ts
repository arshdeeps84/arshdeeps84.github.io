import { Component, AfterViewInit, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-img-wrap fade-up">
            <div class="about-img-box">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style="opacity:0.15">
                <circle cx="60" cy="45" r="28" stroke="currentColor" stroke-width="2"/>
                <path d="M10 110C10 85 32 68 60 68C88 68 110 85 110 110" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="about-badge">Open to Work ✦</div>
          </div>
          <div class="about-text fade-up">
            <div class="section-label">About Me</div>
            <h2 class="about-name">Arshdeep Singh</h2>
      <p class="about-bio">
  I'm a Full Stack Developer based in India with 3.5+ years of experience
  in designing and developing scalable web applications. I specialize in
  Angular, .NET Core, Web APIs, MS SQL, and MySQL, building responsive
  user interfaces and secure backend systems.
  <br><br>
  Passionate about learning new technologies and solving real-world problems,
  I focus on delivering high-quality, user-friendly, and efficient solutions.
</p>
            <div class="skills-list" #skillsRef>
              <div class="skill-row" *ngFor="let s of skills">
                <span class="skill-name">{{ s.name }}</span>
                <div class="skill-bar-wrap">
                  <div class="skill-bar" [style.width]="animateBars ? s.pct + '%' : '0%'"></div>
                </div>
                <span class="skill-pct">{{ s.pct }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
    .about-img-wrap { position: relative; }
    .about-img-box {
      width: 100%; aspect-ratio: 3/4;
      background: var(--bg3); border: 1px solid var(--border);
      display: flex; align-items: center; justify-content: center;
      position: relative; overflow: hidden;
    }
    .about-img-box::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(to top, var(--bg) 0%, transparent 40%);
    }
    .about-badge {
      position: absolute; bottom: 28px; right: -20px;
      background: var(--accent); color: #080808;
      padding: 14px 20px; font-size: 13px; font-weight: 700;
      letter-spacing: -0.02em; z-index: 2;
    }
    .about-name {
      font-size: clamp(28px, 4vw, 44px); font-weight: 800;
      letter-spacing: -0.03em; margin-bottom: 24px; line-height: 1;
    }
    .about-bio {
      font-family: var(--font-mono); font-size: 13px;
      line-height: 2; color: var(--text-muted); margin-bottom: 40px;
    }
    .skill-row {
      display: flex; justify-content: space-between; align-items: center;
      padding: 14px 0; border-bottom: 1px solid var(--border);
    }
    .skill-name { font-size: 14px; font-weight: 600; }
    .skill-bar-wrap { flex: 1; margin: 0 24px; height: 2px; background: var(--bg3); }
    .skill-bar { height: 100%; background: var(--accent); transition: width 1.5s cubic-bezier(0.23, 1, 0.32, 1); }
    .skill-pct { font-family: var(--font-mono); font-size: 11px; color: var(--text-muted); }
    @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; } }
  `]
})
export class AboutComponent implements AfterViewInit {
  animateBars = false;

skills = [
  { name: 'Angular', pct: 95 },
  { name: 'TypeScript', pct: 90 },
  { name: '.NET Core / Web API', pct: 95 },
  { name: 'ASP.NET / C#', pct: 90 },
  { name: 'MS SQL Server', pct: 92 },
  { name: 'MySQL', pct: 92 },
  { name: 'HTML / CSS / Bootstrap', pct: 92 },
  { name: 'Git / GitHub', pct: 91 },
  { name: 'REST API Integration', pct: 95 }
];

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { this.animateBars = true; obs.disconnect(); }
      });
    }, { threshold: 0.3 });
    const ref = this.el.nativeElement.querySelector('.skills-list');
    if (ref) obs.observe(ref);
  }
}
