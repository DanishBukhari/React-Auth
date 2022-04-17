import React from 'react'
import{ useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import apiUrl from '../apiURL'


function Dashboard() {
    // this will set the displayed array to mapped data
    // const [currentPeople, setCurrentPeople] = useState([])
    // this will take the mapped data and display
    const [displayPeople, setDisplayPeople] = useState([])
    // this will fetch the data again by incrementing
    const [get, setGet] = useState(0)
    let navigate = useNavigate();

    

    // this will do a get request from my api and return each person
    useEffect(()=>{


        fetch(apiUrl + '/people/' + encodeURIComponent(sessionStorage.getItem("username")), {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }})
        //this will fetch data from my api
        .then(res => res.json())
        //this will create an array of the people data so we can render it
        .then(data => {let peopleArray = data.people.map((person, index)=>{
            console.log(person._id)
            return(
                <div className='peopleCards' onClick={handleDelete} key={index}>
                    <button id={person._id} className="deletebutton">X</button>
                    <h2>Name: {person.firstName} {person.lastName}</h2>
                    <h2>Birthday: {person.birthDay}</h2>
                    <h2>Gender: {person.gender}</h2>
                    <h2>Pronouns: {person.pronouns}</h2>
                    <h2>Relationship: {person.relationship}</h2>
                </div>
            )
        })
        setDisplayPeople(peopleArray)
    })
    }, [get])

    const handleDelete = (e) =>{
        console.log(e.target.id)
        let id = e.target.id;
        setGet(get + 1)
        fetch(`http://localhost:5000/${id}`, {method:'DELETE'})
      }


  return (
    <div className='dashboard'>
        <div className='leftSidebar'></div>
        <main>
            <nav className='dash-nav'><h1>Who's worth remembering?</h1></nav>
            <div className='div-button'>
                <button className='addButton' onClick={()=>{navigate("/createperson")}}>Add Person +</button>
            </div>
            {displayPeople}
        </main>
        <div className='rightSidebar'></div>
    </div>
  )
}

export default Dashboard