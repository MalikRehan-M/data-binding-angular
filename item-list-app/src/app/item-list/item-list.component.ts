import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items = [
    { text: 'Task 1', editing: false },
    { text: 'Task 2', editing: false },
    { text: 'Task 3', editing: false }
  ];
  
  
  // Add this property to your component class to keep track of edited text
  newItem: string = '';
  
  // Update the addItem() method to clear the newItem property
  addItem() {
    if (this.newItem.trim() !== '') {
      this.items.push({ text: this.newItem, editing: false });
      this.newItem = '';
    }
  }
  editItem(item:any) {
    item.editing = true;
    // You can set the item's initial text here if needed.
  }
  saveItem(item:any) {
    item.editing = false;
    // You can add additional logic here if needed.
  }
  removeItem(item:any) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  
  
}
