import React from "react"
import Person from "./Person"

const PersonsList = props => {

    return (
        <section className="w-10/12 lg:max-w-screen-md">
            {props.persons.map(person => 
                <Person 
                    name={person.name}
                    age={person.age}
                />
            )}
        </section>
    )
}


export default PersonsList