import React, { Component } from 'react'
import { Button, SearchInput, Pane, Text, Heading } from 'evergreen-ui'
import styled from 'styled-components'
import LazyLoad from 'react-lazy-load'
import { useSpring } from 'react-spring'
import axios from 'axios'
import { Item } from '../'

const Viewport = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
`
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      pages: 1,
      per_page: 10,
      items: []
    }
  }

  handleSearch(event) {
    axios
      .get('https://api.github.com/search/topics', {
        params: {
          q: this.state.text,
          page: this.state.pages,
          per_page: this.state.per_page
        },
        headers: {
          Accept: 'application/vnd.github.mercy-preview+json'
        }
      })
      .then(({ data }) =>
        this.setState(
          { items: data.items },
          console.log(
            '%c updated items ✔️',
            'background-color: green;color:white'
          )
        )
      )
      .catch(error => console.log('❎ unespected error sending request 😵'))
  }

  render() {
    return (
      <Viewport className="App">
        <header>
          <Heading size={900} marginTop="default" alignItems="center">
            900: The quick brown fox jumps over the lazy dog
          </Heading>
        </header>
        <Pane
          elevation={4}
          float="left"
          width={'90vw'}
          height={120}
          margin={24}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column">
          <Text>{this.state.text}</Text>
          <SearchInput
            onChange={event => this.setState({ text: event.target.value })}
            placeholder="search something"
            height={60}
          />
          <Button
            value={this.state.text}
            onClick={this.handleSearch.bind(this)}>
            Search
          </Button>
          {this.state.items.map(el => <Item values={el} />)}
        </Pane>
      </Viewport>
    )
  }
}

export default Main
