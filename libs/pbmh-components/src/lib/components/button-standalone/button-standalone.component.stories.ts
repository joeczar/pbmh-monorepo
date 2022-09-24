import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonStandaloneComponent } from './button-standalone.component';

export default {
  title: 'ButtonStandaloneComponent',
  component: ButtonStandaloneComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ButtonStandaloneComponent>;

const Template: Story<ButtonStandaloneComponent> = (args: ButtonStandaloneComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}