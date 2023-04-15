import React from "react"

const PersonForm = props => {
    const [inputName, setInputName] = React.useState('')
    const [inputAge, setInputAge] = React.useState('')
    const [validName, setValidName] = React.useState(false)
    const [validAge, setValidAge] = React.useState(false)

    function inputNameHandler(event) {
        setInputName(event.target.value.trim())
        if (event.target.value.trim().length === 0) {
            setValidName(false)
        }
        else {
            setValidName(true)
        }
        console.log(inputName + ' ' + validName)
    }

    function inputAgeHandler(event) {
        setInputAge(event.target.value)
        if (event.target.value < 0 || event.target.value === '') {
            setValidAge(false)
        }
        else {
            setValidAge(true)
        }
    }

    function submitHandler(event) {
        event.preventDefault()
        if (!validName) {
            props.modalError('name')
            return
        }
        else if (!validAge) {
            props.modalError('age')
            return
        }
        props.addNewPerson(inputName, inputAge)
        setInputAge('')
        setInputName('')
        setValidAge(false)
        setValidName(false)
    }

    return (
        <form className="w-10/12 shadow-2xl lg:max-w-screen-md mx-auto bg-gray-800 p-4 rounded-lg my-3" onSubmit={submitHandler}>
            <label className="block text-2xl my-1">Name:</label>
            <input 
                className="w-11/12 mx-auto block my-1 text-gray-800 
                p-2 outline-none rounded-lg focus:ring-4 ring-orange-300 focus:scale-110 transition-all" 
                type="text"
                onChange={inputNameHandler} 
                value={inputName}
            />
            <label className="block text-2xl my-1">Age:</label>
            <input 
                className="w-11/12 mx-auto block my-1 text-gray-800 p-2 outline-none rounded-lg 
                focus:ring-4 ring-orange-300 focus:scale-110 transition-all"
                type="number" 
                onChange={inputAgeHandler}
                value={inputAge}
            />
            <button 
                className="w-6/12 p-3 bg-white rounded-lg block mx-auto my-5 text-lg
                mt-9 bg-gradient-to-r from-orange-400 to-orange-700 hover:from-lime-400
                hover:to-lime-700 text-gray-800" 
                type="submit">Add New Person</button>
        </form>
    )

}

export default PersonForm