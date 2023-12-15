'use client'
import react from 'react'
import styled from 'styled-components';
const MainWrapper = styled.main`
  width: 100%;
  max-width: 800px;
  padding: 16px 24px;
  margin: 0px auto;
  border: 1px solid hsl(0deg 0% 50% / 0.3);
  border-radius: 2px;
  background: white;
`;


export default function Article({ children }) {
    return (
        <MainWrapper>
            {children}
        </MainWrapper>
    )
}