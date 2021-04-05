import PropTypes from 'prop-types'
import { Item } from '../item/Item'
import { ButtonIcon } from '../../atoms/buttonIcon/ButtonIcon'
import { ButtonGroup } from '../../atoms/buttonGroup/ButtonGroup'
import './ItemList.css'

export const ItemList = ({ title, isLoading, itemsData }) => {
  let items = [];
  let controlButtons = [
    <ButtonIcon label="previous" iconName="arrow_back_ios_new" isDisabled={isLoading} />,
    <ButtonIcon label="next" iconName="arrow_forward_ios" isDisabled={isLoading} />
  ]

  if (isLoading) {
    items = [
      <Item item={{}} isLoading={true} />,
      <Item item={{}} isLoading={true} />,
      <Item item={{}} isLoading={true} />,
      <Item item={{}} isLoading={true} />
    ]
  } else {
    items = itemsData.map(itemData => {
      return <Item item={itemData.item} isLoading={itemData.isLoading} />
    })
  }

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