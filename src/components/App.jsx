import React, {useState, useEffect} from "react";
import { nanoid } from "nanoid";
import { ContactsList } from "./ContactsList";
import { Filter } from "./Filter";
import {ContactForm} from "./ContactForm"
export const App = () => {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState("");
 

 const handleFilter = e =>{
   
    setFilter(e.target.value)
    
  } 
  
const addNewContact = ({name,number}) => {
  
  
  if(contacts.find(el => el.name === name)){
    alert(`${name} is already in contacts`)
   } else{
    setContacts([...contacts,{id: nanoid(), name, number}])
  
  
}}

  // handleSubmit = (e) =>{
  //   e.preventDefault();
  //  if(this.state.contacts.find(el => el.name === this.state.name)){
  //   alert(`${this.state.name} is already in contacts`)
  //  } else {
  //   this.setState((state) => {
  //     console.log(this.state)
  //    return {contacts:[ ...state.contacts, {id:nanoid(), name : state.name, number: state.number}]}
  //   })
  //   console.log(this.state.contacts)
  // }}


 const filterNames = () => {
 
  if(filter === ""){
    return contacts
  }
  const filterValue = filter.toLowerCase();
  const filteredUsers = contacts.filter(({name}) => {
    const nameValue = name.toLowerCase();
    return nameValue.includes(filterValue)
  })
  return filteredUsers
 }

useEffect(() =>{
  localStorage.setItem("contacts", JSON.stringify(contacts))
}, [contacts])

//  componentDidUpdate(prevProps, prevState){
//   if(prevState.contacts === this.state.contacts){
//     return false 
//   } else {
//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
//   }
//  }



 const contactDelete = (el) => {
  const data = contacts.filter(i => i.name !== el.target.name)
  setContacts(data)
  
  
  // localStorage.removeItem(el.target.name)
  
 }
 useEffect(() => {
  const contactFromLS = localStorage.getItem("contacts")
  if(contactFromLS){
    setContacts( JSON.parse(localStorage.getItem("contacts")))
 
 }
 }, [])

//  componentDidMount(){
//   const contactFromLS = localStorage.getItem("contacts")
//   if(contactFromLS){
//   this.setState({contacts: JSON.parse(localStorage.getItem("contacts"))})
//  }}


    
    return(
      <div>
        <h2>Phonebook</h2>
<ContactForm onSubmit={addNewContact}  ></ContactForm>
<h2>Contacts</h2>

<Filter handleFilter={handleFilter}></Filter>
<ContactsList  filteredNames={filterNames()} contactDelete={contactDelete} ></ContactsList>

</div>
    )
   }

