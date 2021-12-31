import ManualBell from './ManualBell';

const ManualBells = (props) => {
  return (
    <div className="ManualBells">
      <h1 className="ManualBells__title title">Manually Ring Bells</h1>
      <h2 className="ManualBells__description description">Click the buttons below to ring the bell outside of the automatic schedule.</h2>
      <ManualBell type="start" />&nbsp;<ManualBell type="end" />
    </div>
  )
}

export default ManualBells;
