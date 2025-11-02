import { useState } from "react"

const Categories = ["Food", "Transport", "Bills", "Entertainment", "Others"]

function AddExpenseForm({onAdd}) {
    const [des, setDes] = useState('');
    const [amount, setAmount] = useState('');
    const [cat, setCat] = useState('All');
    const [message, setMessage] = useState('')

    

    function handleSubmit(e) {
        e.preventDefault()
        if (des === '' || amount === parseFloat(amount) <= 0 || cat === '') {
            setMessage("Fill out all fields")
            return 
        }

        onAdd(des, amount, cat);
        setDes('')
        setAmount('')
    }
    return(
        <form onSubmit={handleSubmit} className="form">
            <input
            className="des"
            type="text"
            placeholder="Description"
            value={des}
            onChange={(e) => setDes(e.target.value)} />

            <input
            className="des"
            type="number"
            value={amount}
            placeholder="₦ Amount"
            onChange={(e) => setAmount(e.target.value)} />

            <select className="select" value={cat} onChange={(e) => setCat(e.target.value)}>
                {Categories.map((Category) => (
                    <option key={Category}>{Category}</option>
                ))}
            </select>

            <button className="form-btn" type="submit">Add Expense</button>
            <p>{message}</p>
        </form>
    )
}

export default AddExpenseForm