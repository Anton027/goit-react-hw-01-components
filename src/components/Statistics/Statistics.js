

import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { InfoStatistic } from 'components/InfoStatistic/InfoStatistic';

export const Statistic = ({ title, stats }) => {
    return (
        <Box as={"section"}
            display='inline-flex'
            flexDirection='column'
            alignItems='center'
            mb={40}
            ml={"auto"}
            mr={"auto"}
        >
            <Box mb={10}>
                {title && (
                    <h2>{title}</h2>
                )}
            </Box>

            <Box as={"ul"}
                display='flex'
                alignItems='center'
            >
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
