import PropTypes from 'prop-types';
import { InfoPrWrap } from './InfoProfile.styled';

export const InfoProfile = ({ label, quantity }) => { 
  return (
    <InfoPrWrap>
      <span>{label}</span>
      <span>{quantity}</span>
    </InfoPrWrap>
  )
};

InfoProfile.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}