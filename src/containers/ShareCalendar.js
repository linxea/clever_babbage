import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchCalendarsOfFriends } from '../actions/period'
import { WithContext as ReactTags } from 'react-tag-input'

const KeyCodes = {
  comma: 188,
  enter: 13
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

class ShareCalendar extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      tags: [],
      suggestions: [
        { id: 'Love', text: 'Love' },
        { id: 'Husband', text: 'Husband' },
        { id: 'William', text: 'William' },
        { id: 'Exboyfriend', text: 'Exboyfriend' },
        { id: 'Wife', text: 'Wife' },
        { id: 'Boss', text: 'Boss' }
      ]
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAddition = this.handleAddition.bind(this)
    this.handleDrag = this.handleDrag.bind(this)
  }

  handleDelete(i) {
    const { tags } = this.state
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    })
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }))
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags]
    const newTags = tags.slice()

    newTags.splice(currPos, 1)
    newTags.splice(newPos, 0, tag)

    this.setState({ tags: newTags })
  }
  render() {
    const { tags, suggestions } = this.state

    return (
      <div className="container friend-calendar">
        <h1>Notify Contacts:</h1>
        <ReactTags
          placeholder="Phone Contacts"
          inputFieldPosition="top"
          tags={tags}
          suggestions={suggestions}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          delimiters={delimiters}
        />

        <button className="button" onClick={e => this.handleClick()}>
          Send
        </button>
      </div>
    )
  }

  handleClick() {
    this.props.fetchCalendarsOfFriends()
    this.props.history.push('/dashboard')
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCalendarsOfFriends
    },
    dispatch
  )

export default connect(
  null,
  mapDispatchToProps
)(ShareCalendar)
