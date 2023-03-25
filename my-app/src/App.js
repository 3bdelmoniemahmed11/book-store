import "./App.css";
import AddForm from "./Components/AddForm";
import BookContainer from "./Components/Book/BookContainer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AddForm />
      <BookContainer />
    </div>
  );
}

export default App;
