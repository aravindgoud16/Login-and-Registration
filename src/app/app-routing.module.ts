import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { from } from 'rxjs';
import { CactivateGuard } from './cactivate.guard';
import { FinalComponent } from './final/final.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  // Shell.childRoutes([{ path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) }]),
  // Fallback when no prior route is matched
  // { path: '**', redirectTo: 'tabs/home', pathMatch: 'full' },
  // { path: '**', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'survey', component: SurveyComponent, canActivate: [CactivateGuard] },
  { path: 'final', component: FinalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
