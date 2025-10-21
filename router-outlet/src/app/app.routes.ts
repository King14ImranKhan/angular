import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  // Named outlets
  { path: 'sidebar', component: SidebarComponent, outlet: 'sidebar' },
  { path: 'footer', component: FooterComponent, outlet: 'footer' },

  { path: '**', redirectTo: '' }
];
