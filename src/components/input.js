import React, { useState } from 'react'

const Input = () => {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    
    const changeValueInput = (e) => {
        let name = e.target.name;
        if(name == "day"){
            setDay(e.target.value)
        }
        if(name == "month"){
            setMonth(e.target.value)
        }
        if(name == "year"){
            setYear(e.target.value)
        }
    }
    return (
        <div></div>
    )
}

export default Input