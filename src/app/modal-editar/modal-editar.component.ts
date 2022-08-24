import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.scss']
})
export class ModalEditarComponent implements OnInit {

  status: boolean = true;
  cor: any; 

  constructor() { }

  ngOnInit(): void {
  }

  selectColor(event: any) {
    this.cor = event
  }
}
