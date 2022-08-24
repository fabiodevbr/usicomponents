import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-smartselect',
  templateUrl: './smartselect.component.html',
  styleUrls: ['./smartselect.component.scss']
})
export class SmartselectComponent implements OnInit {

  @Input() title: string = "";
  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'contrato 01'}, {name: 'contrato 02'}, {name: 'contrato 03'}];
  filteredOptions!: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
