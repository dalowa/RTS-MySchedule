import styles from './Day.module.css'
import { NDay } from './../../data/data'
import { useState } from 'react'

type Parameters = {
    progress: number,
    day: number
    Is?: boolean
    NDay: number
}

const Day = ({progress, day, Is = false, NDay}:Parameters) => {
     const [Mark, setMark] = useState<string>(`${styles.SToday}`)
     const onClick = () => {
        if(day === NDay){
            setMark(`${styles.SToday} ${styles.Checked}`)
        }
     }


    return (
    <>
        {!Is? (
            <div className={`${day < NDay?styles.Done:styles.NotDone} ${day === NDay?Mark:styles.SNo}`} onClick={onClick}>
                <p className={styles.texto}>{progress}</p>
            </div>
        ):
            <div className={`${day < NDay?styles.Done:styles.NotDone} ${styles.Different} ${day == NDay?styles.SToday:styles.SNo}`} id={day.toString()}>
                <p className={styles.texto}>{`N° ${day}`}</p>
            </div>}
        
    </>
    )
}

export default Day