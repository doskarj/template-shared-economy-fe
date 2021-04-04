import PropTypes from 'prop-types'
import { Item } from '../item/Item'
import './ItemList.css'

export const ItemList = ({ itemsData }) => {
  const items = itemsData.map(itemData => {
    return <Item item={itemData.item} isLoading={itemData.isLoading} />
  })

  return (
    <div class="item-list">
      {items}
    </div>
  )
}

Item.propTypes = {
  itemsData: PropTypes.array.isRequired
};