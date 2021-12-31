import Sit from './Sit';

const BellSchedule = (props) => {
  return (
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
  )
}

export default BellSchedule;
