import React from 'react'
import { useRef } from 'react'

export default function NewCity() {
    let NewCityForm = useRef()
    let submit = (e) => {
        e.preventDefault ()
        let NewCity = {
            name:e.target[0].value,
            continent:e.target[1].value,
            photo:e.target[2].value,
            population:e.target[3].value
        }
        localStorage.setItem("NewCity",JSON.stringify(NewCity))
        NewCityForm.current.reset ()
        console.log(NewCity);
    }
  return (
    <div>
        <div className='containerNewCity'>
        <form ref={NewCityForm} onSubmit={submit} className='containerFormCities'>

            <label className="labelNewCity"> Name of city
                <input className=".inputSignUp" type="text" placeholder="Enter name of city"/>
            </label>

            <label className="labelNewCity"> Continent
                <input className=".inputSignUp" type="text" placeholder="Enter Continent"/>
            </label>

            <label className="labelNewCity"> Photo
                <input className=".inputSignUp" type="file"  placeholder="Enter photo"/>
            </label>

            <label className="labelNewCity"> Population
                <input className=".inputSignUp" type="text" placeholder="Enter population"/>
            </label>
            <button className='botonSubmit'>Send</button>
            
            </form>
        </div>
        
    </div>
  )
}
