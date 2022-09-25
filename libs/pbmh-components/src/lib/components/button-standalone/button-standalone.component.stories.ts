import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PbmhComponentsModule } from '../../pbmh-components.module';
import { ButtonStandaloneComponent } from './button-standalone.component';

export default {
  title: 'ButtonStandaloneComponent',
  component: ButtonStandaloneComponent,
  decorators: [
    moduleMetadata({
      imports: [PbmhComponentsModule],
    }),
  ],
} as Meta<ButtonStandaloneComponent>;

const Template: Story<ButtonStandaloneComponent> = (
  args: ButtonStandaloneComponent
) => ({
  template: `
    <button pbmh-button-standalone [color]=color>PBMH Button Standalone</button>
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
