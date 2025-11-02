import ExpenseItem from "./ExpenseItem"

function ExpenseList({expenses, onDelete}) {
    if (!expenses.length) {
        return <p className="empty-list">No Expense to Display</p>
    }
    return(
        <div className="expense-list">
            <h2 className="list-head">My Expenses:</h2>
            {expenses.map(expense => (
                <ExpenseItem
                key={expense.id}
                expense={expense}
                onDelete={onDelete}/>
            ))}
        </div>
    )
}
export default ExpenseList