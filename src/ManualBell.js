import useSound from 'use-sound';
import bellStart from './sounds/bell_start.mp3'; //3x
import bellEnd from './sounds/bell_end.mp3'; //1x

const ManualBell = (props) => {
  const bellSound = props.type === 'start' ? bellStart : bellEnd;
  const [playSound] = useSound(bellSound);

  const typeString = props.type === "start" ? "Start" : "End"

  return (
    <button onClick={playSound}>Manual {typeString}</button>
  )
}

export default ManualBell;
