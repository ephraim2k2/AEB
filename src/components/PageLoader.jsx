import React from 'react';

export default function PageLoader({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="page-loader-overlay">
      <div className="page-loader-progress-bar"></div>
      <div className="page-loader-card">
        <div className="loader-spinner-solo"></div>
        <span className="loader-subtitle">Loading...</span>
      </div>
    </div>
  );
}
