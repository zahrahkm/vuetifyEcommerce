
export function AUTH(state, {user , token}){
    state.token = token
    state.user = user
}

export function LOG_OUT(state){
    state.status = ''
    state.token = ''
}
