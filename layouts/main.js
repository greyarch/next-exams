import React from 'react'
import { Box } from 'grommet'

import Head from './head'

const Page = ({ children }) => (
  <Box full={true} appCentered={true} responsive={true}>
    <Head />
    {children}
  </Box>
)

export default Page
