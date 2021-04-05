import { ButtonGroup } from '../ButtonGroup'
import { Button } from '../../button/Button'
import { Icon } from '../../icon/Icon'

const testButton01 = <Button label="Button01" />
const testButton02 = <Button label="Button02" />
const testIconButton01 = <Button label="Button01" icon={<Icon name="home" colorHash="#fff" />}/>
const testIconButton02 = <Button label="Button02" icon={<Icon name="fingerprint" colorHash="#fff" />}/>
const testIconButton03 = <Button label="Button03" icon={<Icon name="favorite" colorHash="#fff" />}/>

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