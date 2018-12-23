import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
/**
* Component to display deletion message
*/
export class ModalDeleteComponent implements OnInit {
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /** Confirm the deletion */
  deleteCategory() {
    this.delete.emit(null);
  }

  /** Cancel the deletion */
  cancelDelete() {
    this.cancel.emit(null);
  }
}
