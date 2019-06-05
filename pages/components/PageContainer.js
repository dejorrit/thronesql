import React from 'react'
import styled from 'styled-components'

const StyledPageContainer = styled.div`
  padding: 20px;
`

const PageContainerInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

export default function PageContainer ({ children }) {
  return (
    <StyledPageContainer>
      <PageContainerInner>
        {children}
      </PageContainerInner>
    </StyledPageContainer>
  )
}
