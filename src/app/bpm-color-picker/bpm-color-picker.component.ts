import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'blue-color-picker',
  templateUrl: './bpm-color-picker.component.html',
  styleUrls: ['./bpm-color-picker.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class BpmColorPickerComponent implements OnInit {

  colors: any[] = [
    '#42569c', '#7b63d8', '#eb5098', '#eb5048', 
    '#Ef8a4f', '#f4bb41', '#A6d041', '#54b835', '#62d5d6',
    '#459df2', '#2961f0', '#a4abc0'
  ]

  corPersonalizada: any;
  @Output() changeEvent = new EventEmitter;

  constructor() { }

  changeColor() {
    console.log("chamou")
    this.changeEvent.emit(this.corPersonalizada)
  }

  ngOnInit(): void {
  }

}
