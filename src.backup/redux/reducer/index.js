const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COUNTRY_LIST': {
      return { ...state, countryList: action.payload }
    }
    case 'SET_COUNTRY_BY_NAME': {
      const countryListByName = (state.countryList).filter(country =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      )
      const countryListByRegion = [];
      return { ...state, countryListByName, countryListByRegion }
    }
    case 'SET_COUNTRY_BY_REGION': {
      const countryListByName = [];
      if (action.payload === '') {
        const countryListByRegion = state.countryList
        return { ...state, countryListByRegion, countryListByName }
      }
      else {
        const countryListByRegion = (state.countryList).filter(country =>
          country.region === action.payload
        )
        console.log("country", state)
        return { ...state, countryListByRegion, countryListByName }
      }
    }
    default: {
      return state
    }
  }
}
export default reducer