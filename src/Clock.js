const Clock = (props) => {
  return (
    <div className="Clock">
      <p className="Clock__text">{props.curTime.format("h:mm:ss a")}</p>
    </div>
  )
}

export default Clock;
