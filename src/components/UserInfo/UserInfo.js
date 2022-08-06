import PropTypes from 'prop-types';
export const UserInfo = ({ label, text, info, imgUrl }) => {
  return (
    <>
      <img src={imgUrl} alt={label} width='120'/>
      <p>{label}</p>
      <p>{text}</p>
      <p>{info}</p>
    </>
  )
};

UserInfo.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
}