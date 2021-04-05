import PropTypes from 'prop-types'
import { Button } from '../../atoms/button/Button'
import './Item.css'

export const Item = ({ item: { id, title, imageUrl, type, priceTag, itemData1, itemData2 }, isLoading }) => {
  if (isLoading) {
    return (
      <div className="item item--loading skeleton">
        <h4 className="ellipsis skeleton">&nbsp;</h4>
        <div className="item-actions">
          <div className="item-description skeleton">
            <span className="color-gray">&nbsp;</span>
            <span>&nbsp;</span>
          </div>
          <Button label="&nbsp;" isDisabled="true" />
        </div>
      </div>
    )
  }

  const itemStyle = {
    backgroundImage: 'url(' + imageUrl + ')',
  };

  return (
    <div className="item" style={itemStyle}>
      <h4 className="ellipsis">{title}</h4>
      <div className="item-actions">
        <div className="item-description">
          <span className="color-gray">{type}</span>
          <span>{ priceTag }</span>
        </div>
        <Button label="Buy" />
      </div>
    </div>
  )
}

Item.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  type: PropTypes.string,
  priceTag: PropTypes.string,
  itemData1: PropTypes.shape({}),
  itemData2: PropTypes.shape({}),

  isLoading: PropTypes.bool.isRequired
};
