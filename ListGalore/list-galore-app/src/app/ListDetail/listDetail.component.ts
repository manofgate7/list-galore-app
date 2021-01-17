import { Component } from "@angular/core";
import {iList} from '../Shared/iList';

@Component({
	selector: 'list-detail',
	templateUrl: './listDetail.component.html',
	styleUrls: ['./listDetail.component.css']
})
export class ListDetailComponent {
		currentList: iList = {
			ListName : "Grocery",
			ListType : "words",
			ListColor: "red",
			ListItems: ["ham", "mayo", "dog food"]
		} as iList;
		
}