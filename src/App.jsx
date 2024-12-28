import { useState } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import "./App.css";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to My Website</h1>
        <p>Feel free to chat with us via Messenger!</p>
      </div>
      <MessengerCustomerChat
        pageId="100067082604223"
        appId="562459639960325"
        language="en_US"
        themeColor="#0084ff"
        greetingDialogDisplay="show"
      />
    </div>
  );
}

export default App;
