import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';
import { Nickname, Clock, Button } from './test.js'

function App() {
  return (
    <div style={{ margin: 100 }}>
      <h1>AntDesign Demo</h1>
      <hr /><br />
      <DatePicker className="myclass" />
      <Nickname />
      <Clock date={new Date()} />
      <Button />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
