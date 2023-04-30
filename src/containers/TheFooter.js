import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <h1 style={{color:"aqua"}}>ChitMinKhant</h1>
    </CFooter>
  )
}

export default React.memo(TheFooter)
