import { Component, OnInit } from '@angular/core';
import { DropdownItem } from './dropdown-item';
import { DropdownService } from './dropdown.service';

export const COUNTRY: string = "country";
export const STATE: string = "state";
export const CITY: string = "city";
export const NULL_PARENT_ID: number = -1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public dataService: DropdownService = new DropdownService();

  public countries:  DropdownItem[] = [];
  public states:  DropdownItem[] = [];
  public cities:  DropdownItem[] = [];
  isValid: boolean = false;

  ngOnInit(): void {
    this.dataService.getDropdown(COUNTRY, NULL_PARENT_ID)
        .subscribe( dd => this.countries = dd);
    //this.fillCombobox( this.countries[0]);
  }

  submit(): void{
    console.log('button clicked..');
  }

  fillCombobox(parentId: number, category: string, value: string): void{
    this.isValid =false;
    switch(category.toLowerCase()){
      case COUNTRY:
          this.dataService.getDropdown(STATE, +parentId).subscribe(dd => this.states = dd);
          this.cities=[];
          break;

      case STATE:
          this.dataService.getDropdown(CITY, +parentId).subscribe(dd => this.cities = dd);
          this.isValid =true;
          break;
      
      case CITY:
          this.isValid =true;
          break;
    }
    console.log(this.isValid);
  }

  onDataSelection(item: string){
    //console.log("In onDataSelection(), item =   "+item);
    let itemObj = item.split(",");
    
    let id = itemObj[0].split(":")[1];
    let value = itemObj[1].split(":")[1];
    let category = itemObj[2].split(":")[1];
    let parentId = itemObj[3].split(":")[1];

    this.fillCombobox(+id, category, value);
  }

}
