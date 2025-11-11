function toggleReducer(state, action) {
    switch (action.type) {
        case "toggle":
            return { on: !state.on, clicks: state.clicks++ };
        default:
            return state;
    }
}

function customReducer(state, action) {
    switch (action.type) {
      case "toggle":
        if (state.clicks >= 3) return state;
        return { on: !state.on, clicks: state.clicks + 1 };
      default:
        return state;
    }
}

export { toggleReducer, customReducer };
