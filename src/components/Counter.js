import classes from './Counter.module.css';

import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
//pass function inside useSelector(subscription to store)
 const counter= useSelector(state=>state.counter);
 const show= useSelector(state=>state.showCounter);
const dispatch=useDispatch();

const incrementHandler=()=>{
  dispatch({type:'increment'})
}

const increaseHandler=()=>{
  dispatch({type:'increase',amount:5})
}

const decrementHandler=()=>{
  dispatch({type:'decrement'})
}

  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
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

export default Counter;
