/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useReducer } from 'react'
import { useContext } from 'react'

const AppContext = createContext()

const VALUE_KEY = 'favs'

const reducer = (state, action) => {
  switch(action.type){
    case 'FETCH_DENTISTS':
      return { ...state, dentists: action.payload };
    case 'ADD_FAV':
      const selectedDentista = state.dentists.find((dentista) => dentista.id === action.payload)
      if (selectedDentista) {
        const newFav = {
          name: selectedDentista.name,
          username: selectedDentista.username,
          id: selectedDentista.id,
        };    
        const updatedFavs = [...state.favs, newFav]
        localStorage.setItem(VALUE_KEY, JSON.stringify(updatedFavs))
        return {...state, favs: updatedFavs };
      }
      return state;
    case 'REMOVE_FAV':
        const updatedFavs = state.favs.filter((fav) => fav.id !== action.payload)
        localStorage.setItem(VALUE_KEY, JSON.stringify(updatedFavs))
        return {...state, favs: updatedFavs };
    case 'SET_FAVS':
          return { ...state, favs: action.payload };
    default:
      return state;
  }
}

const GlobalContextDentista = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, { dentists: [], favs: [] });
  const { dentists, favs } = state;

  useEffect(() => {
    async function fetchDentists() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonData = await response.json();
      console.log(jsonData)
      dispatch({ type: 'FETCH_DENTISTS', payload: jsonData });
    }

    fetchDentists();

    const storedFavs = localStorage.getItem(VALUE_KEY);
    if (storedFavs) {
      dispatch({ type: 'SET_FAVS', payload: JSON.parse(storedFavs) });
    }
  }, []);
  
  const addFav = (id) => {
    dispatch({ type: 'ADD_FAV', payload: id });
  };

  const removeFav = (id) => {
    dispatch({ type: 'REMOVE_FAV', payload: id });
  };

  const contextValue = {
    dentists,
    favs,
    addFav,
    removeFav,
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export default GlobalContextDentista;

export const useAppContext = () => useContext(AppContext);