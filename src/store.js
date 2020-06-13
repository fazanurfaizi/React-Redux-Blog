import { createStore } from 'redux';
import { reducer } from './reducers';

const initialState = {
    posts: [
        {
            title: "Ini Post",
            description: "Tentu saja ini description",
            postedBy: "Faza",
            category: {
                name: "Blog"
            }
        },
        {
            title: "Ini Post 2",
            description: "Tentu saja ini description",
            postedBy: "Faza",
            category: {
                name: "Blog"
            }
        },
        {
            title: "Ini Post 3",
            description: "Tentu saja ini description",
            postedBy: "Faza",
            category: {
                name: "Blog"
            }
        },
    ]
};

export const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
)