import { Injectable } from '@angular/core';
import { DROPDOWN } from './mock-dropdown'
import { DropdownItem } from './dropdown-item'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor() { }

  public getDropdown(category: string, parentId: number) : Observable<DropdownItem[]> {
    return of(DROPDOWN.filter(x => x.category == category && x.parentId === parentId));
  }

}
