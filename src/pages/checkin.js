import React from 'react';
import Layout from '@theme/Layout';

export default function CheckInPage() {
  return (
    <Layout
      title="Workshop Check-In"
      description="WMAC 2026 Workshop Attendee Check-In"
    >
      <main style={{ padding: '2rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>WMAC 2026 Check-In</h1>
          <p style={{ fontSize: '1.1rem', color: '#4c566a', marginBottom: '2rem' }}>
            Please check in to receive your workshop goodies!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf3KJm-mjQ_bGPOp6m3WLQtUtV_9BmXNtsk-1eythpmctdmlg/viewform?embedded=true"
              width="640"
              height="819"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              style={{ maxWidth: '100%', border: 'none' }}
            >
              Loading...
            </iframe>
          </div>
        </div>
      </main>
    </Layout>
  );
}
