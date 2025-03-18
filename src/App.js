import React, { use, useState } from 'react';
import './App.scss';
import buttonIcon from "./assets/icon-arrow.svg"
function App() {

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const[days, setDays] = useState("--");
  const[months, setMonths] = useState("--");
  const[years, setYears] = useState("--");

  const onlyNumbersRegEx = /^-?\d+$/
  const handleInputChange = (e) => {
    let name = e.target.name;
    let value= e.target.value ;
    if (onlyNumbersRegEx.test(value) || value == ""){
      if(name =="day"){
        
        setDay(value)
      }
      if(name =="month"){
        setMonth(value)
      }
      if(name =="year"){
        setYear(value)
      }
      
    }
  }

  const getDate = () => {
    let inputDate =  new Date(`${month}-${day}-${year}`)
    let todayDate = new Date()
    const diferenciaMilisegundos = todayDate - inputDate;
    
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30.44;
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    
    const años = diferenciaMilisegundos / millisecondsInYear 
    
    const meses = (diferenciaMilisegundos % millisecondsInYear) / millisecondsInMonth
    const dias = ((diferenciaMilisegundos % millisecondsInYear) % millisecondsInMonth) / millisecondsInDay
    
    
    setYears(Math.floor(años))
    setMonths(Math.floor(meses))
    setDays(Math.floor(dias))
  }
  return (
    <div className="App">
      <div className='main-container'>

          <div className='form'>
            
            <div className='inputs-container'>
              < div className='input-field'>
                <label >
                  Dia
                </label>
                <input name="day" placeholder='DD' type='text' value={day} onChange={e=>handleInputChange(e)}></input>

              </div>
              
              <div className='input-field'>
                <label>
                  Mes
                </label>
                <input name="month" placeholder='MM' type='number' value={month} onChange={e=>handleInputChange(e)}></input>
              </div>
              
              <div className='input-field'>
                <label>
                  Año
                </label>
                <input name="year" placeholder='YYYY' type='number' value={year} onChange={e=>handleInputChange(e)}></input>

              </div>

            </div>
            
            <div className='button' onClick={()=>getDate()}>
              <img src={buttonIcon} alt="icon" />
            </div>
          </div>


          <div className='result-container'>
            <div> 
              <p>
                <span>{years}
                </span> años</p>
            </div>
            
            <div> 
              <p><span>{months}</span> meses</p>
            </div>
            
            <div> 
              <p><span>{days}</span> dias</p>
            </div>
            
          </div>
      </div>
    </div>
  );
}

export default App;
