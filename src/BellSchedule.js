import Sit from './Sit';

const BellSchedule = (props) => {

  return (
    <div className="BellSchedule">
      <h1 className="BellSchedule__title title">Automatic Bell Schedule</h1>
      <h2 className="BellSchedule__description description">The bells will ring automatically at their scheduled times below:</h2>
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
    </div>
  )
}

export default BellSchedule;
