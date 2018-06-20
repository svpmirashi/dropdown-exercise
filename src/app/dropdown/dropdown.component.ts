import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownItem } from '../dropdown-item';
import { DropdownService } from '../dropdown.service';

export const COUNTRY: string = "country";
export const STATE: string = "state";
export const CITY: string = "city";
export const PARENT_ID: number = -1;

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  /*public dropdowns: DropdownItem[] = [];

  public selectedDropdown: DropdownItem;
  
  @Input() isCountry: boolean;
  @Input() isState: boolean;
  @Input() category: string;*/
  public countries: DropdownItem[] = [];
  public states: DropdownItem[] = [];
  public cities: DropdownItem[] = [];
  @Output() selectedCountyEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectedStateEmitter: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(public dropdownService: DropdownService) {  }

  ngOnInit() {
    //console.log("In ngOnInit() for category = " + this.category);
    //this.getDropdown();
    this.setCountries();
  }

  ngOnDestroy(): void {
    //console.log("In ngOnDestroy() for category = " + this.category);
  }

  getDropdown() : void{
    /* 
     * if category is country then no need to check selectedDropdown
     * fill the country dropdown with values..
     * pass PARENT_ID (-1) as there is no parent to countries.
    */
    // if(this.category === COUNTRY) { 
    //     this.dropdownService.getDropdown(COUNTRY, PARENT_ID)
    //         .subscribe(dd => this.countries = dd);
    // }
    // else if((this.category === STATE || this.category === CITY) && this.selectedDropdown){
    //     console.log("Category is either state or city, selected dropdown value = " + this.selectedDropdown.value);
    //     this.dropdownService
    //         .getDropdown( this.selectedDropdown.category, 
    //                       this.selectedDropdown.parentId)
    //         .subscribe( dd => this.dropdowns = dd);
    // }
  }

  setCountries(): void{
    //this.countries.push()
    this.dropdownService.getDropdown(COUNTRY, -1)
        .subscribe(dropdownItems => this.countries = dropdownItems);
    console.log(this.countries.length);
  }

  setSelected(selectedElement): void{
    let category =selectedElement.options[selectedElement.selectedIndex].getAttribute('data-category');
    console.log("In setSelected(), selectedElement value = "+ selectedElement.value +", selectedCategory = " + 
    category);
    //console.log(selectedElement.options[selectedElement.selectedIndex].value);
    //console.log(selectedElement);
    //this.selectedDropdown = dd;
    switch(category){
      case COUNTRY:
          
          this.selectedCountyEmitter.emit(selectedElement.value);
          console.log("Emitting '"+selectedElement.value+"' to countrySelection() of parent");
          break;

      case STATE:
          
          this.selectedStateEmitter.emit(selectedElement.value);
          console.log("Emitting '"+selectedElement.value+"' to stateSelection() of parent");
          break;
    }
  }

}
