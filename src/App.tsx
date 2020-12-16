import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    if (chrome && chrome.tabs)
      chrome.tabs.query({currentWindow: true, active:true}, tabs => {
        console.log("tabs", tabs)
        const tab = tabs[0];
        chrome.tabs.sendMessage(tab.id || 0, {from: "popup", subject: "getFullName"}, response => {
          console.log("response", response)
        })
      })
  })


  return (
    <div className="App">
      Hello wolrd
    </div>
  );
}

export default App;
