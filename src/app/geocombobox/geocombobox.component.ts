import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownItem } from '../dropdown-item';
 

@Component({
  selector: 'app-geocombobox',
  templateUrl: './geocombobox.component.html',
  styleUrls: ['./geocombobox.component.css']
})
export class GeocomboboxComponent implements OnInit {
  @Input() data: DropdownItem[] = [];
  @Output() dataSelection: EventEmitter<string> = new EventEmitter<string>();
  public selectedItem: string = null;

  constructor() { }

  ngOnInit() {
  }

  onDropdownSelection(val: string){
    this.selectedItem = val;
    this.dataSelection.emit(val);
  }
}
