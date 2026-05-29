import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { MarqueeComponent } from './components/marquee/marquee.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    MarqueeComponent,
    WorkComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialsComponent,
    CtaComponent,
    FooterComponent
  ],
  template: `
    <div class="cursor" [style.left.px]="cursorX" [style.top.px]="cursorY"></div>
    <div class="cursor-ring" [style.left.px]="ringX" [style.top.px]="ringY"></div>

    <app-navbar />
    <app-hero />
    <app-marquee />
    <app-work />
    <app-about />
    <app-services />
    <app-cta />
    <app-footer />
  `,
  styles: [`
    .cursor {
      position: fixed;
      width: 10px; height: 10px;
      background: var(--accent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: width 0.2s, height 0.2s;
    }
    .cursor-ring {
      position: fixed;
      width: 36px; height: 36px;
      border: 1px solid rgba(200,240,100,0.4);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
    }
  `]
})
export class AppComponent implements AfterViewInit {
  cursorX = 0; cursorY = 0;
  ringX = 0;   ringY = 0;
  private mx = 0; private my = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    document.addEventListener('mousemove', (e: MouseEvent) => {
      this.mx = e.clientX; this.my = e.clientY;
      this.cursorX = e.clientX; this.cursorY = e.clientY;
    });

    const lerp = () => {
      this.ringX += (this.mx - this.ringX) * 0.12;
      this.ringY += (this.my - this.ringY) * 0.12;
      requestAnimationFrame(lerp);
    };
    lerp();

    // Intersection observer for .fade-up
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
  }
}
