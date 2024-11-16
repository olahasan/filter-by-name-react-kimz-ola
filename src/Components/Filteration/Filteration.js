import React, { useState } from 'react';
import styles from './Filteration.module.css';


function Filteration({filteration}) {

  const[Filter, setFilter]= useState("");

    const filterHandler =(e) => {
        // console.log(e.target.value)
        const name = e.target.value
        setFilter(name);
        filteration(name);
    }

  return (
    <div>
        <form>
            <input type="text" placeholder="Search by Name" value={Filter} onChange={filterHandler} className={styles.inp}/>
        </form>
    </div>
  )
}

export default Filteration