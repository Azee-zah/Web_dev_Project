
function ExpenseStats({expenses}) {
    const total =expenses.reduce((sum, e)=> sum + e.amount, 0)
    const highest = expenses.length ? Math.max(...expenses.map((e) => e.amount)): 0;
    const num = expenses.length

    return(
        <div className="Stats">
            <h2>Expense Statistics:</h2>
            <p>Total Amount: ₦{total}</p>
            <p>Highest Expense: ₦{highest}</p>
            <p>Number of Expenses: {num}</p>

        </div>
    )
}

export default ExpenseStats