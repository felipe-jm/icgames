import { Router } from "react-router-dom";

import { AuthProvider } from "./hooks/auth";
import { Routes } from "./routes";

import GlobalStyle from "./styles/global";

import { history } from "./services/history";

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </AuthProvider>
  );
}

export default App;
