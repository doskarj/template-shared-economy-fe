import { ButtonIcon } from '../ButtonIcon';

export default {
  title: 'Atoms/ButtonIcon',
  component: ButtonIcon,
};

const Template = (args) => <ButtonIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconName: 'home',
  label: 'Home',
  isLoading: false,
  isDisabled: false
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

