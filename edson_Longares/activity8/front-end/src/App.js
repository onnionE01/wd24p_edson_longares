import axios from "axios";
import logo from './logo.svg';
import './App.css';
import './animatedFooter.css';
import {useState, useEffect} from "react";
import MonitorBtn from "./component/MonitorBtn";
import Monitor from "./component/Monitor";
import Counter from "./component/Counter";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

const laravelController="queue"

function App() {

  const [data, setData] =useState([]);
  const [newQueue, setNewQueue] =useState();
  const [qType, setQType] =useState("");

  useEffect(()=> {
      index();
  },[]);

  async function index(){
     const result = axios.get(process.env.REACT_APP_API + laravelController)
     .then((response) => {
      setData(response.data);
      if (data.length > 0 ) {
        setNewQueue("001");
      } else {
        let que=data.length+1;
        setNewQueue( "00" + que);
      }
     })
  }

  async function store() {

    const payload = {
        queueNum : newQueue,
        qType:qType,
        qStatus : "queued"
    }

    axios.post(process.env.REACT_APP_API + laravelController, payload)
        .then((response) => {

            if (response.status === 201) 
            {
                alert("Successfully saved")
                index();
            } else 
            {
                alert("Not saved")
            }
        })
    } 

    const handleSaveReg = () => {
      setQType("Regular");
      store();
    }

    const handleSavePrior = () => {
      setQType("Priority");
      store();
    }

  return (
    <div className='Container'>
      <div className="row p4">
        <div className="col-sm-5 Monitor ">
          <MonitorBtn type="button"  onClick={handleSaveReg} btnName='Regular' btnMonitorstyle='regular'  />
          <MonitorBtn type="button" onClick={handleSavePrior} btnName='Senior/PWD' btnMonitorstyle='priority' />
          <Monitor queueNum={newQueue}/>
        </div>
        <div className="col-sm Counter1">
          <Counter counterNum='COUNTER 1' currentQueueNum='001' cBtnName='NEXT' tally='Total Served: 10'/>
        </div>
        <div className="col-sm Counter2">
          <Counter counterNum='COUNTER 2' currentQueueNum='002' cBtnName='TRANSFER' tally='Total Pending: 5'/>
        </div>
        <div className="col-sm Counter3">
          <Counter counterNum='COUNTER 3' currentQueueNum='009' cBtnName='SERVE' tally='Over all Total 15'/>
        </div>
      </div>
      <div className="fixed-bottom bounce">
        <p className='bounce'>WELCOME TO MY QUEUING SYSTEM COUNTER</p>
      </div>

    </div>
  );
}

export default App;
