import { Item } from '../Item';
import { testItem01 } from './ItemTestData'

export default {
  title: 'Items/Item',
  component: Item
};

const Template = (args) => <Item {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: { ...testItem01 }
};
