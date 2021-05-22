import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import Axios from 'axios';
import Bowser from 'bowser';

import ModalMaps from './components/ModalMaps';

import Search from './assets/search.svg';
import Browser from './assets/browser-icon.png';
import IP from './assets/ip-icon.png';
import ISP from './assets/isp-icon.png';
import Back from './assets/left-arrow.svg';

import './App.css';

function App() {
  const [load, setLoad] = useState(false);
  const [dataIp, setDataIp] = useState({});
  const [data, setData] = useState(true);
  const [showMap, setShowMap] = useState(false);

  const getIpInfo = async () => {
    setLoad(true);
    await Axios.get(`https://api.ipdata.co?api-key=01926e9128be70e5edfda61cb3976e1fbf6a0bda3059eb9d50819063`)
      .then(response => {
        setLoad(false);
        setData(true);
        setDataIp(response.data);
      });
  }

  const goBack = () => {
    setData(false)
    setDataIp({})
  }

  const browserInfo = Bowser.getParser(window.navigator.userAgent);

  return (
    <div className="app">
      <ModalMaps showMaps={showMap} setShowMaps={setShowMap} data={dataIp} />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="app-wrapper">
        <motion.img 
          src={Search}
          className="landing-image"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        />
        <AnimatePresence exitBeforeEnter>
        {data &&
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="content2 d-flex flex-column  p-3" style={{ backgroundColor: "#eee2dc" }}>
            <div className="back-icon mb-3 mx-1" onClick={ () => goBack()} style={{ cursor: 'pointer' }}>
              <img src={Back} width="24px" height="24px" />
            </div>
            <div className="d-flex align-items-center" style={{ marginBottom: 20 }}>
                <img
                  src={Browser}
                  width="40px"
                  height="40px"
                />
                <span style={{ fontSize: 18, marginLeft: 15 }}>{ browserInfo.getBrowserName() }</span>
            </div>
              <div className="d-flex align-items-center" style={{ marginBottom: 20 }}>
                <img
                  src={IP}
                  width="40px"
                  height="40px"
                />
                <span style={{ fontSize: 18, marginLeft: 15 }}>{ dataIp.ip }</span>
            </div>
              <div className="d-flex align-items-center" style={{ marginBottom: 20 }}>
                <img
                  src={ISP}
                  width="40px"
                  height="40px"
                />
                <span style={{ fontSize: 18, marginLeft: 15 }}>{ dataIp.asn?.name }</span>
            </div>
            <button type="button" className="map-button" onClick={() => setShowMap(true)} >show maps</button>
            </motion.div>
        }
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
        {!data &&
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}} className="content d-flex flex-column justify-content-center">
                <span className="title">Click and See <br /> What Will You Get</span>
                <div className="search-btn d-flex justify-content-end w-100">
                  {load ?
                    <motion.button type='button' className="my-button" whileHover={{ boxShadow: "3px 3px rgba(0,0,0,.5)", y: -3 }} onClick={() => getIpInfo()}>
                      <Spinner animation="border" variant="primary" size="sm" style={{ marginRight: 8 }} />
                      <span>
                        Please Wait
                      </span>
                    </motion.button>
                    :
                    <motion.button type='button' className="my-button" whileHover={{ boxShadow: "3px 3px rgba(0,0,0,.5)", y: -3 }} onClick={() => getIpInfo()}>
                      <span>
                      Click Me &#10140;
                      </span>
                    </motion.button>
                    }
                </div>
              </motion.div>
          }
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
