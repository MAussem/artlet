import React from 'react';
import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Privacy Policy</h1>
      <p className={styles.lastUpdated}>Last Updated: August 8, 2024</p>

      <p>Artlet ("App") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your information during the beta testing phase of our App. By participating in this beta testing program, you agree to the terms outlined in this Privacy Policy.</p>

      <h2 className={styles.subheading}>1. Information We Collect</h2>
      <p>During the beta testing phase, we may collect the following types of information:</p>
      <ul className={styles.list}>
        <li><strong>Personal Information:</strong> Information that can be used to identify you, such as your name, email address, and other contact details.</li>
        <li><strong>Usage Data:</strong> Information about your use of the App, including crash reports, performance data, usage statistics, and feedback.</li>
        <li><strong>Device Information:</strong> Information about the device you use to access the App, such as device type, operating system, and unique device identifiers.</li>
      </ul>

      <h2 className={styles.subheading}>2. How We Use Your Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul className={styles.list}>
        <li><strong>To Improve the App:</strong> To identify and fix bugs, improve functionality, and enhance the overall user experience.</li>
        <li><strong>To Communicate with You:</strong> To send you updates, feedback requests, and other communications related to the beta testing program.</li>
        <li><strong>To Analyze Usage:</strong> To understand how the App is being used and to identify areas for improvement.</li>
      </ul>

      <h2 className={styles.subheading}>3. Sharing Your Information</h2>
      <p>We may share your information with the following parties:</p>
      <ul className={styles.list}>
        <li><strong>Service Providers:</strong> Third-party service providers who assist us in operating the App and analyzing data. These providers are bound by confidentiality agreements and are only allowed to use your information as necessary to perform their services.</li>
        <li><strong>Legal Requirements:</strong> If required by law, we may disclose your information to comply with legal obligations, protect our rights, or respond to lawful requests from public authorities.</li>
      </ul>

      <h2 className={styles.subheading}>4. Data Security</h2>
      <p>We take reasonable measures to protect your information from unauthorized access, loss, or misuse. However, no security measures are completely foolproof, and we cannot guarantee the absolute security of your information.</p>

      <h2 className={styles.subheading}>5. Data Retention</h2>
      <p>We will retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>

      <h2 className={styles.subheading}>6. Your Rights</h2>
      <p>You have the following rights regarding your personal information:</p>
      <ul className={styles.list}>
        <li><strong>Access:</strong> You have the right to request access to the personal information we hold about you.</li>
        <li><strong>Correction:</strong> You have the right to request that we correct any inaccurate or incomplete information about you.</li>
        <li><strong>Deletion:</strong> You have the right to request that we delete your personal information, subject to certain legal exceptions.</li>
        <li><strong>Objection:</strong> You have the right to object to the processing of your personal information in certain circumstances.</li>
      </ul>

      <h2 className={styles.subheading}>7. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated Privacy Policy on our App and updating the "Last Updated" date. Your continued use of the App after any changes indicates your acceptance of the updated Privacy Policy.</p>

      <h2 className={styles.subheading}>8. Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at [Your Contact Information].</p>

      <p>By participating in the beta testing program, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy.</p>
    </div>
  );
}
