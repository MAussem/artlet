import React from 'react';

export default function FooterLinks() {
  return (
    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.9rem' }}>
      <a href="/PrivacyPolicy" style={{ color: '#000', textDecoration: 'none' }}>Privacy Policy</a>
      <a href="/TermsOfService" style={{ color: '#000', textDecoration: 'none' }}>Terms of Service</a>
    </div>
  );
}
