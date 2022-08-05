import data from 'components/Statistics/data.json';

const InfoStatic = ({ label, percentage }) => { 
    return (
        <li>
            <span>{label}</span>
            <span>{percentage}</span>
        </li>
    )
};

export const Statistic = ({ title }) => {
    return (
        <section>
            <h3>{title}</h3>
            <ul>
                {data.map( ({ id,label,percentage }) => (
                    <InfoStatic key={id} label={label} percentage={percentage} />
                )) }
            </ul>
        </section>
    )
}
