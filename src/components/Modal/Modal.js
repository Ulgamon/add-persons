import React from "react"
import ReactDOM from "react-dom"

const Backdrop = props => {
    return (
        <div 
            className="fixed top-0 left-0 w-screen h-screen bg-opacity-30 bg-black"
            onClick={props.resetModal}>
        </div>
    )
}

const ModalOverlay = props => {
    return (
        <div className="fixed w-full top-1/4 font-serif font-medium text-orange-400">
            <div className="w-11/12 rounded-lg left-0 right-0 absolute mx-auto max-w-screen-sm
                rounded-lg border-2 border-lime-400 border-dashed bg-zinc-500">
                <header className="text-3xl bg-zinc-500 rounded-t-lg py-2">
                    <h3 className="ps-3">{props.title}</h3>
                </header>
                <div className="p-5 bg-gray-800 text-xl">
                    <p>{props.message}</p>
                </div>
                <footer className="text-xl py-3 bg-orange-600">
                    <button 
                        className="block p-3 px-4 bg-gray-800 ml-auto mr-3 rounded-xl hover:bg-gray-500"
                        onClick={props.resetModal}
                    >
                        Okay
                    </button>
                </footer>
            </div>
        </div>
    )
}

const Modal = props => {

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop 
                    resetModal={props.resetModal} 
                />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay 
                    message={props.message} 
                    title={props.title} 
                    resetModal={props.resetModal} 
                />, 
            document.getElementById('overlay-root')
            )}
        </>
    )

}

export default Modal