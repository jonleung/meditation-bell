const Clock = (props) => {
  return (
    <div className="clock-container">
      <p className="clock">{props.curTime.format("h:mm:ss a")}</p>
    </div>
  )
}

export default Clock;
