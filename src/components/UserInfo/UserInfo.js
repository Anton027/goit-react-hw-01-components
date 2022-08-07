import PropTypes from 'prop-types';
import { UserInfoImg, UserInfoText, UserInfoName } from './UserInfo.styled';
export const UserInfo = ({ label, text, info, imgUrl }) => {
  return (
    <>
      <UserInfoImg>
        <img src={imgUrl} alt={label} width='120'/>
      </UserInfoImg>
      
      <UserInfoName>{label}</UserInfoName>
      <UserInfoText>{text}</UserInfoText>
      <UserInfoText>{info}</UserInfoText>
    </>
  )
};

UserInfo.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
}