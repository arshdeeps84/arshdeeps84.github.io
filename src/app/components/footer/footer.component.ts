import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="container">
        <p class="footer-copy">© 2025 - {{ currentYear }} Arshdeep Singh — All Rights Reserved</p>
        <div class="social-links">
          <a  *ngFor="let s of socials">{{ s }}</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer { border-top: 1px solid var(--border); padding: 32px 0; }
    footer .container { display: flex; justify-content: space-between; align-items: center; }
    .footer-copy { font-family: var(--font-mono); font-size: 11px; color: var(--text-dim); letter-spacing: 0.1em; }
    .social-links { display: flex; gap: 24px; }
    .social-links a {
      font-family: var(--font-mono); font-size: 11px;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--text-muted); text-decoration: none; transition: color 0.2s;
    }
    .social-links a:hover { color: var(--accent); }
  `]
})
export class FooterComponent {
  socials = ['GitHub', 'LinkedIn', 'Instagram'];

  currentYear: number = new Date().getFullYear();

}
