import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';
import { CustomButtonComponent } from '../../shared/components/custom-button/custom-button';
import { ModalComponent } from '../../shared/components/custom-modal/custom-modal';
import { FooterComponent } from '../../shared/components/footer/footer-component';
import { SocialComponent } from '../../shared/components/social-component/social-component';
import { GruposComponent } from '../grupos/grupos.component';

@Component({
  selector: 'app-home-component',
  imports: [
    GruposComponent,
    CustomButtonComponent,
    FooterComponent,
    ModalComponent,
    SocialComponent,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly sanitizer = inject(DomSanitizer);

  showModal: boolean = false;
  appTitle = environment.appTitle;
  isProduction = environment.production;
  readonly newsletterProfileUrl = 'https://substack.com/@fulldev';
  readonly newsletterSubscribeUrl =
    'https://substack.com/@fulldev?utm_campaign=profile&utm_medium=profile-page';
  readonly newsletterEmbedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://fulldev.substack.com/embed',
  );

  constructor() {
    if (environment.production) {
      console.warn('🏠 Home component em produção');
    } else {
      console.warn('🏠 Home component em desenvolvimento');
    }
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
