export const storeInLocalStorage = (response) => {
    window.localStorage.setItem("token", response.data.token)
    window.localStorage.setItem("name", response.name)
    window.localStorage.setItem("email", response.email)
  }