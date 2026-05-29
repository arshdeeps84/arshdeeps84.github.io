import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services">
      <div class="container">
        <div class="section-label">What I Do</div>
        <h2 class="section-title fade-up">Services</h2>
        <div class="services-grid">
          <div class="service-card fade-up" *ngFor="let s of services; let i = index">
            <div class="service-num">{{ pad(i+1) }}</div>
            <div class="service-icon" [innerHTML]="s.icon"></div>
            <div class="service-name">{{ s.name }}</div>
            <p class="service-desc">{{ s.desc }}</p>
            <div class="service-arrow">
              <svg fill="none" stroke-width="1.5" viewBox="0 0 24 24" width="16" height="16" stroke="var(--accent)">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
    .service-card {
      background: var(--bg2); padding: 40px 32px;
      border: 1px solid transparent; position: relative;
      transition: border-color 0.3s, background 0.3s;
    }
    .service-card:hover { background: var(--bg3); border-color: var(--border-hover); }
    .service-num { font-family: var(--font-mono); font-size: 11px; color: var(--text-dim); letter-spacing: 0.2em; margin-bottom: 28px; }
    .service-icon {
      width: 48px; height: 48px; border: 1px solid var(--border);
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 24px; transition: border-color 0.3s;
    }
    .service-card:hover .service-icon { border-color: var(--accent); }
    .service-name { font-size: 20px; font-weight: 700; margin-bottom: 14px; }
    .service-desc { font-family: var(--font-mono); font-size: 12px; line-height: 2; color: var(--text-muted); }
    .service-arrow {
      position: absolute; bottom: 28px; right: 28px;
      width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;
      opacity: 0; transform: translateX(-8px); transition: opacity 0.3s, transform 0.3s;
    }
    .service-card:hover .service-arrow { opacity: 1; transform: none; }
    @media (max-width: 768px) { .services-grid { grid-template-columns: 1fr; } }
  `]
})
export class ServicesComponent {
services = [
  {
    name: 'Frontend Development',
    desc: 'Building responsive, high-performance, and user-friendly web applications using Angular, TypeScript, HTML, CSS, and Bootstrap.',
    icon: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
           </svg>`
  },
  {
    name: 'Backend Development',
    desc: 'Developing secure and scalable backend systems using .NET Core, ASP.NET Core Web API, and RESTful services.',
    icon: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15"/>
           </svg>`
  },
  {
    name: 'Database Management',
    desc: 'Designing and managing relational databases with MS SQL Server and MySQL, including query optimization and stored procedures.',
    icon: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5C3 5.843 7.03 4.5 12 4.5s9 1.343 9 3v9c0 1.657-4.03 3-9 3s-9-1.343-9-3v-9Z"/>
             <path stroke-linecap="round" stroke-linejoin="round" d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3"/>
           </svg>`
  }
];

  pad(n: number): string {
    return n.toString().padStart(2, '0');
  }
}
