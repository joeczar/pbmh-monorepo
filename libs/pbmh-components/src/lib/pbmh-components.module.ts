import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ButtonStandaloneComponent } from './components/button-standalone/button-standalone.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, ButtonStandaloneComponent],
  exports: [ButtonStandaloneComponent],
})
export class PbmhComponentsModule {}
