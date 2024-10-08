
import React from 'react';

const TopUp = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.backArrow}>←</div>
        <div style={styles.title}>Top Up</div>
      </div>

      {/* Balance Display */}
      <div style={styles.balanceContainer}>
        <div style={styles.balanceLabel}>Balance</div>
        <div style={styles.balanceAmount}>₦0</div>
      </div>

      {/* Payment Method Section */}
      <div style={styles.paymentMethodContainer}>
        <div style={styles.paymentMethodLabel}>Select payment method</div>
        <a href="top" className='btag'>  <button style={styles.paymentButton}>Card</button> </a>
        <a href="transfer" className='btag'>  <button style={styles.paymentButton}>Transfer</button></a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#000',
    color: '#fff',
  },
  header: {
    width: '100%',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  backArrow: {
    fontSize: '24px',
    cursor: 'pointer',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  balanceContainer: {
    marginTop: '100px',
    textAlign: 'center',
  },
  balanceLabel: {
    fontSize: '18px',
    color: '#aaa',
    marginBottom: '10px',
  },
  balanceAmount: {
    fontSize: '48px',
    fontWeight: 'bold',
  },
  paymentMethodContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '400px',
    textAlign: 'center',
    marginTop: '40px',
  },
  paymentMethodLabel: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#000',
  },
  paymentButton: {
    width: '100%',
    padding: '15px',
    margin: '10px 0',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default TopUp;
