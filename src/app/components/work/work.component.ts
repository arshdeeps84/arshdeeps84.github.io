import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  num: string;
  name: string;
  label: string;
  tags: string[];
  bgClass: string;
  textClass: string;
  wide?: boolean;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="work">
  <div class="container">
  <div class="section-label">Experience</div>
  <h2 class="section-title fade-up">Professional Experience</h2>
</div>
      <div class="work-grid">
        <div
          class="work-card fade-up"
          [class.wide]="p.wide"
          *ngFor="let p of projects"
        >
          <div class="work-card-img" [ngClass]="p.bgClass">
            <span [ngClass]="p.textClass">{{ p.label }}</span>
          </div>
          <div class="work-card-overlay">
            <div class="work-card-num">{{ p.num }}</div>
            <div class="work-card-name">{{ p.name }}</div>
            <div class="work-card-tags">
              <span class="tag" *ngFor="let t of p.tags">{{ t }}</span>
            </div>
          </div>
          <div class="work-arrow">
            <svg fill="none" stroke-width="1.5" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .work-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
    .work-card { position: relative; background: var(--bg2); overflow: hidden; aspect-ratio: 4/3; cursor: none; }
    .work-card.wide { grid-column: span 2; aspect-ratio: 16/7; }
    .work-card-img {
      width: 100%; height: 100%; display: flex;
      align-items: center; justify-content: center;
      transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }
    .work-card:hover .work-card-img { transform: scale(1.04); }
    .work-card-img span { font-size: 80px; font-weight: 800; letter-spacing: -0.04em; font-family: var(--font-display); }

    .wc1 { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); }
    .wc2 { background: linear-gradient(135deg, #1a1a1a 0%, #2d1b0e 100%); }
    .wc3 { background: linear-gradient(135deg, #0d1f0d 0%, #1a2e1a 100%); }
    .wc4 { background: linear-gradient(135deg, #1a0d1f 0%, #2e1a28 100%); }
    .t1 { color: #4a6cf7; }
    .t2 { color: #f06420; }
    .t3 { color: var(--accent); }
    .t4 { color: #f064a0; }

    .work-card-overlay {
      position: absolute; inset: 0;
      background: rgba(8,8,8,0.88);
      display: flex; flex-direction: column; justify-content: flex-end;
      padding: 32px; opacity: 0; transition: opacity 0.4s;
    }
    .work-card:hover .work-card-overlay { opacity: 1; }
    .work-card-num { font-family: var(--font-mono); font-size: 11px; color: var(--accent); letter-spacing: 0.15em; margin-bottom: 10px; }
    .work-card-name { font-size: 24px; font-weight: 700; margin-bottom: 8px; }
    .work-card-tags { display: flex; gap: 8px; flex-wrap: wrap; }

    .work-arrow {
      position: absolute; top: 24px; right: 24px;
      width: 40px; height: 40px; border: 1px solid var(--border-hover);
      display: flex; align-items: center; justify-content: center;
      opacity: 0; transform: translate(-8px, 8px);
      transition: opacity 0.3s, transform 0.3s;
    }
    .work-card:hover .work-arrow { opacity: 1; transform: none; }

    @media (max-width: 768px) {
      .work-grid { grid-template-columns: 1fr; }
      .work-card.wide { grid-column: span 1; aspect-ratio: 4/3; }
    }
  `]
})
export class WorkComponent {
  projects: Project[] = [
    {
      num: '01 / 06',
      name: 'HR Management System',
      label: 'Genie HR',
      tags: ['Angular', '.NET Core', 'REST API' , 'MS SQL'],
      bgClass: 'wc1',
      textClass: 't1',
      wide: true
    },
    {
      num: '02 / 06',
      name: 'Customer Relationship Management',
      label: 'CRM',
      tags: ['Angular', 'ASP.NET WEB API', 'MySQL'],
      bgClass: 'wc2',
      textClass: 't2'
    },
    {
      num: '03 / 06',
      name: 'Day Care Center Management System',
      label: 'Bloomvie',
      tags: ['Angular', '.NET Core', 'REST API' , 'MS SQL'],
      bgClass: 'wc3',
      textClass: 't3'
    },
    {
      num: '04 / 06',
      name: 'School Management System',
      label: 'Little Angels',
      tags: ['Angular', '.NET Core', 'REST API' , 'MS SQL'],
      bgClass: 'wc4',
      textClass: 't4',
    },
    {
      num: '05 / 06',
      name: 'HR & Employee Management Portal',
      label: 'Of Stairs',
      tags: ['Angular', '.NET Core', 'REST API' , 'MS SQL'],
      bgClass: 'wc2',
      textClass: 't2'
    },
    {
      num: '06 / 06',
      name: 'Fruit Product Management System',
      label: 'Frubow',
      tags: ['Angular', '.NET Core', 'REST API' , 'MS SQL'],
      bgClass: 'wc1',
      textClass: 't1',
      wide: true
    }
  ];
}
