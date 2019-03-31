import moment from 'moment'

const initialState = {
  periodLength: 5,
  periodStartDate: '2019-02-15',
  nextPeriodStartDate: null,
  nextPeriodEndDate: null,
  calendar: [
    {
      start: '2019-03-15T00:00:00.000Z',
      end: '2019-03-20T00:00:00.000Z',
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
      const nextPeriodStartDate = action.nextPeriodStartDate
      const nextPeriodEndDate = moment(nextPeriodStartDate, 'YYYY-MM-DD')
        .add(state.periodLength, 'days')
        .format('YYYY-MM-DD')

      // Update calendar with predicted dates
      state.calendar = [
        {
          start: new Date(nextPeriodStartDate),
          end: new Date(nextPeriodEndDate),
          text: 'Nicole',
          color: '#f4511e'
        }
      ]

      return {
        ...state,
        nextPeriodStartDate: action.nextPeriodStartDate,
        nextPeriodEndDate
      }

    case 'FETCHED_CALENDARS_OF_FRIENDS':
      // LOL HACK: Do not add duplicate calendars
      if (state.calendar.length > 1) {
        return state
      }

      const calendar = [...state.calendar, ...action.response]
      return {
        ...state,
        calendar
      }

    default:
      return state
  }
}
