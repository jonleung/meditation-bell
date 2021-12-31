import ManualBell from './ManualBell';

const ManualBells = (props) => {
  return (
    <div className="ManualBells">
      <ManualBell type="start" />
      <ManualBell type="end" />
    </div>
  )
}

export default ManualBells;
