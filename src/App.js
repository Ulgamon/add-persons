import React from 'react'
import './index.css'
import PersonsList from './components/Persons/PersonsList'
import PersonForm from './components/NewPerson/PersonForm'
import Modal from './components/Modal/Modal'


function App() {

  const [persons, setPersons] = React.useState([
    {id: 0, name: 'Austin', age: 21},
    {id: 1, name: 'Toja', age: 40},
    {id: 2,name: 'Mita', age: 69},
  ])

  const [modalError, setModalError] = React.useState({check: false, message: ''})

  const [id, setId] = React.useState(3)

  const addNewPerson = (name, age) => {
    setPersons(prevState => {
      return [{ id: id, name: name, age: age }, ...prevState]
    })
    setId(prevState => {return ++prevState})
  }

  let message = ''

  const callModal = (error) => {
    switch(error) {
      case 'name':
        message = 'Please enter a valid name and age (non-empty values).'
        setModalError({check: true, message: message})
        return
      case 'age':
        message = 'Please enter a valid age (>0).'
        setModalError({check: true, message: message})
        return
      default:
        throw new Error(`${error} is not a valid parameter.`)
    }
  }

  const resetModal = () => {
    setModalError({check: false, message: ''})
  }

  return (
    <div className='w-full min-h-screen font-serif font-medium text-orange-400 p-1 app'>
      <PersonForm addNewPerson={addNewPerson} modalError={callModal}/>
      <PersonsList items={persons} />
      { modalError.check ? <Modal message={modalError.message} resetModal={resetModal} /> : '' }
    </div>
  )
}

export default App;