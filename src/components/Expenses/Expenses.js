import React, { useState } from "react"
import ExpenseFilter from "./ExpenseFilter"
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import "./Expenses.css"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020")

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() === +filteredYear
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter onChangeYear={filterChangeHandler} year={filteredYear} />
        {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  )
}

export default Expenses
