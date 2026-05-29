import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials-section">
      <div class="container">
        <div class="section-label">Client Voices</div>
        <h2 class="section-title fade-up">Kind Words</h2>
        <div class="testimonials-grid">
          <div class="testi-card fade-up" *ngFor="let t of testimonials">
            <div class="testi-quote">"</div>
            <p class="testi-text">{{ t.text }}</p>
            <div class="testi-author">
              <div class="testi-avatar">{{ t.initials }}</div>
              <div>
                <div class="testi-name">{{ t.name }}</div>
                <div class="testi-role">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-section { background: var(--bg2); }
    .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
    .testi-card { background: var(--bg); padding: 36px 28px; }
    .testi-quote { font-size: 48px; line-height: 1; color: var(--accent); margin-bottom: 20px; font-weight: 800; }
    .testi-text { font-family: var(--font-mono); font-size: 13px; line-height: 1.9; color: var(--text-muted); margin-bottom: 28px; }
    .testi-author { display: flex; align-items: center; gap: 14px; }
    .testi-avatar {
      width: 40px; height: 40px; border-radius: 50%;
      background: var(--bg3); border: 1px solid var(--border);
      display: flex; align-items: center; justify-content: center;
      font-size: 14px; font-weight: 700; color: var(--accent);
    }
    .testi-name { font-size: 13px; font-weight: 700; }
    .testi-role { font-family: var(--font-mono); font-size: 11px; color: var(--text-muted); }
    @media (max-width: 768px) { .testimonials-grid { grid-template-columns: 1fr; } }
  `]
})
export class TestimonialsComponent {
  testimonials = [
    { initials: 'SR', name: 'Sofia Reyes',   role: 'CPO, Luminary Labs', text: 'Alex turned our rough concept into an award-worthy interface in record time. The attention to micro-interactions was something else.' },
    { initials: 'JM', name: 'James Moretti', role: 'CTO, Vantage Cloud', text: 'The best frontend developer I have worked with. Delivered a full design system under budget, and the Storybook docs were immaculate.' },
    { initials: 'NP', name: 'Nina Patel',    role: 'Founder, GreenRoot',  text: 'Working with Alex felt like a superpower. They understood our brand immediately and shipped a site that converts like crazy.' },
  ];
}
