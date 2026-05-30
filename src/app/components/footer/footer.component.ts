import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="container">
        <p class="footer-copy">©{{ currentYear }} Arshdeep Singh — All Rights Reserved</p>
        <div class="social-links">
          <a  *ngFor="let s of socials">{{ s }}</a>
        </div>
      </div>
    </footer>
  `,
styles: [`
  footer {
    border-top: 1px solid var(--border);
    padding: 32px 0;
  }

  footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .footer-copy {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-dim);
    letter-spacing: 0.1em;
  }

  .social-links {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
  }

  .social-links a {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.2s ease;
    cursor: pointer;
  }

  .social-links a:hover {
    color: var(--accent);
  }

  /* Tablet */
  @media (max-width: 768px) {
    footer {
      padding: 28px 0;
    }

    footer .container {
      flex-direction: column;
      text-align: center;
    }

    .social-links {
      justify-content: center;
      gap: 18px;
    }

    .footer-copy {
      font-size: 10px;
    }
  }

  /* Mobile */
  @media (max-width: 576px) {
    footer {
      padding: 24px 0;
    }

    .footer-copy {
      font-size: 9px;
      line-height: 1.8;
      text-align: center;
    }

    .social-links {
      gap: 14px;
    }

    .social-links a {
      font-size: 10px;
    }
  }
`]
})
export class FooterComponent {
  socials = ['GitHub', 'LinkedIn', 'Instagram'];

  currentYear: number = new Date().getFullYear();

}
