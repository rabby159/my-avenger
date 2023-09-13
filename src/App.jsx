/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import CheckList from './components/CheckList/CheckList'
import Content from './components/Content/Content'
import Header from './components/Header/Header'

function App() {
  const [bookNow, setBookNow] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [teamCost, setTeamCost] = useState(0)

  const handleBookNow = (actor) => {
    let count = actor.salary;
    
    const isExist = bookNow.find((item) => item.id === actor.id);
    if(isExist){
      alert('Already Booked')
    }
    else{
      bookNow.forEach((item) => {
        count += item.salary;
      })

      const totalRemaining = 50000 - count;

      if(count > 50000){
        return alert("Reach maximum budget")
      }
      else{
        setTeamCost(count);

        setRemaining(totalRemaining);
        
        const newBookNow = [...bookNow, actor];
        setBookNow(newBookNow);
      }
      

    }
  }

  return (
    <>

      <Header></Header>
      <div className='container mx-auto md:flex justify-between mt-10 gap-5'>
        <Content handleBookNow={handleBookNow}></Content>
        <CheckList bookNow={bookNow} remaining={remaining} teamCost={teamCost}></CheckList>
      </div>
    </>
  )
}

export default App
