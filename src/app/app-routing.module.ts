import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { SupportComponent } from './components/support/support.component';
import { StatusComponent } from './components/status/status.component';
import { ResourceComponent } from './components/resource/resource.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'status', component: StatusComponent },
  { path: 'resource', component: ResourceComponent },
  { path: 'support', component: SupportComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
