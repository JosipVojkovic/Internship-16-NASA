import { useOutletContext } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./NeoStatsPage.css";

type OutletContext = {
  chartData: any[];
};

export function NeoStatsPage() {
  const { chartData } = useOutletContext<OutletContext>();

  return (
    <div className="visualization-section">
      <h2>NEO Statistics Overview</h2>
      <div className="charts-container">
        <div className="chart-wrapper">
          <h3>NEOs per Date</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" name="Total NEOs" />
              <Bar
                dataKey="hazardous"
                fill="#ff4d4d"
                name="Potentially Hazardous"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
