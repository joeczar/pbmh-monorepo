import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
@Component({
  selector: '[pbmh-button-standalone]',
  template: ` <ng-content></ng-content> `,
  styleUrls: ['../button/button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.pbmh-primary]': 'color === "primary"',
    '[class.pbmh-secondary]': 'color === "secondary"',
  },
})
export class ButtonStandaloneComponent {
  @Input() color: 'primary' | 'secondary' = 'primary';
}
