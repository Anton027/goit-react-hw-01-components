import PropTypes from 'prop-types';
import { TdTrnsactionItem } from './TransactionItem.styled';

export const TransactionItem = ({ type, amount, currency }) => {
    return (
        <tr>
            <TdTrnsactionItem>{type}</TdTrnsactionItem>
            <TdTrnsactionItem>{amount}</TdTrnsactionItem>
            <TdTrnsactionItem>{currency}</TdTrnsactionItem>
        </tr>
    )
}

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}