import React, { Component } from 'react'
import LazyLoad from 'react-lazy-load'
import { Spring } from 'react-spring'
import axios from 'axios'
import { Item, Info } from '../'
import { connect } from 'react-redux'
import { getTopicsFromApi, insertText } from '../../actions'
import {
  Pane,
  Button,
  TextInput,
  Heading,
  Strong,
  SearchInput,
  Text
} from 'evergreen-ui'
import styled from 'styled-components'

const Background = styled.img`
    position:fixed;
    height: auto;
    width: 100vw;
    left  0px;
    top: 0px;
    z-index: -69;
    filter: blur(0px);
`

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      readyBackground: false
    }
  }

  handleSearch() {
    this.props.onHandleSearch(
      this.props.text,
      this.props.pages,
      this.props.per_page,
      this.props.server
    )
  }
  handleCurrentText(event) {
    this.props.onHandleText(event.target.value)
  }

  render() {
    return (
      <Pane
        background="white"
        elevation={2}
        height={'auto'}
        width={'60%'}
        padding={30}
        marginX={'20%'}
        marginY={'10vh'}
        display="block"
        alignItems="center"
        justifyContent="center"
        border="default"
        borderRadius={5}
        style={{ minWidth: '350px' }}>
        <Spring
          from={{ opacity: this.state.readyBackground ? 1 : 0 }}
          to={{ opacity: this.state.readyBackground ? 1 : 0 }}
          config={{ delay: 3000, precision: 0.5, duration: 300 }}>
          {props => (
            <LazyLoad
              onContentVisible={event =>
                this.setState(
                  { readyBackground: true },
                  console.log(
                    '%c loaded-background ✔️',
                    'background-color: green;color:white'
                  )
                )
              }>
              <Background
                style={{ opacity: props.opacity }}
                src="https://loremflickr.com/1280/720/mexico"
                alt="mexico"
              />
            </LazyLoad>
          )}
        </Spring>

        <Heading
          fontWeight={1000}
          style={{ lineHeight: '10vh', fontSize: '10vh', textAlign: 'center' }}
          color={'#4f6eff'}
          margin={30}
          alignItems={'center'}
          justifyContent="center">
          Tag Search
        </Heading>
        <Info />
        <SearchInput
          value={this.props.text}
          placeholder="🎹 type something here"
          onChange={event => this.handleCurrentText(event)}
          width="100%"
          height={60}
        />

        <Button
          appearance="primary"
          type="submit"
          marginY={20}
          marginX={'auto'}
          intent={'#4f6eff'}
          display={'block'}
          height={'auto'}
          width={'auto'}
          paddingX={30}
          paddingY={20}
          alignItems={'center'}
          waves="light"
          value={this.props.text}
          onClick={this.handleSearch.bind(this)}>
          <Text color={'white'} style={{ fontSize: '3vh' }}>
            Search
          </Text>
        </Button>

        <Pane clearfix>{this.props.items.map(el => <Item values={el} />)}</Pane>
      </Pane>
    )
  }
}

const mapStateToProps = ({ text, pages, per_page, items, server }) => ({
  text,
  pages,
  per_page,
  items,
  server
})
const mapDispatchToProps = {
  onHandleSearch: getTopicsFromApi,
  onHandleText: insertText
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
