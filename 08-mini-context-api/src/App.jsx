import UserProvider from "./context/UserProvider";
import { Login, Profile } from "./components";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Login />
      <Profile />
    </UserProvider>
  );
}

export default App;
