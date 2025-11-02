function ExpenseItem({expense, onDelete}) {

    return(
        <div className="expense">
            <span>{expense.description}</span>
            <span>₦{expense.amount}</span>
            <span>{expense.Category}</span>

            <button className="item-delete" onClick={() => onDelete(expense.id)}>Delete</button>
        </div>
        
    )

}

export default ExpenseItem