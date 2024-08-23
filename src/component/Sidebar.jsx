import { useState } from 'react'
import "./Sidebar.css"

const Sidebar = (prop) => {
    const [name, setName] = useState(prop.todoItemClick.name);
    const [impotant, setImpotant] = useState(prop.todoItemClick.impotant);
    const [isComleted, setIsComleted] = useState(prop.todoItemClick.isComleted);
    const [categori, setIsCategoty] = useState(prop.todoItemClick.categori);
  
    const HandleClickSave = () => {
        const newtodo = { ...prop.todoItemClick, name, impotant, isComleted, categori }
        prop.HandleChangName(newtodo)

    }

    return (
        <div className='sidebar'>

            <form className='sb-form'>
                <div className='sb-field'>
                    <label htmlFor='sb-name'>TodoName</label>
                    <input id="sb-name" type='text' name="name" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div>
                <div className='sb-field'>
                    <label htmlFor='sb-Impotant'>Impotant</label>
                    <input id="sb-Impotant" type="checkbox" name="name" checked={impotant} onChange={() => {
                        setImpotant(!impotant)
                    }} />
                </div>
                <div className='sb-field'>
                    <label htmlFor='sb-isComleted'>isComleted</label>
                    <input id="sb-isComleted" type='checkbox' name="name" checked={isComleted} onChange={() => {
                        setIsComleted(!isComleted)
                    }} />
                </div>
                <div className='sb-field'>
                    <label htmlFor='sb-isComleted'>isCategory</label>
                    <select value={categori} onChange={(e) => {
                        setIsCategoty(e.target.value)
                    }}>
                        <option value={"personnal"}>Personal</option>
                        <option value={"idea"}>Idea</option>
                        <option value={"traval"}>Traval</option>
                        <option value={"home"}>Home</option>
                    </select>
                </div>

            </form>
            <div className='sb-footer'>
                <button onClick={HandleClickSave}>Save</button>
                <button onClick={() => { prop.setshowSideber(false) }}>Cancel</button>
            </div>

        </div>
    )
}

export default Sidebar