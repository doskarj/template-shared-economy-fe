import { Button } from '../../button/Button'
import { ButtonGroup } from '../ButtonGroup'
import { ButtonIcon } from '../../buttonIcon/ButtonIcon'

const testButton01 = <Button label="Button01" />
const testButton02 = <Button label="Button02" />
const testIconButton01 = <ButtonIcon label="Button01" iconName="home"/>
const testIconButton02 = <ButtonIcon label="Button02" iconName="fingerprint"/>
const testIconButton03 = <ButtonIcon label="Button03" iconName="favorite"/>

export default {
  title: 'Atoms/ButtonGroup',
  component: ButtonGroup
}

const Template = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttons: [ testButton01, testButton02]
}
export const IconButtons = Template.bind({});
IconButtons.args = {
  buttons: [ testIconButton01, testIconButton02, testIconButton03]
}
export const Combined = Template.bind({});
Combined.args = {
  buttons: [ testButton01, testIconButton01]
}