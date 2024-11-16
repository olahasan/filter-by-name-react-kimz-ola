import React from 'react';
import Delete from '../Delete/Delete';
import styles from './ShowAllData.module.css';


function ShowAllData({data, deleteHandler }) {
    const all = data.map(({id,name, age, adresse, gender}, index) => {
        return (
            // {/* // <div key={index} className={styles.allWrapper} className={gender === "Female" ? styles.pink : styles.blue}> */}
            <div key={Math.random()} className={`${styles.allWrapper} ${gender === "Female".toLocaleLowerCase() ? styles.pink : styles.blue}`} >
                <div className={styles.bold}>the Name is: <span className={styles.nor}>{name}</span></div>
                <div className={styles.bold}>the Age is: <span className={styles.nor}>{age}</span></div>
                <div className={styles.bold}>the Adresse is: <span className={styles.nor}>{adresse}</span></div>
                <div className={styles.bold}>the Gender is: <span className={styles.nor}>{gender}</span></div>
                <Delete deleteHandler={deleteHandler} index={index} id={id}/>
            </div>
        )
    })

  return (
    <div className={styles.finally}>
        {all}
    </div>
  )
}

export default ShowAllData


