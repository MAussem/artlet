import React from 'react';
import SubscribeForm from '../pages/SubscribeForm';
import styles from './page.module.css';


export default function Page() {
  return (
    <div className={styles.container} style={{
      width: '100vw',
      height: '100vh',
      backgroundImage: 'url("/bg.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'Work Sans, sans-serif'
  }}>
      <main className={styles.main}>
        <h1 style={{ marginBottom: '0.5rem' }}>Artlet</h1> 
        <h3 style={{ marginTop: '0' }}>Discover, Connect, Collect!</h3> 
        <SubscribeForm />
      </main>
    </div>
  );
}
