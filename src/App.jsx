import { useState } from 'react'
import './App.css'



function App() {

  const [temperature, setTemperature] = useState(15)
  const [displayCol, setDisplayCol] = useState('normal')

  const increaseTemperature = () => {

    setTemperature(temperature + 1)

    if(temperature >= 19) {
      setDisplayCol("hot")
    }
    else if(temperature >= 9){
      setDisplayCol("normal")
    }
  }

  const decreaseTemperature = () => {

    setTemperature(temperature - 1)

    if(temperature <= 20 && temperature > 11) {
      setDisplayCol("normal")
    }
    else if(temperature < 12){
      setDisplayCol("cold")
    }
  }

  return (
  <>
    <main>
      <section className={`displaySection ${displayCol}`}>
        {temperature}&deg;C
      </section>
      
      <section className='buttonSection'>
        <button onClick={increaseTemperature} className=''>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </section>
    </main>
  </> 
)
}

export default App
