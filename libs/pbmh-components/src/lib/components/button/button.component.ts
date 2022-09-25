import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: '[pbmh-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.pbmh-primary]': 'color === "primary"',
    '[class.pbmh-secondary]': 'color === "secondary"',
  },
})
export class PbmhButtonComponent {
  /** Define the appearance of the Button */
  @Input() color: 'primary' | 'secondary' = 'primary';
}
