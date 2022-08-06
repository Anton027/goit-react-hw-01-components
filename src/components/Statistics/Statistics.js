import data from 'components/Statistics/data.json';
import PropTypes from 'prop-types';
import { InfoStatistic } from 'components/InfoStatistic/InfoStatistic';

export const Statistic = ({ title }) => {
    return (
        <section>
            <h3>{title}</h3>
            <ul>
                {data.map( ({ id,label,percentage }) => (
                    <InfoStatistic key={id} label={label} percentage={percentage} />
                )) }
            </ul>
        </section>
    )
}

Statistic.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
}
