export const setPeriodLength = periodLength => {
  return dispatch => {
    dispatch({
      type: 'SET_PERIOD_LENGTH',
      periodLength
    })
  }
}

export const setPeriodStartDate = periodStartDate => {
  return dispatch => {
    dispatch({
      type: 'SET_PERIOD_START_DATE',
      periodStartDate
    })
  }
}

const fetchedPeriodPrediction = response => {
  return {
    type: 'FETCHED_PERIOD_PREDICTION',
    response
  }
}

export const updatePeriodProfile = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      )
      const prediction = await response.json()
      dispatch(fetchedPeriodPrediction(prediction))
    } catch (error) {
      // WHAT TO DO WITH ERROR IN HACKATHON
      console.log(error)
    }
  }
}

const fetchedCalendarsOfFriends = response => {
  return {
    type: 'FETCHED_CALENDARS_OF_FRIENDS',
    response
  }
}

export const fetchCalendarsOfFriends = () => {
  return async dispatch => {
    try {
      // const response = await fetch(
      //   'https://jsonplaceholder.typicode.com/todos/1'
      // )
      // const prediction = await response.json()
      const now = new Date()

      const mockResponse = [
        {
          start: new Date(now.getFullYear(), now.getMonth(), 1),
          end: new Date(now.getFullYear(), now.getMonth(), 5),
          color: '#ea4986',
          text: 'Ann'
        },
        {
          start: new Date(now.getFullYear(), now.getMonth(), 15),
          end: new Date(now.getFullYear(), now.getMonth(), 18),
          text: 'Nicole',
          color: '#f4511e'
        },
        {
          start: new Date(now.getFullYear(), now.getMonth(), 20),
          end: new Date(now.getFullYear(), now.getMonth(), 25),
          color: '#29ce9f',
          text: 'Ruishan'
        }
      ]

      dispatch(fetchedCalendarsOfFriends(mockResponse))
    } catch (error) {
      // WHAT TO DO WITH ERROR IN HACKATHON
      console.log(error)
    }
  }
}
