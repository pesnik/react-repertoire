import React, { useState, useEffect, useRef } from "react";
import "./Transaction.css";

const IFRAME_URL = "http://localhost:5174";

const Transaction: React.FC = () => {
  const [showIframe, setShowIframe] = useState<boolean>(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleCloseIframe = () => {
    console.log("[Parent] Initiating close from parent");
    // Send message before changing state
    if (iframeRef.current?.contentWindow) {
      console.log("[Parent] Sending close message to child");
      // Try with * first to debug
      iframeRef.current.contentWindow.postMessage(
        { type: "close-from-parent" },
        "*"
      );
    }
    // Delay the actual closing slightly to allow message to be sent
    setTimeout(() => {
      setShowIframe(false);
    }, 100);
  };

  useEffect(() => {
    console.log("[Parent] Setting up message listener");

    const handleMessage = (event: MessageEvent) => {
      console.log("[Parent] Received message:", event.data, "from", event.origin);

      if (event.data.type === "close-request") {
        handleCloseIframe();
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="transaction-page">
      <h1>Transaction</h1>
      {showIframe && (
        <div className="iframe-container">
          <iframe
            ref={iframeRef}
            src={IFRAME_URL}
            title="Transaction Iframe"
            width="100%"
            height="500px"
          />
          <button 
            onClick={handleCloseIframe} 
            className="close-button"
          >
            Close Parent
          </button>
        </div>
      )}
      {!showIframe && <p>Iframe closed. Click "Transaction" to reopen.</p>}
    </div>
  );
};

export default Transaction;