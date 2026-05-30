import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="hero-grid-bg"></div>
      <div class="hero-glow"></div>

      <div class="container">
        <div class="hero-tag fade-up">
          Full Stack Developer · {{ currentYear }}
        </div>

<h1>
  <span class="line fade-up">
    Building <span class="outline">Reliable</span>
  </span>
  <span class="line fade-up">
    <span class="accent-word">Web Solutions</span>
  </span>
  <span class="line fade-up">
    For Growing Businesses
  </span>
</h1>

        <div class="hero-bottom fade-up">
          <p class="hero-desc">
            Full Stack Developer with 3.5+ years of experience in building
            scalable, responsive, and high-performance web applications
            using Angular, .NET Core, Web APIs, MS SQL, and MySQL.
          </p>

          <div class="hero-stats">
            <div class="stat-item" *ngFor="let s of stats">
              <div class="stat-num">{{ s.num }}</div>
              <div class="stat-label">{{ s.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="scroll-cue">
        <div class="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-bottom: 80px;
      padding-top: 120px;
      position: relative;
      overflow: hidden;
    }

    .hero-grid-bg {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    .hero-glow {
      position: absolute;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      background: radial-gradient(
        circle,
        rgba(200,240,100,0.06) 0%,
        transparent 70%
      );
      top: 5%;
      right: -100px;
      pointer-events: none;
    }

    .hero-tag {
      font-family: var(--font-mono);
      font-size: 11px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .hero-tag::before {
      content: '';
      width: 32px;
      height: 1px;
      background: var(--accent);
      display: block;
    }

    h1 {
      font-size: clamp(56px, 10vw, 120px);
      font-weight: 800;
      line-height: 0.92;
      letter-spacing: -0.03em;
      margin-bottom: 40px;
    }

    .line {
      display: block;
      overflow: hidden;
    }

    .outline {
      -webkit-text-stroke: 1px rgba(240,237,232,0.25);
      color: transparent;
    }

    .accent-word {
      color: var(--accent);
    }

    .hero-bottom {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-top: 60px;
      gap: 40px;
    }

    .hero-desc {
      max-width: 450px;
      font-family: var(--font-mono);
      font-size: 13px;
      line-height: 1.8;
      color: var(--text-muted);
    }

    .hero-stats {
      display: flex;
      gap: 48px;
    }

    .stat-item {
      text-align: right;
    }

    .stat-num {
      font-size: 40px;
      font-weight: 800;
      line-height: 1;
      color: var(--text);
    }

    .stat-label {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--text-muted);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-top: 4px;
    }

    .scroll-cue {
      position: absolute;
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .scroll-cue span {
      font-family: var(--font-mono);
      font-size: 10px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--text-dim);
      writing-mode: vertical-rl;
      transform: rotate(180deg);
    }

    .scroll-line {
      width: 1px;
      height: 60px;
      background: linear-gradient(to bottom, var(--accent), transparent);
      animation: scrollLine 2s ease-in-out infinite;
    }

    @keyframes scrollLine {
      0%, 100% {
        transform: scaleY(1);
        opacity: 1;
      }

      50% {
        transform: scaleY(0.4);
        opacity: 0.4;
      }
    }

    @media (max-width: 768px) {
      .hero-bottom {
        flex-direction: column;
        align-items: flex-start;
      }

      .hero-stats {
        justify-content: flex-start;
      }
    }
  `]
})
export class HeroComponent {

  currentYear: number = new Date().getFullYear();

  stats = [
    // { num: '15+', label: 'Projects Done' },
    { num: '3.5+', label: 'Years Experience' },
    // { num: '100%', label: 'Client Satisfaction' }
  ];
}