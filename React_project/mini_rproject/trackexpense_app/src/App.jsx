import { useState } from 'react'
import Header from './Components/Header'
import AddExpenseForm from './Components/AddExpenseForm';
import CategoryFilter from './Components/CategoryFilter';
import ExpenseList from './Components/ExpenseList';
import './Components/Trackexpense.css'
import ExpenseStats from './Components/ExpenseStats';



function App() {

  const [expenses, setExpense] = useState([
    {id: Date.now(), description: "Lunch", amount: 2800, Category: "Food", Date: "23-10-2025"}
  ]);

  const [filter, setfilter] = useState('All')

  function addForm(description, amount, Category) {
    const newExpense = {
      id: Date.now(),
      description: description,
      amount: parseFloat(amount),
      Category: Category,
    }
    setExpense([...expenses, newExpense])
  };

  function deleteExpense(id) {
    setExpense(expenses.filter(expense => expense.id !== id))
  }

  //  const filtered = UseMemo(() => {
  //   if (filter === 'All') return expenses;
  //   return expenses.filter((e) => e.category === filter)
  //   }, [expenses, filter])

  const filtered = filter === "All" ? expenses : expenses.filter((expense) => setfilter(expense.Category))

  return(
    <div className='general'>
      <Header />
      <AddExpenseForm onAdd={addForm}/>
      <CategoryFilter onFilter={filtered}/>
      <ExpenseList expenses={filtered} onDelete={deleteExpense}/>
      <ExpenseStats expenses={expenses}/>
    </div>
  )
}



export default App

