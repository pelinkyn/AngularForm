import { Component, Inject, Output, EventEmitter  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-delete',
  standalone: true,
  imports: [],
  templateUrl: './popup-delete.component.html',
  styleUrl: './popup-delete.component.scss'
})

export class PopupDeleteComponent {
@Output() confirm = new EventEmitter<boolean>();

constructor(@Inject(MAT_DIALOG_DATA) public data:any){}

  onYesClick(){
    this.confirm.emit(true)
  }

  onNoClick(){
    this.confirm.emit(false)
  }
}
