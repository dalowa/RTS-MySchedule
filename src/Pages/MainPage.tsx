import React from 'react'
import ScheduleTable from '../components/ScheduleTable/ScheduleTable';
import {NDay} from './../data/data'
import styles from './MainPage.module.css'

const MainPage = () => {
  return (
    <div className={styles.contenedor}>
        <h1 id='TITULO' className={styles.titulo}>365 DAY ROUTINE</h1>
        <a className={styles.enlace} href={`#${NDay}`}>{`TODAY IS N° ${NDay}`}</a>
        <ScheduleTable></ScheduleTable>
        
    </div>
  )
}

export default MainPage;