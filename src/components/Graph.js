import React, { useState } from 'react';
import { useParams } from "react-router-dom";

import { MiniArea } from 'ant-design-pro/lib/Charts';



const Graph = () => {
  const [graphData, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const chartData = [];

  React.useEffect(() => {
    setLoading(true)
    fetch(`http://127.0.0.1:4000/list/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.body)
        setLoading(false)
      });
  }, [id]);


  const { name } = graphData;
  if (!isLoading) {
    const { data } = graphData;
    for (let i = 0; i < data.length; i += 1) {
      chartData.push({
        x: data[i].Dates,
        y: data[i].Forecast,
      });
    }
  }

  return isLoading ? (<h1>Loading...</h1>) : (
    <div>
      <h2>
        {name}
      </h2>
      <MiniArea line color="#cceafe" height={400} data={chartData} />;
    </div>
  );

};

export default Graph;