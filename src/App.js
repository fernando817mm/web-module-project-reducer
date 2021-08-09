import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers';
import { addOne, applyNumber, changeOperator, clearDisplay, addMemory, addMemoryToTotal, resetMemory } from './actions';

function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState);

  // const addOneHandler = () => {
  //   dispatch(addOne());
  // }

  const applyNumberHandler = num => {
    dispatch(applyNumber(num));
  }

  const changeOperatorHandler = (operator) => {
    dispatch(changeOperator(operator));
  }

  const clearDisplayHandler = () => {
    dispatch(clearDisplay());
  }

  const addMemoryHandler = (number) => {
    dispatch(addMemory(number));
  }

  const addMemoryToTotalHandler = () => {
    dispatch(addMemoryToTotal());
  }

  const resetMemoryHandler = () => {
    dispatch(resetMemory());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => {
                return addMemoryHandler(state.total)
              }}/>
              <CalcButton value={"MR"} onClick={() => {
                return addMemoryToTotalHandler();
              }}/>
              <CalcButton value={"MC"} onClick={() => {
                return resetMemoryHandler();
              }}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => {
                return applyNumberHandler(1);
              }}/>
              <CalcButton value={2} onClick={() => {
                return applyNumberHandler(2);
              }}/>
              <CalcButton value={3} onClick={() => {
                return applyNumberHandler(3);
              }}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => {
                return applyNumberHandler(4);
              }}/>
              <CalcButton value={5} onClick={() => {
                return applyNumberHandler(5);
              }}/>
              <CalcButton value={6} onClick={() => {
                return applyNumberHandler(6);
              }}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => {
                return applyNumberHandler(7);
              }}/>
              <CalcButton value={8} onClick={() => {
                return applyNumberHandler(8);
              }}/>
              <CalcButton value={9} onClick={() => {
                return applyNumberHandler(9);
              }}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => {
                return changeOperatorHandler('+');
              }}/>
              <CalcButton value={"*"} onClick={() => {
                return changeOperatorHandler('*');
              }}/>
              <CalcButton value={"-"} onClick={() => {
                return changeOperatorHandler('-');
              }}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => {
                return clearDisplayHandler();
              }}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
