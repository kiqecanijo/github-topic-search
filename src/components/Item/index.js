import React from 'react'
import { Pane, Text, Popover, Button } from 'evergreen-ui'

const Item = ({ values }) => {
  const { name, description, created_by, released, created_at, score } = values
  return (
    <Popover
      content={
        <Pane
          elevation={2}
          background="overlay"
          padding={20}
          height={'auto'}
          width={330}
          display="flex"
          alignItems="left"
          justifyContent="center"
          flexDirection="column">
          <Text marginY={10} color={'white'} size={500}>
            <b>Name:</b> {name}
          </Text>

          <Text marginY={10} color={'white'} size={500}>
            <b>description:</b> {description}
          </Text>
          <Text marginY={10} color={'white'} size={500}>
            <b>created_by:</b> {created_by}
          </Text>
          <Text marginY={10} color={'white'} size={500}>
            <b>released:</b> {released}
          </Text>
          <Text marginY={10} color={'white'} size={500}>
            <b>created_at:</b> {created_at}
          </Text>

          <Text marginY={10} color={'white'} size={500}>
            <b>score:</b> {score}
          </Text>
        </Pane>
      }>
      <Button paddingY={20} paddingX={40} margin={5} height={'auto'}>
        <Text display="block" color={'black'} style={{ fontSize: '20px' }}>
          {name}
        </Text>
      </Button>
    </Popover>
  )
}
export default Item
