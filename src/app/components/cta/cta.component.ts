import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  standalone: true,
  template: `
    <section class="cta-section" id="contact">
      <div class="container">
        <h2 class="fade-up">
          Let's Build<br>Something<br>
          <span class="accent">Remarkable.</span>
        </h2>
     
        <a href="mailto:infokind6@gmail.com" class="cta-btn fade-up">
          Get In Touch
          <svg fill="none" stroke-width="1.5" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      </div>
    </section>
  `,
  styles: [`
    .cta-section {
      text-align: center; padding: 160px 0; position: relative;
    }
    .cta-section::before {
      content: 'HIRE ME'; position: absolute;
      font-size: clamp(80px, 16vw, 200px); font-weight: 800;
      letter-spacing: -0.05em; color: transparent;
      -webkit-text-stroke: 1px rgba(255,255,255,0.04);
      top: 50%; left: 50%; transform: translate(-50%, -50%);
      white-space: nowrap; pointer-events: none; z-index: 0;
    }
    .container { position: relative; z-index: 1; }
    h2 {
      font-size: clamp(40px, 7vw, 88px); font-weight: 800;
      letter-spacing: -0.04em; line-height: 0.95; margin-bottom: 32px;
    }
    .accent { color: var(--accent); }
    p { font-family: var(--font-mono); font-size: 13px; color: var(--text-muted); margin-bottom: 48px; }
    .cta-btn {
      display: inline-flex; align-items: center; gap: 16px;
      background: var(--accent); color: #080808;
      padding: 18px 40px; font-size: 14px; font-weight: 700;
      letter-spacing: 0.1em; text-transform: uppercase;
      text-decoration: none; transition: transform 0.2s, box-shadow 0.2s;
    }
    .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 20px 40px rgba(200,240,100,0.2); }
    .cta-btn svg { transition: transform 0.2s; stroke: #080808; }
    .cta-btn:hover svg { transform: translateX(4px); }
  `]
})
export class CtaComponent {}
