import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blue-badge-status',
  templateUrl: './blue-badge-status.component.html',
  styleUrls: ['./blue-badge-status.component.scss']
})
export class BlueBadgeStatusComponent implements OnInit {

  @Input() disabled: any;
  constructor() { }

  ngOnInit(): void {
  }

}
