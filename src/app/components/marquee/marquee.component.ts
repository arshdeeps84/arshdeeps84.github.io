import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="marquee-strip">
      <div class="marquee-inner">
        <span class="marquee-item" *ngFor="let item of doubledItems">
          <span class="marquee-dot"></span>{{ item }}
        </span>
      </div>
    </div>
  `,
  styles: [`
    .marquee-strip {
      border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
      padding: 14px 0; overflow: hidden; background: var(--bg2);
    }
    .marquee-inner {
      display: flex; animation: marquee 22s linear infinite; width: max-content;
    }
    .marquee-item {
      display: flex; align-items: center; gap: 16px; padding: 0 32px;
      font-family: var(--font-mono); font-size: 11px;
      letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--text-muted); white-space: nowrap;
    }
    .marquee-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
    @keyframes marquee { to { transform: translateX(-50%); } }
  `]
})
export class MarqueeComponent {
 items = [
  'HTML5',
  'CSS / Bootstrap',
  'Angular 14/17',
  'TypeScript',
  '.NET Core',
  'ASP.NET Core Web API',
  'ASP.NET Web API',
  'C#',
  'ADO.NET',
  'MS SQL Server',
  'MySQL',
  'REST API',
  'Git / GitHub'
];
  get doubledItems() { return [...this.items, ...this.items]; }
}
