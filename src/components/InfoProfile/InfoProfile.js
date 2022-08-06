import PropTypes from 'prop-types';
export const InfoProfile = ({ label, quantity }) => { 
  return (
    <li>
      <span>{label}</span>
      <span>{quantity}</span>
    </li>
  )
};

InfoProfile.propTypes = {
    label: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
}