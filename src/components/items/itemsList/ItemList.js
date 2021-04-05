import PropTypes from 'prop-types'
import { Item } from '../item/Item'
import { Button } from '../../atoms/button/Button'
import { ButtonGroup } from '../../atoms/buttonGroup/ButtonGroup'
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

  const controlButtons = [
    <Button label="previous" />,
    <Button label="next" />
  ]

  return (
    <div className="item-list">
      <div className="item-list-controls">
        <h3>{title}</h3>
        <ButtonGroup buttons={controlButtons} />
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