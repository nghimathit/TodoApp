
const TodoItem = (prop) => {

    return (
        <div className='todo-item' onClick={() => prop.HandleClickItem(prop.id)}>
            <div style={{ display: 'flex', gap: 4 }}>
                <input type='checkbox' checked={prop.isComleted} onChange={() => {
                    prop.HandleCheckboxChang(prop.id)
                }} onClick={(e) => { e.stopPropagation() }} />
                <p className='todo-item-text'>{prop.name}</p>
            </div>
            {prop.impotant && <p> ✔</p>}
        </div>
    )
}

export default TodoItem