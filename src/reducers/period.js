const now = new Date()

const initialState = {
  periodLength: 5,
  periodStartDate: null,
  calendar: [],
  calendarOfFriends: [
    {
      start: new Date(now.getFullYear(), now.getMonth(), 15),
      end: new Date(now.getFullYear(), now.getMonth(), 18),
      text: 'Nicole',
      color: '#f4511e'
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PERIOD_LENGTH':
      const newPeriodLength = Number(action.periodLength.valueText)
      return {
        ...state,
        periodLength: newPeriodLength
      }

    case 'SET_PERIOD_START_DATE':
      return {
        ...state,
        periodStartDate: action.periodStartDate.valueText
      }

    case 'FETCHED_PERIOD_PREDICTION':
      return {
        ...state,
        calendar: action.response
      }

    case 'FETCHED_CALENDARS_OF_FRIENDS':
      return {
        ...state,
        calendarOfFriends: action.response
      }

    default:
      return state
  }
}
