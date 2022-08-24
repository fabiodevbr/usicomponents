import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'blue-gerenciador-ambiente',
  templateUrl: './blue-gerenciador-ambiente.component.html',
  styleUrls: ['./blue-gerenciador-ambiente.component.scss']
})
export class BlueGerenciadorAmbienteComponent implements OnInit {

  @Input() drag: any;
  @Input() item: any;
  @Output() modalRemove = new EventEmitter()
  @Output() modalEditar = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }

  removeFunction() {
    this.modalRemove.emit()
  }

  editFunction() {
    this.modalEditar.emit()
  }

}
