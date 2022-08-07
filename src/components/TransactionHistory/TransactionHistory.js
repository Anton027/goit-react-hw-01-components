
import { TransactionItem } from "components/TransactionItem/TransactionItem";
import { Box } from 'components/Box';
import { TableHead } from "./TransactionHistory.styled";
export const TransactionHistory = ({items}) => {
    return (
        <Box as={"table"}>
            <thead>
                <TableHead>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </TableHead>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TransactionItem key={id}
                        type={type} amount={amount}
                        currency={currency}
                    />
                ))}
            </tbody>
        </Box>
    )
}
