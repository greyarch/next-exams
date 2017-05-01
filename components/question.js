import React from 'react'
import { Box, Section, Markdown, CheckBox, Button } from 'grommet'

export default props => (
  <Section
    key={props.question.id}
    align='center'
    pad='large'
    full='vertical'
    justify='center'
  >
    <Markdown content={props.question.text} />
    <br />
    <Box align='start'>
      {props.question.answers.map(ans => (
        <CheckBox key={ans.id} label={<Markdown content={ans.text} />} />
      ))}
      <br />
      <Button label='Next question' onClick={props.onNextQuestion} />
    </Box>
  </Section>
)
