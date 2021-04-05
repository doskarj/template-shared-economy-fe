import { Button } from '../Button';
import { Icon } from '../../icon/Icon';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true
};

export const IconButton = Template.bind({});
IconButton.args = {
  ...Default.args,
  icon: <Icon name="home" colorHash="#fff" />
};
