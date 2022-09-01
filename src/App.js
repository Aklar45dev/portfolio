import './App.css'

function App() {

    const height = window.innerHeight+"px"
    const width = window.innerWidth+"px"

  return (
    <div className="App">
      <iframe
       className='pdf' 
       height={height} 
       width={width}
      src="https://s3-bucket-cfp.s3.us-east-2.amazonaws.com/apps_CFPVD.pdf"
      frameBorder="0"
      scrolling="auto"
      />
    </div>
  )
}

export default App
