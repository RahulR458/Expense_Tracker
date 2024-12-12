import React from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from 'react-icons/fa';
import data from '../json/data.json'
import { useState } from 'react'

function Navbar() {
  const [transactions, setTransactions] = useState(data);

  // Calculate total income
  const totalIncome = transactions
    .filter((transaction) => transaction.income)
    .reduce((sum, transaction) => sum + transaction.price, 0);
  console.log(totalIncome);

  // Calculate total expenses
  const totalExpense = transactions
    .filter((transaction) => transaction.expense)
    .reduce((sum, transaction) => sum + transaction.price, 0);

  // Calculate balance
  const balance = totalIncome - totalExpense;

  return (
    <div className="max-w-[1640px] mx-auto sm:h-[80px] h-[300px]  bg-[#429690] pt-6 sm:rounded-b-lg rounded-b-3xl">
      <div className="flex justify-between sm:items-center text-white px-6 font-serif font-bold sm:text-3xl text-2xl">
        <div className="w-full flex justify-between">
          <div>
            <h2 className="sm:text-2xl text-lg">Enjelin Morgeana</h2>
          </div>
          <div className="w-52 h-10 rounded-xl  bg-[#A0CECB]  flex items-center justify-center">
            <h2 className="text-lg text-black">Expense Tracker</h2>
          </div>
        </div>
      </div>

      {/* Card For Mobile view */}
      <div className="w-full h-[480px] flex justify-around items-center sm:hidden rounded-xl shadow-md absolute">
        <div className="w-[420px] h-[200px] bg-[#2F7E79] rounded shadow-xl items-center justify-center space-y-14">
          <div className="flex items-center justify-between m-5">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-xl text-white">Total Balance</h2>
                <MdKeyboardArrowUp className="text-white" />
              </div>
              <h1 className="font-bold text-xl text-white">$ {totalIncome}</h1>
            </div>
            <div>
              <HiDotsHorizontal className="text-white" />
            </div>
          </div>
          <div className="flex justify-between items-center m-5">
            <div>
              <div className="flex items-center gap-2">
                <FaRegArrowAltCircleDown className="text-white" />
                <h2 className="font-bold text-sm text-white">Income</h2>
              </div>
              <h1 className="font-bold text-lg text-white">$ {balance}</h1>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaRegArrowAltCircleUp className="text-white" />
                <h2 className="font-bold text-sm text-white">Expenses</h2>
              </div>
              <h1 className="font-bold text-lg text-white">$ {totalExpense}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="hidden sm:block">
        <div className="w-full h-36 flex justify-around items-center ">
          <div className="w-[400px] h-24 bg-[#2F7E79] rounded shadow-xl  flex items-center justify-center">
            <div>
              <h2 className="font-bold text-2xl text-white">Total Balance</h2>
              <h1 className="font-bold text-3xl text-white">$ {totalIncome}</h1>
            </div>
          </div>
          <div className="w-[400px] h-24 bg-[#2F7E79] rounded shadow-xl  flex items-center justify-center">
            <div>
              <h2 className="font-bold text-2xl text-white">Income</h2>
              <h1 className="font-bold text-3xl text-white">$ {balance}</h1>
            </div>
          </div>
          <div className="w-[400px] h-24 bg-[#2F7E79] rounded shadow-xl  flex items-center justify-center">
            <div>
              <h2 className="font-bold text-2xl text-white">Expenses</h2>
              <h1 className="font-bold text-3xl text-white">
                $ {totalExpense}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar