
import { useMemo } from "react";
import "./FilterPanner.css"
import Categori from "./Categori";

const FilterPanner = ({ select, setSelect, todolist, searchText, setsearchText }) => {

    const CountByFilter = useMemo(() => {
        return todolist.reduce((acc, item) => {
            const newCount = { ...acc }; // gán cái biến này để lưu lại giá trị mặc định
            if (item.impotant) {
                newCount.impotant += 1 // nếu mà đúng thì cập nhật lại sl 
            }
            if (item.isComleted) {
                newCount.isComleted += 1
            }
            if (item.delete) {
                newCount.delete += 1
            }
            return newCount

        }, { all: todolist.length, impotant: 0, isComleted: 0, delete: 0 })
    }, [todolist])



    const FILTER_ITEM = [
        {
            id: "all",
            label: "All",
            icon: "./public/icons/inbox.png",
            count: CountByFilter.all

        },
        {
            id: "impotant",
            label: "Impotant",
            icon: "./public/icons/flag.png",
            count: CountByFilter.impotant
        },
        {
            id: "completed",
            label: "Completed",
            icon: "./public/icons/check.png",
            count: CountByFilter.isComleted
        },
        {
            id: "delete",
            label: "Delete",
            icon: "./public/icons/delete.png",
            count: CountByFilter.delete
        },
    ]

    return (
        <div className='containerleftsb'>
            <input name='search-text' placeholder='Search ' value={searchText} onChange={(e) => {
                setsearchText(e.target.value)
            }} />
            <div className='filter-container'>

                {FILTER_ITEM.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className={`filter-item ${select === item.id ? "select" : ""}`}
                                onClick={() => {
                                    setSelect(item.id)
                                }}
                            >
                                <div className='filter-name'>
                                    <img src={item.icon} />
                                    <p>{item.label}</p>
                                </div>
                                <p>{item.count}</p>
                            </div>
                        </div>
                    )
                })}
                <Categori todolist={todolist} />



            </div>
        </div >
    )
}


export default FilterPanner