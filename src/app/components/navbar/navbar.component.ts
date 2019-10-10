import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SupportComponent } from '../support/support.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(SupportComponent);
  }

}
