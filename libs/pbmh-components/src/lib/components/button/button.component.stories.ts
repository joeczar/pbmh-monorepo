import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PbmhButtonComponent } from './button.component';

export default {
  title: 'button',
  component: PbmhButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<PbmhButtonComponent>;

const Template: Story<PbmhButtonComponent> = (args: PbmhButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
