import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import data from '../json/data.json'
import { useEffect } from 'react'
import { DataContext } from '../context/dataContext'


function Home() {
 
  let {transactions,incomeTotal,expenseTotal,temtrans,setTemtrans,selectedName,selectedDate,setSelectedDate,selectedMonth,calculateTotal,expenses,filteredTransactions,handleDateChange,filteredTransactionss,setSelectedName,setSelectedMonth} = useContext(DataContext)

  return (
    <div className="max-w-[1640px] mx-auto  h-auto overflow-hidden  bg-slate-200">
      <Navbar />

      

      {/* Transactions history */}
      <div className="w-full h-full mt-28 sm:mt-20 ">
        <div>
          <div className="w-full h-full flex justify-between p-14">
            <div className="w-[800px] hidden sm:block">
              <div className="w-full ">
                <div className=" w-full flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Transactions History</h2>
                  <h2 className="text-[#666666] cursor-pointer">see all</h2>
                </div>
                <div className="mt-10">
                  {temtrans.map((items) => (
                    <div key={items.id} className="w-full flex items-center pt-2">
                      <div className="w-20 h-20 mx-2 bg-white rounded-md flex items-center justify-center">
                        <img
                          className="w-16 h-16"
                          src={items.image}
                          alt="upwork"
                        />
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <div>
                          <h1 className="font-bold text-lg">{items.name}</h1>
                          <h4 className="text-[#666666]">{items.date}</h4>
                        </div>
                        <div>
                          <h1
                            className={`font-bold text-lg ${
                              items.income ? "text-green-400" : "text-red-400"
                            }`}
                          >
                            {items.income ? "+" : "-"} ${items.price}
                          </h1>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div></div>
            </div>

            {/* filter */}
            <div className="w-full sm:w-[350px]">
              <div className="gap-56 pb-10 w-full">
                <button
                  onClick={expenses}
                  className="p-2 w-full bg-[#F95B51] hover:bg-[#ef4a3e] rounded-2xl"
                >
                  Click to check all expenses
                </button>
              </div>
              <div>
                <h1>Filter by</h1>
                <select
                  onChange={(e) => {
                    setSelectedName(e.target.value);
                  }}
                  value={selectedName}
                  className="p-2 px-8 mt-4 w-full bg-[#429690] rounded-lg"
                >
                  <option value="">All</option>
                  {transactions.map((transaction) => (
                    <option key={transaction.id} value={transaction.name}>
                      {transaction.name}
                    </option>
                  ))}
                </select>
                <div className="space-y-4 mt-4">
                  <div>
                    <input
                      type="text"
                      className="px-2 rounded-lg w-full"
                      placeholder="Enter amount"
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      className="px-2 p-2 rounded-lg bg-[#429690] w-full"
                      placeholder="Enter date"
                    />
                  </div>
                </div>
              </div>

              {/* Monthly expence */}
              <div className="bg-[#A0CECB] mt-10 p-4 font-medium rounded-md">
                <h1 className="font-bold pb-2">Monthly Transactions</h1>
                <label>Select Month: </label>
                <input
                  type="month"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                />
                <div>
                  <h2>Income Total: ${incomeTotal.toFixed(2)}</h2>
                  <h2>Expense Total: ${expenseTotal.toFixed(2)}</h2>
                  <h2>Net Total: ${(incomeTotal - expenseTotal).toFixed(2)}</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Trans- Mobile view */}
          <div className="w-full flex justify-center items-center p-5  sm:hidden">
            <div className="w-full ">
              <div className=" w-full flex justify-between items-center">
                <h2 className="text-2xl font-bold">Transactions History</h2>
                <h2 className="text-[#666666] cursor-pointer">see all</h2>
              </div>
              <div className="mt-10">
                {temtrans.map((items) => (
                  <div key={items.id} className="w-full flex items-center pt-2">
                    <div className="w-20 h-20 mx-2 bg-white rounded-md flex items-center justify-center">
                      <img
                        className="w-16 h-16"
                        src={items.image}
                        alt="upwork"
                      />
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <div>
                        <h1 className="font-bold text-lg">{items.name}</h1>
                        <h4 className="text-[#666666]">{items.date}</h4>
                      </div>
                      <div>
                        <h1
                          className={`font-bold text-lg ${
                            items.income ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {items.income ? "+" : "-"} ${items.price}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home