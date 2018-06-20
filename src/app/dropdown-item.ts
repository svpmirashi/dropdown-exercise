export class DropdownItem {
    id : number;
    value :  string;
    category : string; // country, state, city
    parentId : number;
    //constructor(public data: string, public category: string){}

    // public toString(): string{
    //     return this.id + ": " + this.value + " - " + this.category + " : " + this.parentId;
    // }
    // public dropdownItemToString(): string{
    //     //console.log(item);
    //     return 'id:' + this.id 
    //         + ',value:' + this.value 
    //         + ',category:' + this.category 
    //         + ',parentId:' + this.parentId;
    //   }

}
