import { Component } from '@angular/core';


export interface Application {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
    selectedValue: string;

  applications: Application[] = [
    {value: 'bif-0', viewValue: 'BIF'},
    {value: 'broms-1', viewValue: 'BROMS'},
    {value: 'ciims-2', viewValue: 'CIIMS'},
    {value: 'dsc-3', viewValue: 'DSC'},
    {value: 'geologger-4', viewValue: 'Geologger'},
    {value: 'itassets-5', viewValue: 'IT Assets'},
    {value: 'qville-6', viewValue: 'Q Ville'},
    {value: 'raid-7', viewValue: 'RAID'},
    {value: 'raidmenu-8', viewValue: 'RAID Menu'},
    {value: 'roas-9', viewValue: 'ROAS'},
    {value: 'roasmenu-10', viewValue: 'ROAS Menu'},
    {value: 'websalvage-11', viewValue: 'WebSalvage'},
  ];

}
