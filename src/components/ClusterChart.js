import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ClusterChart({ data }) {
  return (
    <>
      <div className="white_card mb_30 card_height_100">
        <div className="white_card_header">
          <div className="box_header m-0">
            <div className="main-title">
              <h3 className="m-0">Clusters Health</h3>
            </div>
          </div>
        </div>
        <div className="white_card_body">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                label={{
                  value: "Pourcentage",
                  angle: -90,
                  position: "insideLeft",
                }}
              />

              <Tooltip cursor={false} />
              <Legend />
              <Line type="monotone" dataKey="pourcentage" stroke="#52d7ed" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default ClusterChart;
