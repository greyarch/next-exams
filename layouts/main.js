import React from 'react'
import {App, Box} from 'grommet'

import Head from './head'

export default ({ children }) => (
  <Box full={true} appCentered={true} responsive={true}>
    <Head/>
    { children }
  </Box>
)
