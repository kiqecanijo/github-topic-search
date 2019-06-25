/** @format */

import React from 'react'
import { connect } from 'react-redux'
import { changeApi } from '../../actions'
import { Switch, Text } from 'evergreen-ui'

export const Info = props => {
	const handleChangeApi = event => {
		props.onChangeApi(event.target.checked)
	}
	return (
		<div style={{ margin: '5vh auto', textAlign: 'center' }}>
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
				checked={props.server}
				style={{ verticalAlign: 'middle' }}
			/>
			{
				<Text size={500} color={props.server ? 'blue' : 'muted'}>
					Use local server (require 'npm run start-server' )
				</Text>
			}
		</div>
	)
}

const mapDispatchToProps = {
	onChangeApi: changeApi,
}
const mapStateToProps = ({ server }) => ({ server })

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Info)
