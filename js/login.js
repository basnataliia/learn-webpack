console.log('login loaded')

let login = (username, password) => {
  if(username !== 'admin' || password !== 'radical') {
    console.log('incorrect login')
  }
}

export {login}

// login('admin', 'idunno')
