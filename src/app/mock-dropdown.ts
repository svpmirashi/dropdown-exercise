import { DropdownItem } from './dropdown-item';

//export const COUNTRIES : string[]

export const DROPDOWN : DropdownItem[] = [
{id:1, parentId: -1, value: "India", category: "country"},
{id:2, parentId: -1, value: "US", category: "country"},

{id:3, parentId: 1,  value: "Maharashtra", category: "state"},
{id:4, parentId: 1, value: "Karnataka", category: "state"},
{id:5, parentId: 1, value: "Goa", category: "state"},
{id:6, parentId: 2, value: "New York", category: "state"},
{id:7, parentId: 2, value: "California", category: "state"},

{id:8, parentId: 3, value: "Pune", category: "city"},
{id:9, parentId: 3, value: "Mumbai", category: "city"},
{id:10, parentId: 5, value: "Panji", category: "city"},
{id:11, parentId: 5, value: "Baga", category: "city"},
{id:12, parentId: 4, value: "Karnataka", category: "city"},
{id:13, parentId: 6, value: "New York", category: "city"},
{id:14, parentId: 7, value: "California", category: "city"},
{id:15, parentId: 3, value: "Nagpur", category: "city"}

];

