export function user (state) {
    return state.user
}
export function isLoggedIn (state) {
    return !!state.token
}
