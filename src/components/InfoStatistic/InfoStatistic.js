import PropTypes from 'prop-types';
export const InfoStatistic = ({ label, percentage }) => { 
    return (
        <li>
            <span>{label}</span>
            <span>{percentage}</span>
        </li>
    )
};

InfoStatistic.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired
}