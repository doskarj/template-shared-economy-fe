import PropTypes from 'prop-types'
import './Item.css'

export const Item = ({ item: { id, title, imageUrl, type, itemData1, itemData2 } }) => {
  const itemStyle = {
    backgroundImage: 'url(' + imageUrl + ')',
  };

  return (
    <div class="item" style={itemStyle}>
      <h4>{ title }</h4>
      <span class="color-secondary">{ type }</span>
    </div>
  )
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  type: PropTypes.string.isRequired,
  itemData1: PropTypes.shape({}),
  itemData2: PropTypes.shape({})
};
