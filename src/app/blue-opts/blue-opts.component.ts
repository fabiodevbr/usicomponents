import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'blue-opts',
  templateUrl: './blue-opts.component.html',
  styleUrls: ['./blue-opts.component.scss']
})
export class BlueOptsComponent implements OnInit {

  @Output() editEvent = new EventEmitter();

  @Input() editShow: boolean = false;
  @Input() removeShow: boolean = false;
  @Output() removeFunction = new EventEmitter();
  @Output() editFunction = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.editEvent)
  }

  remover() {
    this.removeFunction.emit()
  }

  editar() {
    this.editFunction.emit()
  }

}
