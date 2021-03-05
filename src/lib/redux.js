import { createStore } from 'redux';

export const actions = {
    ARCHIVE_TASK: 'ARCHIVE_TASK',
    PIN_TASK: 'PIN_TASK',
};

export const archiveTask = id => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = id => ({ type: actions.PIN_TASK, id });

function taskStateReducer(taskState) {
    return (state, action) => {
        return {
            ...state,
            tasks: state.tasks.map(task =>
                task.id === action.id ? { ...task, state: taskState } : task
            ),
        };
    };
}

export const reducer = (state, action) => {
    switch (action.type) {
        case actions.ARCHIVE_TASK:
            return taskStateReducer('TASK_ARCHIVED')(state, action);
        case actions.PIN_TASK:
            return taskStateReducer('TASK_PINNED')(state, action);
        default:
            return state;
    }
};

const defaultTasks = [
    { id: '1', title: 'coles', state: 'TASK_INBOX' },
    { id: '2', title: 'woolworth', state: 'TASK_INBOX' },
    { id: '3', title: 'aldi', state: 'TASK_INBOX' },
    { id: '4', title: 'bunning', state: 'TASK_INBOX' },
    { id: '5', title: 'ikea', state: 'TASK_INBOX' },
];

export default createStore(reducer, { tasks: defaultTasks });
