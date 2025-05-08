
export const selectIsLogged = state => state.auth.isLoggedIn
export const selectIsRefreshing = state => state.auth.isRefreshing
export const selectName = state => state.auth.user.name