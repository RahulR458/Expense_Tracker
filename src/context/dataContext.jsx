import { createContext, useState } from "react";
import data from '../json/data.json'
import { useEffect } from 'react'

export const DataContext = createContext()

export const DataProvider = ({children})=>{

    const [transactions, setTransactions] = useState(data);
    const [temtrans, setTemtrans] = useState([]);
    const [selectedName, setSelectedName] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("2024-12");
    console.log(transactions);
  
    useEffect(() => {
      setTemtrans(transactions);
    }, []);
  
    useEffect(() => {
      filteredTransactions();
    }, [selectedName]);
  
    useEffect(() => {
      filteredTransactionss();
    }, [selectedDate]);
  
    
  
    
  
    // Function to calculate monthly totals
    const calculateTotal = (month) => {
      const filteredTransactions = transactions.filter((transaction) => {
        const transactionMonth = transaction.date.slice(0, 7); 
        return transactionMonth === month;
      });
  
      const incomeTotal = filteredTransactions.reduce(
        (total, transaction) =>
          transaction.income ? total + transaction.price : total,
        0
      );
  
      const expenseTotal = filteredTransactions.reduce(
        (total, transaction) =>
          transaction.expense ? total + transaction.price : total,
        0
      );
  
      return { incomeTotal, expenseTotal };
    };
  
    const { incomeTotal, expenseTotal } = calculateTotal(selectedMonth);
  
    // Filter transactions on expenses
    const expenses = () => {
      const Result = transactions.filter((transaction) => transaction.expense);
      setTemtrans(Result);
    };
    // console.log(expenses);
  
  
    // Filter transactions based on name
    const filteredTransactions = () => {
      const result = selectedName
        ? transactions.filter((transaction) => transaction.name === selectedName)
        : transactions;
    //   console.log(filteredTransactions, "-----");
  
      setTemtrans(result);
    };
  
    // Function to handle sorting based on date
    const handleDateChange = (e) => {
      setSelectedDate(e.target.value);
    };
  
    // Sort transactions by date
    const sortedTransactions = [...transactions].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  
    // Filter transactions based on selected date
    const filteredTransactionss = () => {
      const result = selectedDate
        ? sortedTransactions.filter(
            (transaction) => transaction.date === selectedDate
          )
        : sortedTransactions;
  
      setTemtrans(result);
    };


    return <DataContext.Provider value={{transactions,incomeTotal,expenseTotal,temtrans,setTemtrans,selectedName,selectedDate,setSelectedDate,selectedMonth,calculateTotal,expenses,filteredTransactions,handleDateChange,filteredTransactionss,setSelectedName,setSelectedMonth}}>{children}</DataContext.Provider>

}