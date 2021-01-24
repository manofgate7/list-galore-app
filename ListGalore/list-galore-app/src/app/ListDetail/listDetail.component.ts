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
		
		showAddFeature:boolean = false;

		newItem:string = "";
		isRemovingItems: boolean = false;
		isEditingItems:boolean = false;
		itemSelected:string  = "";
		editedItem: string ="";
		
		AddToList(): void {
			this.showAddFeature = !this.showAddFeature;
		}

		RemoveFromList(): void {
			this.isRemovingItems = !this.isRemovingItems;
		}
		EditFromList(): void {
			this.isEditingItems = !this.isEditingItems;
		}

		SaveToList(): void {
			this.currentList.ListItems.push(this.newItem);
			this.newItem = "";
		}
		Remove(item: string): void{
			var index = this.currentList.ListItems.indexOf(item, 0);
			if (index > -1) {
				this.currentList.ListItems.splice(index, 1);
			}
		}

		EditItem(item:string) {
			this.editedItem = item;
			this.itemSelected = item;
		}

		SaveEditItem(): void {
			var index = this.currentList.ListItems.indexOf(this.itemSelected, 0);
			if (index > -1) {
				this.currentList.ListItems[index] = this.editedItem;
			}
			
		}
}