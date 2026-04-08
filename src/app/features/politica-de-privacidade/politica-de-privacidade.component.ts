import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer-component';
import { NavMenuComponent } from '../../shared/components/nav-menu/nav-menu-component';
import { SocialComponent } from '../../shared/components/social-component/social-component';

@Component({
  selector: 'app-politica-de-privacidade-component',
  imports: [NavMenuComponent, FooterComponent, SocialComponent],
  templateUrl: './politica-de-privacidade.component.html',
  styleUrl: './politica-de-privacidade.component.scss',
})
export class PoliticaDePrivacidadeComponent {}
