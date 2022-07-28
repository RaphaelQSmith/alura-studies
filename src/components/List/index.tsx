import * as React from 'react';

function List(){
    const tasks = [{
        task: "React",
        tempo: "02:00:00"
    },
    {
        task: "JavaScript",
        tempo: "01:00:00"
    },
];
    return(
        <aside>
            <h2> Today Studies</h2>
            <ul>
                {tasks.map((task, index)=> (
                    <li key={index}>
                        <h3>
                            {task.task}
                        </h3>
                        <span>
                            {task.tempo}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;