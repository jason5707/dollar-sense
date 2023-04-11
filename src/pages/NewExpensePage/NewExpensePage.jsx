import { useState } from 'react';

export default function NewExpensePage() {

  const [ expense, setExpense] = useState({
    name: '',
    amount:''
  });

  function handleChange(evt) {
    setExpense({ ...expense,
      [evt.target.name]: evt.target.value
    });
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    alert(expense)
    setExpense({ name: '', amount: ''})
  }
  return (
    <>
    <h1>New Expense</h1>
    <form action='' onSubmit={handleSubmit}>
      <label htmlFor='name'>Expense
      <input tyoe='text' name='name' id='name' value={expense.name} onChange={handleChange}/>
      </label>
      <label htmlFor='amount'>$
      <input tyoe='text' name='amount' id='amount' onChange={handleChange} />
      </label>
      <input type='submit' value='Add Expense' />
    </form>
    </>
  );
}