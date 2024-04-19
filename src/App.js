import { useReducer } from "react";
import "./App.css";


const initialState={
  balance:0,
  loan: 0,
  isActive:false
}

function reducer(state,action){
  switch(action.type){
    case 'openAccount':
      return ''
    case 'deposite' :
      return '' 
    case 'withDraw' :
      return ''  
    case 'reuestLoan':
      return ''
    case 'payLoan' :
      return ''
    case 'closeAccount' :
      return ''  
  }

}

export default function App() {
  const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: X</p>
      <p>Loan: X</p>

      <p>
        <button onClick={() => {}} disabled={false}>
          Open account
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Deposit 150
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Withdraw 50
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Pay loan
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Close account
        </button>
      </p>
    </div>
  );
}
