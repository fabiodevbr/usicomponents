import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blue-badge-title',
  templateUrl: './blue-badge-title.component.html',
  styleUrls: ['./blue-badge-title.component.scss']
})
export class BlueBadgeTitleComponent implements OnInit {

  @Input() title: any;
  @Input() icon: any;
  @Input() color: any;
  constructor() { }

  ngOnInit() {
    
  }

}
