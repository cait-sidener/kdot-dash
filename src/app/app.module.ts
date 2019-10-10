import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { SupportComponent } from './components/support/support.component';
import { StatusComponent } from './components/status/status.component';
import { ResourceComponent } from './components/resource/resource.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppStatusComponent } from './components/app-status/app-status.component';
import { AppConnectionsComponent } from './components/app-connections/app-connections.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatDialogModule, MatIconModule, MatExpansionModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ApplicationsComponent,
    SupportComponent,
    StatusComponent,
    ResourceComponent,
    AppStatusComponent,
    AppConnectionsComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatSelectModule
  ],
  entryComponents: [
    SupportComponent,
    DropdownComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
