

import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { InfoStatistic } from 'components/InfoStatistic/InfoStatistic';

export const Statistic = ({ title, stats }) => {
    return (
        <Box as={"section"}>
            {title && (
                <h2>{title}</h2>
            )}
            <Box as={"ul"}>
                {stats.map(data => (
                    <InfoStatistic
                        key={data.id}
                        label={data.label}
                        percentage={data.percentage + "%"}
                    />
                ))}
                
            </Box>
        </Box>
    )
}

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}
