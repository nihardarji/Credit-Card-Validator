import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import CreditCardForm from "./components/CreditCardForm";
import CreditCardsList from "./components/CreditCardsList";

export default function App() {
  return (
    <div className="App">
      <CreditCardsList />
      {/* <CreditCardForm /> */}
    </div>
  );
}
