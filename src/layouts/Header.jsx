import React from 'react'

import { AppBar, Box, Toolbar } from '@mui/material'

export default function Header() {
  return (
    <header>
      <Box>
        <AppBar color='secondary' position='relative'>
          <Toolbar>
            <img src="/images/logo.png" alt="logo" className='logo'/>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
}
