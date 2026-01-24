import React, { useState, useRef } from "react";
import "./DonateNow.css";

const DonateNow = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef = useRef(null);

  const bankDetails = [
    {
      label: "Foundation Name",
      value: "Fortunate Future International Foundation",
      isCopyable: false,
    },
    {
      label: "Account Number",
      value: "9338002100000547",
      isCopyable: true,
    },
    {
      label: "IFSC Code",
      value: "PUNB0933800",
      isCopyable: true,
    },
    {
      label: "Bank Name",
      value: "Punjab National Bank",
      isCopyable: false,
    },
  ];

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldName);
      setShowNotification(true);

      setTimeout(() => {
        setCopiedField(null);
        setShowNotification(false);
      }, 2000);
    });
  };

  const handleCopyAll = () => {
    const allDetails = bankDetails
      .map((detail) => `${detail.label}: ${detail.value}`)
      .join("\n");

    navigator.clipboard.writeText(allDetails).then(() => {
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    });
  };

  return (
    <div className="donate-page">
      {/* Background Decoration */}

      <div className="donate-container">
        {/* Header Section */}
        <div className="donate-header">
          <h1 className="donate-title">Support Our Mission</h1>
          {/* <p className="donate-subtitle">
            Your generosity helps us provide education and opportunities to
            those in need. Every contribution makes a real difference in
            transforming lives.
          </p> */}
        </div>

        {/* Donation Methods Grid */}
        <div className="donation-methods">
          {/* PhonePe Card */}
          <div className="payment-card phonepe-card">
            <div className="card-body">
              <div className="qr-container">
                <img
                  src="/images/qr.jpg"
                  alt="PhonePe QR Code"
                  className="qr-code"
                />
              </div>

              <p className="founder-name">
                FORTUNE FUTURE INTERNATIONAL FOUNDATION
              </p>
            </div>
          </div>

          {/* Bank Transfer Card */}
          <div className="payment-card bank-card">
            {/* <div className="card-header">
              <h2 className="card-title">Bank Transfer</h2>
              <p className="card-subtitle">Direct Transfer</p>
            </div> */}

            <div className="card-body">
              <p className="instruction-text">
                Transfer directly to our account using NEFT, RTGS, or IMPS
              </p>

              <div className="bank-details-list">
                {bankDetails.map((detail, index) => (
                  <div key={index} className="detail-item">
                    <div className="detail-header">
                      <span className="detail-label">{detail.label}</span>
                      {detail.isCopyable && (
                        <button
                          className={`copy-icon-btn ${
                            copiedField === detail.label ? "copied" : ""
                          }`}
                          onClick={() => handleCopy(detail.value, detail.label)}
                          title="Copy to clipboard"
                          aria-label={`Copy ${detail.label}`}
                        >
                          {copiedField === detail.label ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                              <rect
                                x="8"
                                y="2"
                                width="8"
                                height="4"
                                rx="1"
                                ry="1"
                              ></rect>
                            </svg>
                          )}
                        </button>
                      )}
                    </div>
                    <p
                      className={`detail-value ${
                        detail.isCopyable ? "copyable" : ""
                      }`}
                    >
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <button className="copy-all-btn" onClick={handleCopyAll}>
                Copy All Details
              </button>
            </div>
          </div>
        </div>

        {/* Why Donate Section */}

        {/* FAQ Section */}
      </div>

      {/* Notification Toast */}
      {showNotification && (
        <div className="notification-toast" ref={notificationRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>Copied to clipboard!</span>
        </div>
      )}
    </div>
  );
};

export default DonateNow;
