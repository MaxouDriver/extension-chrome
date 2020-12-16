import { useEffect, useState } from 'react';
import { Driver } from "./models/driver"
import './App.css';

function App() {
  const [driver, setDriver] = useState<Driver>()

  useEffect(() => {
    if (chrome && chrome.tabs)
      chrome.tabs.query({currentWindow: true, active:true}, tabs => {
        const tab = tabs[0];
        chrome.tabs.sendMessage(tab.id || 0, {from: "popup", subject: "getFullName"}, response => {
          setDriver(response)
        })
      })
  }, [])

  return (
    <div className="App">
      {
        driver && 
          <div>
            <h1>{driver?.name}</h1>
            <iframe src={`${driver?.insta}embed`} width="400" height="480" scrolling="no" ></iframe>
          </div>
      }
    </div>
  );
}

export default App;
