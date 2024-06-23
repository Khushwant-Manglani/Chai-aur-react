import Hello from "./Hello";

function App() {
  const username = "Ajay";
  return (
    <>
      <Hello /> {2 + 2}
      <span> from Vite app. {username === "Ajay" ? "Hiii" : ""}</span>
    </>
  );
}

export default App;
