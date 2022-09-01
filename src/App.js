import './App.css';
import React, { useState, useEffect } from 'react'


function App() {

    const height = window.innerHeight+"px"
    const width = window.innerWidth+"px"

  return (
    <div className="App">
      <embed className='pdf' height={height} width={width} src="https://s3-bucket-cfp.s3.us-east-2.amazonaws.com/apps_CFPVD.pdf" />
    </div>
  );
}

export default App;
