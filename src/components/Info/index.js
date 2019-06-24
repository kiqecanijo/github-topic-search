import React from 'react'
import { connect } from 'react-redux'
import { changeApi } from '../../actions'
import { Switch, Text } from 'evergreen-ui'
import styled from 'styled-components'

const Div = styled.div`
  margin: 5vh auto;
  text-align: center;
`

const Info = props => {
  const handleChangeApi = event => {
    props.onChangeApi(event.target.checked)
  }
  return (
    <Div>
      {
        <Text size={500} color={props.server ? 'muted' : 'green'}>
          Use github API
        </Text>
      }
      <Switch
        height={24}
        margin={20}
        onChange={handleChangeApi.bind(this)}
        type="checkbox"
        display="inline-block"
        verticalAlign="middle"
        checked={props.server}
      />
      {
        <Text size={500} color={props.server ? 'blue' : 'muted'}>
          Use local server (require 'npm run start-server' )
        </Text>
      }
    </Div>
  )
}

const mapDispatchToProps = {
  onChangeApi: changeApi
}
const mapStateToProps = ({ server }) => ({ server })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info)
