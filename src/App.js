import React from 'react'
import "./App.css";
import Sidebar from './Components/sidebar/Sidebar'
import Feed from './Components/feed/Feed';
import Widgets from './Components/widgets/Widgets';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  )
}
export default App