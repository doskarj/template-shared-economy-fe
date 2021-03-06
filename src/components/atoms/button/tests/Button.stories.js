import { Button } from '../Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button'
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
