import styles from './Schedule.module.css'
import Column from '../Column/Column'
import {Plan, NDay} from '../../data/data'

const ScheduleTable = () => {
  return (
    <div className={styles.ScheduleTable}>
        <Column 
          NDay={NDay}
          start={1} 
          title={"Day"} 
          Dias={true}/>
        {Plan.map(x => <Column 
                        NDay={NDay} 
                        start={x.cantidad} 
                        title={x.nombre}/>)}
    </div>
  )
}

export default ScheduleTable
