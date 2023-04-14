import React, {useEffect} from "react"
import Person from "./Person"

const PersonsList = props => {
    return (
        <section className={`w-10/12 lg:max-w-screen-md mx-auto bg-gray-800 p-4 rounded-lg shadow-2xl`}>
            {props.items.map(person => 
                <Person 
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    age={person.age}
                />
            )}
        </section>
    )
}


export default PersonsList