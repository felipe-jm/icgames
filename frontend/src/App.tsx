import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./hooks/auth";
import { Routes } from "./routes";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </AuthProvider>
  );
}

export default App;
