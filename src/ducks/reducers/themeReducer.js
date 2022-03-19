const initialState = {
    darkMode: false
}


export default function Dark(state = initialState, action) {
    switch (action.type) {
        case "TOGGLE_TRUE":
            return {
                darkMode: state.darkMode = true
            }
        case "TOGGLE_FALSE":
            return {
                darkMode: state.darkMode = false
            }
        default:
            return state
    }
}