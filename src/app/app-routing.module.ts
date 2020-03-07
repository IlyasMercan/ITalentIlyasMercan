import {NgModule} from '@angular/core';
import {Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {XFactorComponent} from './components/x-factor/x-factor.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'x-factor',
    component: XFactorComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'redirectToLinkedIn',
    component: HomeComponent,
    resolve: {
      url: 'externalUrlRedirectResolver'
    },
    data: {
      externalUrl: 'http://www.linkedin.com/in/ilyas-mercan'
    }
  },
  {
    path: '**',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot) => {
        window.location.href = (route.data as any).externalUrl;
      }
    }
  ],
})
export class AppRoutingModule { }
