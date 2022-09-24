import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PbmhButtonComponent } from './components/button/button.component';
import { ButtonStandaloneComponent } from './components/button-standalone/button-standalone.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PbmhButtonComponent, ButtonStandaloneComponent],
  exports: [PbmhButtonComponent, ButtonStandaloneComponent],
})
export class PbmhComponentsModule {}
