import classes from './Counter.module.css';

import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from './store';

const Counterredux = () => {
//pass function inside useSelector(subscription to store)
 const counter= useSelector(state=>state.counter.counter);
 const show= useSelector(state=>state.counter.showCounter);
const dispatch=useDispatch();

const incrementHandler=()=>{
  dispatch(counterActions.increment());
}

const increaseHandler=()=>{
  dispatch(counterActions.increase(5))
}

const decrementHandler=()=>{
  dispatch(counterActions.decrement())
}

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    {show &&  <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={incrementHandler}>+</button>
      <button onClick={increaseHandler}>Increase by 5</button>
      <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counterredux;
