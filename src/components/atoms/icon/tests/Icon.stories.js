import { Icon } from '../Icon';
import { colorGray } from '../../../colors'

export default {
  title: 'Atoms/Icon',
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'home',
};

export const Gray = Template.bind({});
Gray.args = {
  ...Default.args,
  colorHash: colorGray
};


