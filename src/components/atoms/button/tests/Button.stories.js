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
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true
};
export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true
};

// TODO: Move to separate component ButtonIcon
export const IconButtonDefault = Template.bind({});
IconButtonDefault.args = {
  label: 'Button',
  icon: <Icon name="home" colorHash="#fff" />
};
export const IconButtonDisabled = Template.bind({});
IconButtonDisabled.args = {
  ...Default.args,
  isDisabled: true,
  icon: <Icon name="home" colorHash="#fff" />
};
export const IconButtonLoading = Template.bind({});
IconButtonLoading.args = {
  ...Default.args,
  isLoading: true,
  icon: <Icon name="home" colorHash="#fff" />
};

