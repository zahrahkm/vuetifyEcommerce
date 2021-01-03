
export function auth({commit},{user,token}){
    commit("AUTH",{user,token})
}

export function logout({commit}){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    commit("LOG_OUT")
}
