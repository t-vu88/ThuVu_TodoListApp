
export default function todoTable(props){

    return(
        <div>
            <table>
                <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th></th>
                </tr>
                
                {props.todos.map((todo, index) => (        
                <tr key={index}>
                    <td>{new Date(todo.date).toLocaleDateString('fi-FI')}</td>
                    <td>{todo.desc}</td>
                    <td>
                    <button className ="deleteButton" onClick ={() =>props.deleteTodo(index)}>Delete</button>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}