import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pbmh-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}