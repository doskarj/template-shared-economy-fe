import PropTypes from 'prop-types'
import { Button } from '../../atoms/Button'
import './Item.css'

export const Item = ({ item: { id, title, imageUrl, type, priceTag, itemData1, itemData2 }, isLoading }) => {
  const itemStyle = {
    backgroundImage: 'url(' + imageUrl + ')',
  };

  if (isLoading) {
    return (
      <div class="item item--loading skeleton">
        <h4 class="ellipsis skeleton">&nbsp;</h4>
        <div class="item-actions">
          <div class="item-description skeleton">
            <span class="color-gray">&nbsp;</span>
            <span>&nbsp;</span>
          </div>
          <Button label="&nbsp;" isDisabled="true" />
        </div>
      </div>
    )
  }

  return (
    <div class="item" style={itemStyle}>
      <h4 class="ellipsis">{title}</h4>
      <div class="item-actions">
        <div class="item-description">
          <span class="color-gray">{type}</span>
          <span>{ priceTag }</span>
        </div>
        <Button label="Buy" />
      </div>
    </div>
  )
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  type: PropTypes.string.isRequired,
  priceTag: PropTypes.string.isRequired,
  itemData1: PropTypes.shape({}),
  itemData2: PropTypes.shape({}),

  isLoading: PropTypes.bool.isRequired
};
