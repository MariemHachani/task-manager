import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    ProjectInfo: {
        title: 'Lorem Ipsum',
        client: {
            client_name: 'Mr. Simon ',
            client_surname: 'Hayart',
            client_number: '22222222'
        }
    },
    projectTasks: [],
    filterTasks: [],
    filterName: null,
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            action.payload.map(task => {
                state.projectTasks = [...state.projectTasks, task];
            });
        },
        filterTasks: (state, action) => {
            console.log(action.payload);
            state.filterTasks = state.projectTasks.filter(task => task.Task_name === action.payload);
            state.filterName = action.payload;
        },
    }
});

export const {
    setTasks,
    filterTasks
} = tasksSlice.actions;
export const selectProjectInfo = state => state.tasks.ProjectInfo;
export const selectProjectTasks = state => state.tasks.projectTasks;
export const selectFilterTasks = state => state.tasks.filterTasks;
export const selectFilterName = state => state.tasks.filterName;

export default tasksSlice.reducer;