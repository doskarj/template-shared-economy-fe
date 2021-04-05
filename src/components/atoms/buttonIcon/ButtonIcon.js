import PropTypes from 'prop-types';
import { Button } from '../button/Button'
import { Icon } from '../icon/Icon'

export const ButtonIcon = ({ iconName, label, isLoading, isDisabled, ...props }) => {
  const icon = <Icon name={iconName} colorHash="#fff" />

  return (
    <Button
      className="button button--icon"
      slot={icon} 
      label={label} 
      isLoading={isLoading} 
      isDisabled={isDisabled} 
    />
  );
};

ButtonIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

ButtonIcon.defaultProps = {
  isLoading: false,
  isDisabled: false,
  onClick: undefined,
};
