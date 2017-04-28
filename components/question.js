import React from 'react'
import {Box, Section, Markdown, CheckBox, Button} from 'grommet'

function test() {
  console.log('TEST!')
}

export default (props) => (
  <Section
    key={props.question.id}
    align='center'
    pad='large'
    full='vertical'
    justify='center'>
    <Markdown content={props.question.text}/>
    <Box align='start'>
      {props.question.answers.map(ans =>
        <CheckBox key={ans.id} label={<Markdown content={ans.text} />} />
      )}
      <Button label='Next question' onClick={test} />
    </Box>
  </Section>
)
