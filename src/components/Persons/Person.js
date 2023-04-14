import React from "react"

const Person = props => {

    return (
        <div className="w-11/12 mx-auto my-1.5 rounded-sm border-2 border-lime-500 border-dashed">
            {props.name} ({props.age} years old)
        </div>
    )

}

export default Person