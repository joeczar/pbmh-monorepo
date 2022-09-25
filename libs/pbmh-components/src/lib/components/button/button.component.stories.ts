import { PbmhComponentsModule } from './../../pbmh-components.module';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PbmhButtonComponent } from './button.component';

export default {
  title: 'button',
  component: PbmhButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [PbmhComponentsModule],
    }),
  ],
} as Meta<PbmhButtonComponent>;

const Template: Story<PbmhButtonComponent> = (args: PbmhButtonComponent) => ({
  template: `
    <button pbmh-button [color]="color">PBMH Button</button>
  `,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};
