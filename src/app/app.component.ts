import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalEditarComponent } from './modal-editar/modal-editar.component';
import { ModalExcluirComponent } from './modal-excluir/modal-excluir.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'painellabblue';
  contratoOptions: any[] = [{name: 'contrato 04'}, {name: 'contrato 05'}, {name: 'contrato 06'}];
  items = [
    {
      nome: 'Financeiro e Compras',
      color: '#9CC13B',
      situacao: 'Ativo',
      icon: 'money-check-edit-alt',
      edit: false
    },
    {
      nome: 'Marketing e Vendas',
      color: '#8D4BF6',
      situacao: 'Ativo',
      icon: 'bullseye-arrow',
      edit: false
    },
    
    
  ];

  displayedColumns: any[] = [
    {
      name: 'nome',
      title: 'Setor Corporativo',
      type: 'usi-title'
    },
    {
      name: 'situacao',
      title: 'Situação',
      type: 'usi-status'
    },
    {
      name: 'acoes',
      title: 'Ações',
      type: 'usi-opts',
      opts: {edit: true, close: true}
    },
    ];

    itemsTeste = [
      {
        nome: 'Financeiro e Compras',
        color: '#9CC13B',
        situacao: 'Ativo',
        icon: 'money-check-edit-alt',
        edit: false,
        data: "22/11/2022"
      },
      {
        nome: 'Marketing e Vendas',
        color: '#8D4BF6',
        situacao: 'Ativo',
        icon: 'bullseye-arrow',
        edit: false,
        data: "25/11/2022"
      },
    ];
    
    displayedColumnsTeste: any[] = [
      {
        name: 'nome',
        title: 'Nome do processo',
        type: 'usi-title'
      },
      {
        name: 'setor',
        title: 'Setor corporativo',
        type: 'usi-label'
      },
      {
        name: 'situacao',
        title: 'Situação',
        type: 'usi-status'
      },
      {
        name: 'ultima',
        title: 'Última Atualização',
        type: 'usi-last-update'
      },
      {
        name: 'acoes',
        title: 'Ações',
        type: 'usi-opts',
        opts: {edit: true}
      },
      ];

  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalExcluirComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openEditar(): void {
    const dialogRef = this.dialog.open(ModalEditarComponent, {
      width: '90rem',
      height: '34rem'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  removeFunction() {
  }

  editFunction() {
  }
}

export interface PeriodicElement {
  setor: string;
  situacao: number;
  acoes: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {setor: 'Hydrogen', situacao: 1.0079, acoes: 'H'},
];