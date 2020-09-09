import * as types from '../util/types'
import axios from 'axios'

const fetchData = async (callback, url) => {
  callback({
    type: types.DATA_INIT
  })


  try {
    const response = await fetch(url);
    const result = await response.json();

    callback({
      type: types.DATA_FETCH_SUCCESS,
      payload: result
    })
  } catch (error) {
    callback({
      type: types.DATA_FETCH_FAILED
    })
  }
}

const updateShoppingList = (server_domain, content, updateRoute, userId, callback) => {

  fetch(`${server_domain}${updateRoute}${userId}`, {
    method: 'PUT',
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(content)
  })
  .then(response => {
    if (response.status === 200) return response.json()
    else callback({type: types.USER_SHOPPINGLIST_UPDATE_FAILED})
  })
  .then(info => {
    console.log(info)
    axios.get(`${server_domain}/getShoppingList/${userId}`)
    .then(result => {
     
      callback({type: types.USER_SHOPPINGLIST_UPDATE_SUCCESS, payload: result.data.userList})
    })
    .catch(err => callback({type: types.USER_SHOPPINGLIST_UPDATE_FAILED}))
  })
  .catch (err => callback({type: types.USER_SHOPPINGLIST_UPDATE_FAILED}))

  
}

export { fetchData, updateShoppingList };