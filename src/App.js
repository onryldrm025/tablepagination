import React, { useState } from "react";

import "./App.css";

let data = [
  {
    id: "1",
    name: "onur",
    surname: "yıldırım",
  },
  {
    id: "2",
    name: "onur",
    surname: "yıldırım",
  },
  {
    id: "3",
    name: "onur",
    surname: "yıldırım",
  },
  {
    id: "4",
    name: "onur",
    surname: "yıldırım",
  },
  {
    id: "5",
    name: "onur",
    surname: "yıldırım",
  },
  {
    id: "6",
    name: "onur",
    surname: "yıldırım",
  },
  {
    id: "7",
    name: "onur",
    surname: "yıldırım",
  },
  {
    id: "8",
    name: "onur",
    surname: "yıldırım",
  },
  {
    id: "9",
    name: "onur",
    surname: "yıldırım",
  },
  {
    id: "10",
    name: "onur",
    surname: "yıldırım",
  },
  {
    id: "11",
    name: "onur",
    surname: "yıldırım",
  },
  {
    id: "12",
    name: "onur",
    surname: "yıldırım",
  },
  {
    id: "13",
    name: "onur",
    surname: "yıldırım",
  },
  {
    id: "14",
    name: "onur",
    surname: "yıldırım",
  },
  {
    id: "15",
    name: "onur",
    surname: "yıldırım",
  },
  {
    id: "16",
    name: "onur",
    surname: "yıldırım",
  },
];

function App() {
 

  const [page_number,setpage] = useState(0);

  const page_size = 5;

  var partdata = data.slice(
    page_number * page_size,
    page_number * page_size + page_size
  );

  const [mydata, setData] = useState(partdata);

  const pages = [...Array(Math.ceil(data.length / page_size)).keys()];

  const changePage = (page_number) => {
    var datas = data.slice(
      page_number * page_size,
      page_number * page_size + page_size
    );
    setData(datas);
    setpage(page_number)
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>surname</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((e, index) => (
            <tr key={index}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.surname}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pages">
        {pages.map((e, index) => (
          <div
            onClick={() => {
              changePage(e);
            }}
            className={`pages-item ${page_number === index ? 'active':''}`}
            key={index}
          >
            {e + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
