import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pbmh-button-standalone',
  template: ` <p>button-standalone works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonStandaloneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
