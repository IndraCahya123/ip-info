import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Axios from 'axios';
import Bowser from 'bowser';

import './App.css';

function App() {
  const [load, setLoad] = useState(false);
  const [dataIp, setDataIp] = useState({});
  const [data, setData] = useState(false);

  const apiKey = "01926e9128be70e5edfda61cb3976e1fbf6a0bda3059eb9d50819063";

  const getIpInfo = async () => {
    setLoad(true);
    await Axios.get(`https://api.ipdata.co?api-key=01926e9128be70e5edfda61cb3976e1fbf6a0bda3059eb9d50819063`)
      .then(response => {
        setLoad(false);
        setData(true);
        setDataIp(response.data);
      });
  }

  const browserInfo = Bowser.getParser(window.navigator.userAgent);

  console.log(browserInfo.getBrowser());

  const className = {
    loadData: {
      style : "btn btn-success disabled"
    },
    successLoadData: {
      style: "btn btn-success"
    }
  }

  return (
    <div className="App">
      <button type="button" className={load ? className.loadData.style : className.successLoadData.style} onClick={() => getIpInfo()}>
        {
          load ?
            <>
              <Spinner animation="border" variant="danger" size="sm" style={{ marginRight: 8 }} />
              <span>Getting Data</span>
            </>
            :
            <span>Get Information</span>
        }
      </button>

      <div style={ data ? { display: 'block' } : {display : 'none'} }>
        <span>
          {
            JSON.stringify(dataIp)
          }
        </span>
      </div>
    </div>
  );
}

export default App;
