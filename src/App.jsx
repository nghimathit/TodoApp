
import { useContext, useMemo, useRef, useState } from 'react';
import './App.css'
import TodoItem from './component/TodoItem'
import Sidebar from './component/Sidebar';
import FilterPanner from './component/FilterPanner';
import { AppContext } from './ContextApi/AppProvider';



function App() {
  const { selectCategory } = useContext(AppContext)

  const [todolist, setTodolist] = useState([
    { id: 1, name: "Choi Game", impotant: false, isComleted: true, delete: false, categori: 'personnal' },
    { id: 2, name: "Thiet Ke Web", impotant: true, isComleted: false, delete: false, categori: 'idea' },
    { id: 3, name: "Di Du Lich", impotant: true, isComleted: false, delete: false, categori: 'traval' },
    { id: 4, name: "O Nha Hoc Bai", impotant: false, isComleted: true, delete: false, categori: 'home' }
  ]);
  const [select, setSelect] = useState("all");
  const [showSideber, setshowSideber] = useState(false);
  const [todoItemClick, settodoItemClick] = useState('');
  const [searchText, setsearchText] = useState('');


  const inputref = useRef();
  const HandleCheckboxChang = (id) => {
    const newTodoList = todolist.map((itemtodo) => {
      if (itemtodo.id === id) {
        return { ...itemtodo, isComleted: !(itemtodo.isComleted) }
      } else {
        return itemtodo
      }

    })
    setTodolist(newTodoList)

  }
  const HandleClickItem = (id) => {
    setshowSideber(true);
    settodoItemClick(todolist.find((item) => {
      return item.id === id; // nhớ là phép so sánh phải sử dụng 2 dấu == trở lên 
    }))
  }
  const HandleChangName = (newtodo) => {
    const newTodoList = todolist.map((itemtodo) => {
      if (itemtodo.id === newtodo.id) {
        return newtodo
      } else {
        return itemtodo
      }

    })
    setTodolist(newTodoList)
    setshowSideber(false)
  }
  const FilterTodo = useMemo(() => {

    return todolist.filter((item) => {

      if (select === "all") {
        return true;
      }
      if (select === "impotant") {
        return item.impotant === true;
      }
      if (select === "completed") {
        return item.isComleted === true;
      }
      if (select === "delete") {
        return item.delete === true

      }

    }).map((todoitem) => {
      if (!selectCategory) {
        if (todoitem.name.includes(searchText)) { // tìm kiếm là dùng include hết nha em 
          return (
            <TodoItem
              id={todoitem.id}
              key={todoitem.id}
              name={todoitem.name}
              impotant={todoitem.impotant}
              isComleted={todoitem.isComleted}
              HandleCheckboxChang={HandleCheckboxChang}
              HandleClickItem={HandleClickItem}
            />
          )
        } else {
          return false;

        }
      } else {
        if (todoitem.name.includes(searchText) && selectCategory === todoitem.categori) { // tìm kiếm là dùng include hết nha em 
          return (
            <TodoItem
              id={todoitem.id}
              key={todoitem.id}
              name={todoitem.name}
              impotant={todoitem.impotant}
              isComleted={todoitem.isComleted}
              HandleCheckboxChang={HandleCheckboxChang}
              HandleClickItem={HandleClickItem}
            />
          )
        } else {
          return false;

        }
      }

    });
  }, [select, todolist, searchText, selectCategory])

  return ( // lưu ý sau return phải có code bên cạnh
    <div className="wrapper">
      <FilterPanner
        select={select}
        setSelect={setSelect}
        todolist={todolist}
        searchText={searchText}
        setsearchText={setsearchText}
      />

      <div className='container'>
        <input
          ref={inputref} className='task-input' type="text" name='add-new-task' placeholder='Add new task'

          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const value = e.target.value;
              inputref.current.value = "";
              setTodolist([...todolist, { id: crypto.randomUUID(), name: value, impotant: false, isComleted: false, delete: false, categori: "home" }])

            }
          }} />
        <div>
          {FilterTodo}
          {showSideber && <Sidebar
            key={todoItemClick.id} // key này thay đổi làm cho compont render lại nè !!!
            todoItemClick={todoItemClick}
            HandleChangName={HandleChangName}
            setshowSideber={setshowSideber}
          />}
        </div>
      </div>
    </div>
  )
}

export default App
