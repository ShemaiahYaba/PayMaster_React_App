
import React from 'react';

const Profile = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.backArrow}>←</div>
        <div style={styles.editIcon}>✎</div>
      </div>

      {/* Profile Info Section */}
      <div style={styles.profileInfo}>
        <img
          src="https://via.placeholder.com/100" // Placeholder image, replace with actual avatar URL
          alt="Profile"
          style={styles.avatar}
        />
        <h2 style={styles.name}>Wasiu John</h2>
        <p style={styles.email}>wasiujohn@gmail.com</p>

        {/* Stats Section */}
        <div style={styles.stats}>
          <div style={styles.statItem}>
            <p style={styles.statNumber}>5</p>
            <p style={styles.statLabel}>Joined Pools</p>
          </div>
            <hr />
          <div style={styles.statItem}>
            <p style={styles.statNumber}>1</p>
            <p style={styles.statLabel}>Created Pools</p>
          </div>
        <hr />
          <div style={styles.statItem}>
            <p style={styles.statNumber}>473</p>
            <p style={styles.statLabel}>Ajo Points</p>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div style={styles.menu}>
        <MenuItem label="Profile" />
        <MenuItem label="Bookmarked" />
        <MenuItem label="Your pools" />
        <MenuItem label="Settings" />
        <MenuItem label="Create pool" />
      </div>
    </div>
  );
};

// Menu Item Component
const MenuItem = ({ label }) => (
  <div style={styles.menuItem}>
    <p>{label}</p>
    <span>→</span>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'black',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '0 20px',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '60px',
    boxSizing: 'border-box',
  },
  backArrow: {
    fontSize: '24px',
    cursor: 'pointer',
  },
  editIcon: {
    fontSize: '24px',
    cursor: 'pointer',
  },
  profileInfo: {
    marginTop: '80px',
    textAlign: 'center',
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    backgroundColor: 'white',
    color: 'black',
    margin: '10px 0',
  },
  email: {
    fontSize: '16px',
    color: '#888',
    marginBottom: '20px',
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    // maxWidth: '100%',
    marginBottom: '20px',
  },
  statItem: {
    textAlign: 'center',
    width: '50%',

  },
  statNumber: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: '14px',
    color: '#888',
  },
  menu: {
    width: '100%',
    // color: 'black',
    maxWidth: '400px',
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 20px',
    borderBottom: '1px solid #eee',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'normal',
  },
};

export default Profile;
