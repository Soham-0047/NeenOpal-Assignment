import React, { useEffect, useState } from 'react'
import './card.css'
import Modal from './Modal';

const Card = () => {

  const [info,setInfo] = useState([])
  const [isLiked,setLiked] = useState(false);
  const [isModalOpen,setIsModalOpen] = useState(false);

  const openModal = () =>{
    setIsModalOpen(true);
  }

  const closeModal = () =>{
    setIsModalOpen(false)
  }

  const handleClick =() =>{
    setLiked(!isLiked)
  }

  useEffect(() =>{

    //* Fteching the data

    const fetchData = async () => {
      try{

        const response =  await fetch('/data.json',{
          headers : {
            'Content-Type':'application/json',
            'Accept':'application/json'
          }
        });

        const data = await response.json();
        setInfo(data);
        console.log(data)

      }catch(error){
        console.log(error)
      }
    }

    fetchData();

  }, [])


  return (
    <>
    <div className="main">
  <h1><strong>Profiles Page</strong></h1>
  <ul className="cards">

    {info.map((item,index) =>(

      <li className="cards_item" key={index}>
      <div className="card">
        <div className="card_image"><img src={item.image} alt="img"/></div>
        <div className="card_content">
          <h2 className="card_title">{item.name}</h2>
          <div className="card_content">
            <div className='card-box'><ion-icon name="mail-outline"></ion-icon> <span>{item.email}</span></div>
            <div className='card-box'><ion-icon name="call-outline"></ion-icon> <span>{item.phone}</span></div>
            <div className='card-box'><ion-icon name="globe-outline"></ion-icon> <span>{item.website}</span></div>
          </div>
         
          <div className="actions btn">
        <button className={`${isLiked ? 'actions__like' :''}`} onClick={handleClick}> <ion-icon name="heart"></ion-icon></button>
        <hr className='vl'></hr>
      <button className="actions__trade" onClick={openModal}> <ion-icon name="create"></ion-icon> </button>
      <hr className='vl'></hr>
      <button className="actions__cancel"> <ion-icon name="trash"></ion-icon> </button>
    </div>
        </div>
      </div>
      </li> 
    ))}

   



  </ul>
  <Modal isOpen={isModalOpen}onClose={closeModal}/>
</div>
    

   

    </>
  )
}

export default Card;