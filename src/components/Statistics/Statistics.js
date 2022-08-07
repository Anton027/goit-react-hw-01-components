import data from 'components/Statistics/data.json';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { InfoStatistic } from 'components/InfoStatistic/InfoStatistic';

export const Statistic = ({ title }) => {
    return (
        <Box as={"section"}>
            <h3>{title}</h3>
            <Box as={"ul"}>
                {data.map( ({ id,label,percentage }) => (
                    <InfoStatistic key={id} label={label} percentage={percentage} />
                )) }
            </Box>
        </Box>
    )
}

Statistic.propTypes = {
    title: PropTypes.string,

}
