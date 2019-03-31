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

const fetchedPeriodPrediction = nextPeriodStartDate => {
  return {
    type: 'FETCHED_PERIOD_PREDICTION',
    nextPeriodStartDate
  }
}

export const updatePeriodProfile = () => {
  return async dispatch => {
    try {
      // TODO: Replace with real data
      // const response = await fetch(
      //   'https://jsonplaceholder.typicode.com/todos/1'
      // )
      // const predictedStartDate = await response.json()
      const predictedStartDate = {
        nextPeriodStartDate: '2019-03-15'
      }

      dispatch(fetchedPeriodPrediction(predictedStartDate.nextPeriodStartDate))
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

      const mockResponse = [
        {
          start: new Date(2019, 2, 1),
          end: new Date(2019, 2, 5),
          color: '#ea4986',
          text: 'Ann'
        },
        {
          start: new Date(2019, 2, 21),
          end: new Date(2019, 2, 25),
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
