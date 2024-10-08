
import React from 'react';
import './history.css'; 

function History() {
  // Sample transaction data
  const transactions = [
    { id: 1, icon: 'mobile-topup-icon.png', title: 'Mobile Topup', date: 'Mar 27, 2024', amount: '3,000', isPositive: false },
    { id: 2, icon: 'withdrawal-icon.png', title: 'Withdrawal', date: 'Mar 12, 2024', amount: '70,000', isPositive: false },
    { id: 3, icon: 'internet-bill-icon.png', title: 'Internet Bill', date: 'Mar 1, 2024', amount: '50,000', isPositive: false },
    { id: 4, icon: 'ajo-topup-icon.png', title: 'Ajo Iya Bukky', date: 'Feb 28, 2024', amount: '150,000', isPositive: true },
    { id: 5, icon: 'cash-deposit-icon.png', title: 'Cash Deposit', date: 'Jan 31, 2024', amount: '1,500,000', isPositive: true },
  ];

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header1">
        <h1> <a href="home" className='btag'> ← </a>  History</h1>
        <div className="filter-icon">
          <img src="filter-icon.png" alt="filter" />
        </div>
      </header>

      {/* Transactions List */}
      <div className="transaction-list">
        <h2>March</h2>
        {transactions.slice(0, 3).map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-icon">
              <img src={transaction.icon} alt="icon" />
            </div>
            <div className="transaction-details">
              <div className="transaction-title">{transaction.title}</div>
              <div className="transaction-date">{transaction.date}</div>
            </div>
            <div className={`transaction-amount ${transaction.isPositive ? 'positive' : 'negative'}`}>
              {transaction.isPositive ? '+' : '-'}{transaction.amount}
            </div>
          </div>
        ))}

        <h2>February</h2>
        {transactions.slice(3, 4).map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-icon">
              <img src={transaction.icon} alt="icon" />
            </div>
            <div className="transaction-details">
              <div className="transaction-title">{transaction.title}</div>
              <div className="transaction-date">{transaction.date}</div>
            </div>
            <div className={`transaction-amount ${transaction.isPositive ? 'positive' : 'negative'}`}>
              {transaction.isPositive ? '+' : '-'}{transaction.amount}
            </div>
          </div>
        ))}
    <br />
        <h2>January</h2>
        {transactions.slice(4, 5).map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-icon">
              <img src={transaction.icon} alt="icon" />
            </div>
            <div className="transaction-details">
              <div className="transaction-title">{transaction.title}</div>
              <div className="transaction-date">{transaction.date}</div>
            </div>
            <div className={`transaction-amount ${transaction.isPositive ? 'positive' : 'negative'}`}>
              {transaction.isPositive ? '+' : '-'}{transaction.amount}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navbar */}
      <div className="navbar">
        <div className="nav-item">Home</div>
        <div className="nav-item">Calendar</div>
        <div className="nav-item">Search</div>
        <div className="nav-item">Messages</div>
        <div className="nav-item">Profile</div>
      </div>
    </div>
  );
}

export default History;
