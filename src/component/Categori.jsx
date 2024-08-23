import React, { useContext, useMemo } from 'react'
import "./Categori.css"
import { AppContext } from '../ContextApi/AppProvider';

const Categori = ({ todolist }) => {
    const CATEGOTY_ITEM = [
        {
            id: "personnal",
            label: "Personal"
        },
        {
            id: "idea",
            label: "Idea"
        },
        {
            id: "traval",
            label: "Traval"
        },
        {
            id: "home",
            label: "Home"
        },
    ];
    const { selectCategory, setselectCategory } = useContext(AppContext)

    const CountCategory = useMemo(() => {
        return todolist.reduce((acc, item) => {
            const newAcc = { ...acc }
            if (item.categori === "personnal") {
                newAcc.personnal += 1;
            }
            if (item.categori === "idea") {
                newAcc.idea += 1;
            }
            if (item.categori === "traval") {
                newAcc.traval += 1;
            }
            if (item.categori === "home") {
                newAcc.home += 1;
            }
            return newAcc;

        }, { personnal: 0, idea: 0, traval: 0, home: 0 })
    }, [todolist])
    console.log("context", selectCategory);

    return (
        <div>
            <p>Categori</p>
            <div>
                {CATEGOTY_ITEM.map((item) => {
                    return <div key={item.id} className={`categori-item ${ item.id == selectCategory?"select":""}`}
                    onClick={() => { setselectCategory(item.id) }}>
                        <p className='categori-name'>{item.label}</p>
                        <p>{CountCategory[item.id]}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Categori