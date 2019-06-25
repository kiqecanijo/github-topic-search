/** @format */

import React from 'react'
import { connect } from 'react-redux'
import { getTopicsFromApi } from '../../actions'

export const Paginator = props => {
  const handleSearch = event => {
    props.onHandleSearch(props.text, event.target.value, props.per_page)
  }

  const numberPages = Math.ceil(props.total / props.per_page)

  return (
    <div style={{ margin: '5vh auto', textAlign: 'center' }}>
      <h3>Pagination</h3>
      {[...Array(numberPages).keys()].map((number, index) => (
        <input
          key={index}
          style={{
            backgroundColor: props.pages == number + 1 ? '#4f6eff' : 'white',
            color: props.pages == number + 1 ? 'white' : '#4f6eff',
            border: '0px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
          onClick={event => handleSearch(event)}
          type="submit"
          value={++number}
        />
      ))}
    </div>
  )
}

const mapDispatchToProps = {
  onHandleSearch: getTopicsFromApi
}
const mapStateToProps = ({ text, per_page, total, pages }) => ({
  text,
  per_page,
  total,
  pages
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paginator)
