import transactions from "components/TransactionHistory/transactions.json";
import { TransactionItem } from "components/TransactionItem/TransactionItem";
import { Box } from 'components/Box';

export const TransactionHistory = () => {
    return (
        <Box as={"table"}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) => (
                    <TransactionItem key={id}
                        type={type} amount={amount}
                        currency={currency}
                    />
                ))}
            </tbody>
        </Box>
    )
}
