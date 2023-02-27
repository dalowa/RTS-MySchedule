import styles from './Column.module.css'

import { useState } from 'react'
import Day from '../Day/Day'


const Calculate = (start:number):number[] => {
    let ProgressDays:number[] = []
    for(let i:number = 0; i < 366; i++){
        ProgressDays.push(Math.round(start * Math.pow((1 + 0.01), i)))
    }
  return ProgressDays
}

type Propiedades = {
    start:number
    title:string
    Dias?: boolean
    NDay: number
}

const Column = ({start, title, Dias = false, NDay}:Propiedades) => {

    const [amount, setAmount] = useState(Calculate(start))

    
    return (
        <> 
        {!Dias?(
        <div className={styles.Column}>
            <h1 className={styles.title}>{title}</h1>
            {amount.map((x, n) => <Day NDay={NDay} 
                                       day={n} 
                                       progress={x}/>)}
        </div>
        ): (
        <div className={styles.Column}>
            <h1 className={styles.title}>{title}</h1>
            {amount.map((x, n) => <Day NDay={NDay} 
                                       day={n} 
                                       progress={x} 
                                       Is={Dias}/>)}
        </div>
        ) }
        
        </>
        
    )
}

export default Column