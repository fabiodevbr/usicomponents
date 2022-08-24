import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmartselectComponent } from './smartselect/smartselect.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SmartSelectComponent } from './smart-select/smart-select.component';
import { SmartSelectTextComponent } from './smart-select-text/smart-select-text.component';
import { SmartSelectDragDropComponent } from './smart-select-drag-drop/smart-select-drag-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { BlueTabsComponent } from './blue-tabs/blue-tabs.component';
import { BlueBadgeTitleComponent } from './blue-badge-title/blue-badge-title.component';
import { BlueBadgeStatusComponent } from './blue-badge-status/blue-badge-status.component';
import { BlueGerenciadorAmbienteComponent } from './blue-gerenciador-ambiente/blue-gerenciador-ambiente.component';
import { BlueOptsComponent } from './blue-opts/blue-opts.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {fas} from "@fortawesome/pro-solid-svg-icons";
import {far} from '@fortawesome/pro-regular-svg-icons';
import {fat} from '@fortawesome/pro-thin-svg-icons';
import {fal} from '@fortawesome/pro-light-svg-icons'
import {MatDialogModule} from '@angular/material/dialog';
import { ModalExcluirComponent } from './modal-excluir/modal-excluir.component'
import {MatButtonModule} from '@angular/material/button';
import { BpmColorPickerComponent } from './bpm-color-picker/bpm-color-picker.component';
import {MatRadioModule} from '@angular/material/radio'
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { ModalEditarComponent } from './modal-editar/modal-editar.component'
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { UsiTableComponent } from './usi-table/usi-table.component';
import { UsiComponentsShowComponent } from './usi-components-show/usi-components-show.component';
import { UsiLastUpdateComponent } from './usi-last-update/usi-last-update.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartselectComponent,
    SmartSelectComponent,
    SmartSelectTextComponent,
    SmartSelectDragDropComponent,
    BlueTabsComponent,
    BlueBadgeTitleComponent,
    BlueBadgeStatusComponent,
    BlueGerenciadorAmbienteComponent,
    BlueOptsComponent,
    ModalExcluirComponent,
    BpmColorPickerComponent,
    ModalEditarComponent,
    UsiTableComponent,
    UsiComponentsShowComponent,
    UsiLastUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    DragDropModule,
    MatIconModule,
    MatTabsModule,
    FontAwesomeModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    NgxMatColorPickerModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTableModule
  ],
  providers: [{ provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fat, fal);
  }
 }
