import React from 'react';
import styles from './Delete.module.css';

function Delete({deleteHandler,index , id}) {
  return (
    // بتاع الطريقه الثانيه
    <div   className={styles.del} onClick={(e)=>deleteHandler(e,id)}  >X</div>

    // بتاع الطريقه الأولى بتاع الإندكس
    // <div className={styles.del} onClick={(e)=>deleteHandler(e,index)}>X</div>
  )
}

export default Delete

