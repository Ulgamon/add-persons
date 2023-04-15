import React, {useEffect} from "react"
import Person from "./Person"

const PersonsList = props => {
    return (
        <ul className={`w-10/12 lg:max-w-screen-md mx-auto bg-sky-600 p-4 rounded-lg shadow-2xl`}>
            {props.items.map(person => 
                <li key={person.id}>
                    <Person 
                        key={person.id}
                        id={person.id}
                        name={person.name}
                        age={person.age}
                    />
                </li>
            )}
        </ul>
    )
}


export default PersonsList