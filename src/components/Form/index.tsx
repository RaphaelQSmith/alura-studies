import * as React from 'react';
import Button from '../Button';

class Form extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">Add a new study</label>
                    <input type="text"
                    name="task"
                    id="task"
                    placeholder="What do you wanna study?"
                    required />
                </div>
                <div>
                <label htmlFor="time">Time</label>
                    <input type="time"
                    step="1"
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                     />
                </div>
                <Button />
            </form>
        )

    }
}

export default Form;