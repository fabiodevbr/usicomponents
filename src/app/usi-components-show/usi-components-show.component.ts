import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'usi-components-show',
  templateUrl: './usi-components-show.component.html',
  styleUrls: ['./usi-components-show.component.scss']
})
export class UsiComponentsShowComponent implements OnInit {

  @Input() element: any;
  @Input() component: string = "";
  @Input() opts: any;
  @Output() editEvent = new EventEmitter()
  @Output() removeEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log(this.opts)
  }

  openDialog() {

  }

  editFunction() {
    this.editEvent.emit()
  }

  removeFunction() {
    this.removeEvent.emit()
  }

  openEditar() {

  }
}
