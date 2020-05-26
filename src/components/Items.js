import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { Table } from 'antd';


const Items = (props) => {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    fetch('http://127.0.0.1:4000/list')
      .then((data) => data.json())
      .then((data) => {
        setData(data.body);
      });
  }, []);

  const columns = [
    {
      title: 'Data Items',
      render: (record) => <span><Link to={`graph/${record._id}`}>{record.name}</Link></span>,
      width: '40%',
    },
  ];

  return (
    <div>
        <Table
          bordered
          rowKey="_id"
          dataSource={data}
          columns={columns}
        />
    </div>
  );
};

export default Items;
