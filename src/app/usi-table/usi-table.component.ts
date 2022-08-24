import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'usi-table',
  templateUrl: './usi-table.component.html',
  styleUrls: ['./usi-table.component.scss']
})
export class UsiTableComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() initColumns: any[] = [];
  @Input() opts: any;
  @Output() editEvent = new EventEmitter()
  @Output() removeEvent = new EventEmitter()
  displayedColumns: any[] = [];
  constructor() { }

  ngOnInit(): void {
    // Displayed columns array of strings
  this.displayedColumns = this.initColumns.map(col => col.name);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  editFunction() {
    this.editEvent.emit()
  }

  removeFunction() {
    this.removeEvent.emit()
  }
}
