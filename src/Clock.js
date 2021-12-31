const Clock = (props) => {
  return (
    <div className="Clock">
      <h1 className="Clock__title title">Time</h1>
      <p className="Clock__text">{props.curTime.format("h:mm:ss a")}</p>
    </div>
  )
}

export default Clock;
