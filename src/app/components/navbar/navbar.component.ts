import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav>
      <div class="container">
        <a href="#" class="logo">Arshdeep.</a>
        <ul class="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="mailto:infokind6@gmail.com" class="nav-cta">Let's Talk</a>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed; top: 0; left: 0; right: 0;
      z-index: 100;
      padding: 20px 0;
      border-bottom: 1px solid var(--border);
      backdrop-filter: blur(20px);
      background: rgba(8,8,8,0.7);
    }
    nav .container { display: flex; justify-content: space-between; align-items: center; }
    .logo {
      font-size: 15px; font-weight: 700;
      letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--accent); text-decoration: none;
    }
    .nav-links { display: flex; gap: 36px; list-style: none; }
    .nav-links a {
      font-family: var(--font-mono); font-size: 12px;
      color: var(--text-muted); text-decoration: none;
      letter-spacing: 0.08em; text-transform: uppercase;
      transition: color 0.2s;
    }
    .nav-links a:hover { color: var(--text); }
    .nav-cta {
      font-family: var(--font-mono); font-size: 12px;
      padding: 8px 20px; border: 1px solid var(--accent);
      color: var(--accent); text-decoration: none;
      letter-spacing: 0.08em; text-transform: uppercase;
      transition: background 0.2s, color 0.2s;
    }
    .nav-cta:hover { background: var(--accent); color: #080808; }
    @media (max-width: 768px) { .nav-links { display: none; } }
  `]
})
export class NavbarComponent {}
