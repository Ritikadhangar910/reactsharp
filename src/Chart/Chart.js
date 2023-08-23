import "../Chart/Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPointValue = props.showPoints.map((showpoint) => showpoint.value);
  const maxvalue = Math.max(...dataPointValue);
  return (
    <>
      <div className="chart">
        {props.showPoints.map((showPoint) => (
          <ChartBar
            key={showPoint.label}
            value={showPoint.value}
            maxValue={maxvalue}
            label={showPoint.label}
          />
        ))}
      </div>
    </>
  );
};
export default Chart;
