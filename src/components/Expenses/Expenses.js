import React, { useState } from "react"
import ExpenseFilter from "./ExpenseFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"
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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
