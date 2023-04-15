import React from "react"

function fetchCssClass() {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve('opacity-0')
        }, 200)
    })
}

const Person = props => {

    const [cssClass, setCssClass] = React.useState('opacity-0')

    React.useEffect(() => {
        fetchCssClass().then((newClass) => {
            setCssClass('opacity-100')
        })
    })

    return (
        <div className={`w-11/12 mx-auto my-1.5 rounded-lg border-2 border-lime-400 
        bg-gray-800 border-dashed transition-opacity duration-200 ease-in ${cssClass}`}>
            <p className="text-center py-1 text-lg">{props.name} ({props.age} years old)</p>
        </div>
    )

}

export default Person