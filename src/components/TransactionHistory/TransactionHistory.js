import transactions from "components/TransactionHistory/transactions.json";
const TransactionItem = ({ type, amount, currency }) => {
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}

export const TransactionHistory = () => {
    return (
        <table>
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
        </table>
    )
}