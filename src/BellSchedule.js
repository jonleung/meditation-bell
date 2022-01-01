import Sit from './Sit';

const BellSchedule = (props) => {

  function renderBellSchedule(props) {
    return (
      <>
        <h2 className="BellSchedule__description description">The bells will ring automatically at their scheduled times below. Click to disable a scheduled bell. Click again to re-enable.</h2>
        <table>
          <thead>
            <tr>
              <th>Start Bell</th>
              <th>End Bell</th>
            </tr>
          </thead>
          <tbody>
            {props.bellData.map((sit, i) => {
              return <Sit key={i} startTime={sit.start} endTime={sit.end} curMinutes={props.curMinutes} />;
            })}
          </tbody>
        </table>
      </>
    )
  }

  function renderNoData() {
    return (
      <>
        <h2 className="BellSchedule__description description">
          You have no automatic bells scheduled. To schedule bells, go
          to <a href="https://docs.google.com/spreadsheets/d/1O0OKyTaYcbuW6JEaE0SgoJ5g5D6oaQE3f2zLL1Ea75w/edit#gid=0">this Google Sheet</a> and
          follow the directions.
        </h2>
      </>
    )
  }

  const output = props.bellData.length === 0 ? renderNoData() : renderBellSchedule(props);

  return (
    <div className="BellSchedule">
      <h1 className="BellSchedule__title title">Automatic Bell Schedule</h1>
      {output}
    </div>
  )
}

export default BellSchedule;
