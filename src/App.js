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
      src="https://cfpvd.s3.ca-central-1.amazonaws.com/apps_CFPVD.pdf"
      frameBorder="0"
      scrolling="auto"
      />
    </div>
  )
}

export default App
