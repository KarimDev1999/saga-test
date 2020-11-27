const initialState = {
    item: null,
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                item: action.payload,

            }
        default: return state;
    }
}

export default user;