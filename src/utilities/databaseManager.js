const getUser = () => {
    const existingUser = sessionStorage.getItem('userId');
    if (existingUser) {
        return existingUser; 
    } else {
        const newUser = 'user-' + new Date().getTime();
        sessionStorage.setItem('userId', newUser)
        return newUser;
    }
}


const getDatacourseID = () => {
    const userId = getUser();
    return `emaJohn/carts/${userId}`
}

// push to local storage: a temporary place for database
const getDatabaseCart = () => {
    const datacourseID = getDatacourseID();
    const data = localStorage.getItem(datacourseID) || "{}";
    return JSON.parse(data);
}

const addToDatabaseCart = (courseID, count) => {
    const currentCart = getDatabaseCart();
    currentCart[courseID] = count;
    localStorage.setItem(getDatacourseID(), JSON.stringify(currentCart));
}

const removeFromDatabaseCart = courseID => {
    const currentCart = getDatabaseCart();
    delete currentCart[courseID];
    localStorage.setItem(getDatacourseID(), JSON.stringify(currentCart));
}

const processOrder = (cart) => {
    localStorage.removeItem(getDatacourseID());
}


export { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder };


// polyfill to support older browser
const localStorage = window.localStorage || (() => {
  let store = {}
  return {
    getItem(courseID) {
      return store[courseID]
    },
    setItem(courseID, value) {
      store[courseID] = value.toString()
    },
    clear() {
      store = {}
    }
  };
})()

const sessionStorage = window.sessionStorage || (() => {
  let store = {}
  return {
    getItem(courseID) {
      return store[courseID]
    },
    setItem(courseID, value) {
      store[courseID] = value.toString()
    },
    clear() {
      store = {}
    }
  };
})()
// end of poly fill