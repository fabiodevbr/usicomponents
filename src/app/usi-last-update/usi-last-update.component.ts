import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'usi-last-update',
  templateUrl: './usi-last-update.component.html',
  styleUrls: ['./usi-last-update.component.scss']
})
export class UsiLastUpdateComponent implements OnInit {

  @Input() date: any;
  constructor() { }

  ngOnInit(): void {
  }

}
