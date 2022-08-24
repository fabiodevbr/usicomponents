import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-smart-select-drag-drop',
  templateUrl: './smart-select-drag-drop.component.html',
  styleUrls: ['./smart-select-drag-drop.component.scss']
})
export class SmartSelectDragDropComponent implements OnInit {
  items = [
    {
      nome: 'Marketing',
      color: '#fff',
      situacao: 'Ativo',
      icon: 'ads_click',
      edit: false
    },
    {
      nome: 'Recursos Humanos',
      color: '#fff',
      situacao: 'Ativo',
      icon: 'ads_click',
      edit: false
    },
    
  ];

  
  constructor() { }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
  ngOnInit(): void {
  }

}
