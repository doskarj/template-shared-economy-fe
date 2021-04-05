import { ItemList } from '../ItemList';
import { testItemList } from './ItemListTestData'

export default {
  title: 'Items/ItemList',
  component: ItemList
};

const Template = (args) => <ItemList {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Future cars',
  isLoading: false,
  itemsData: testItemList
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
  itemsData: undefined
};
