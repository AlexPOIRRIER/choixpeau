import React, { useEffect, useState} from 'react';
import { connect } from "react-redux";
import Message from '../components/Message';

const mapStateToProps = (store) => store;

const Result = ({dispatch, selectedHouses, houses}) => {
  const [intervalId, setIntervalId] = useState()

  const random = () => {
    dispatch({
      type: 'default',
    })
  }

  const handleAction = () => {
    clearInterval(intervalId);
    setIntervalId(() => setInterval(() => dispatch({
      type : "UPDATE_CHOICE_WITH_MY_INDEX",
      indexSelected: Math.floor(Math.random()  *  4)
    }), 1000))    
  }

  useEffect(()=>{
    setIntervalId(() => setInterval(random, 1000))
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
        <ul>
        {houses.map(house  =>  <li  key={house}>{house}</li>)}
        </ul>
        <Message message={selectedHouses}  />
        <button onClick={handleAction}>SWITCH ACTION</button>
    </div>
  )}

export default connect(mapStateToProps)(Result)

