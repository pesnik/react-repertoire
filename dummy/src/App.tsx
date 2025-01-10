import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [closedByParent, setClosedByParent] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log("[Child] Received message:", event.data, "from", event.origin);

      if (event.data.type === "close-from-parent") {
        console.log("[Child] Received close command from parent");
        setClosedByParent(true);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleClose = () => {
    console.log("[Child] Requesting close from parent");
    window.parent.postMessage(
      { type: "close-request" },
      "*"
    );
  };

  if (closedByParent) {
    return <div>Closing by parent request...</div>;
  }

  return (
    <div>
      <h1>Transaction Iframe</h1>
      <button onClick={handleClose}>Close Child</button>
    </div>
  );
};

export default App;