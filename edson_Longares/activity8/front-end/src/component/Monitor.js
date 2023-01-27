
function Monitor(props) {
    return (
      <div>
        <div className="queueNumberScreen">
        <span>This is your Queue</span>
        <br />
        <label className="queueNumber">{props.queueNum}</label>
        <p>Please wait on your queue to be called and proceed to your designated counter</p>
        <p className="thanks">Thanks for using My Queeing System</p>
        </div>
      </div>
    );
  }
  
  export default Monitor;