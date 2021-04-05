import PropTypes from 'prop-types'
import { Item } from '../item/Item'
import './ItemList.css'

export const ItemList = ({ title, isLoading, itemsData }) => {
  const loadingItemList = [
    <Item item={{}} isLoading={true} />,
    <Item item={{}} isLoading={true} />,
    <Item item={{}} isLoading={true} />,
    <Item item={{}} isLoading={true} />
  ]

  const items = isLoading ?
    loadingItemList :
    itemsData.map(itemData => {
      return <Item item={itemData.item} isLoading={itemData.isLoading} />
    })

  return (
    <div className="item-list">
      <div className="item-list-controls">
        <h3>{title}</h3>
        <span className="material-icons">arrow_forward_ios</span>
        <span className="material-icons">previous</span>
      </div>
      <div className="item-list-items">
        {items}
      </div>
    </div>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  itemsData: PropTypes.array.isRequired
};