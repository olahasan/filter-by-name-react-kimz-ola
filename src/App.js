import { useState } from 'react';
import ShowAllData from './Components/ShowAllData/ShowAllData';
import styles from './App.module.css';
import Modal from './Components/Modal/Modal';
import Filteration from './Components/Filteration/Filteration';

function App() {
  
  const [data, setData] = useState([
    {
      id: 1,
      name: 'John',
      age: 25,
      adresse : 'cairo',
      gender: 'Male'
    },
    {
      id: 2,
      name: 'ola',
      age: 25,
      adresse : 'cairo',
      gender: 'female'
    },
    {
      id:3,
      name: 'ali',
      age: 25,
      adresse : 'cairo',
      gender: 'Male'
    },
    {
      id:4,
      name: 'Mariam',
      age: 25,
      adresse : 'cairo',
      gender: 'female'
    },
    {
      id:5,
      name: 'Maram',
      age: 25,
      adresse : 'cairo',
      gender: 'female'
    },
    {
      id:6,
      name: 'Maro',
      age: 25,
      adresse : 'cairo',
      gender: 'male'
    },
  ]);

  const [CardShow, setCardShow] = useState(true);
  const toggleCardShow = () => {
    setCardShow(!CardShow);
  }

// delete function
  // طريقه كويسه لكن مش شغاله أحسن حاجه مع الفلتر
  // لما بجي أمسح بفضل أضغط ويمسح العنصر المختار والعناصر الأخري واحد تلو الأخر لأنه غالبا الإندكس السبب
  
      // const deleteHandler = (e, clickedIndex) => {
        // const copyOfState = data;
        // const filterOperationOnCopy = copyOfState.filter((el,index)=> clickedIndex !== index)
        // setData(filterOperationOnCopy)

        // console.log(e.target, index)
        // console.log(index)
      // }

  //  طريقه أخرى
    const deleteHandler = (e, selectedId) => {
      // console.log(e.target , index) 
      const deleteOperation = data.filter((el) => selectedId !== el.id)
      console.log(deleteOperation)
      setData(deleteOperation)
    }

    // طريقه تانيه لكن لاوم أستخدم معها ريتيرن
    // setState((prevState)=>{
    //   // console.log(prevState)
    //   return prevState.filter((el,idx)=>clickedIndex !== idx)
    // })

    // طريقه علا
    // const copyOfState = State;
    // const filterOperationOnCopy = copyOfState.filter((el,index)=> clickedIndex !== index)
    // setState(filterOperationOnCopy)
    
// delete function 


// modal
  const [modalShow, setModalShow] = useState(false);
  const toggleModalShow = () => {
    setModalShow(!modalShow);
  }
// modal

// Filteration
const [filter,setfilter] = useState("");

const filterNames = (name) => {
  setfilter(name)
}

const namesHandler = () => {
  // console.log(filter)
  if(filter.length !== 0){
    return data.filter((el)=> el.name.toLowerCase().includes(filter.toLowerCase()))
  }
  return data;
}
// Filteration


  return (
    <div className="App">

     <h1 className={styles.title}>LIST OF DATA</h1>

     <div className={styles.gbtn}>
      <button onClick={toggleCardShow} className={styles.btnTop}>{CardShow? "HIDE" : "SHOW"}</button>
      <button onClick={toggleModalShow} className={styles.btnBottom}>ADD</button>
      {/* <button onClick={() => {}}>ADD</button> */}
     </div>

     <Modal modalShow={modalShow} toggleModalShow={toggleModalShow} data={data} setData={setData}/>

     <div className={CardShow ? styles.show : styles.hide}>
        <Filteration  filteration ={filterNames}/>
        <ShowAllData data={namesHandler()}  deleteHandler={deleteHandler} />
        {/* <ShowAllData data={data}  deleteHandler={deleteHandler}/> */}
     </div>
    </div>
  );
}

export default App;

// display: grid;
// grid-template-columns: repeat(auto-fill,minmax(250px,1fr));