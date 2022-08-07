import PropTypes from 'prop-types';
import { InfoStWrap } from './InfoStatistic.styled';
export const InfoStatistic = ({ label, percentage }) => { 
    return (
        <InfoStWrap>
            <span>{label}</span>
            <span>{percentage}</span>
        </InfoStWrap>
    )
};

InfoStatistic.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired
}