import PropTypes from 'prop-types';
import { TransactionItem } from "components/TransactionItem/TransactionItem";
import { Box } from 'components/Box';
import { TableHead, TbHeadItem } from "./TransactionHistory.styled";
export const TransactionHistory = ({items}) => {
    return (
        <Box as={"table"}>
            <Box as={'thead'}>
                <TableHead>
                    <TbHeadItem>Type</TbHeadItem>
                    <TbHeadItem>Amount</TbHeadItem>
                    <TbHeadItem>Currency</TbHeadItem>
                </TableHead>
            </Box>

            <Box as={"tbody"}>
                {items.map(({ id, type, amount, currency }) => (
                    <TransactionItem key={id}
                        type={type} amount={amount}
                        currency={currency}
                    />
                ))}
            </Box>
        </Box>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired
}