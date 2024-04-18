import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <div>
          <ThemeSwitcher />
          <UserForm />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
