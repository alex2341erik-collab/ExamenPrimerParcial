import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrincipalApp } from "./PrincipalApp";

import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrincipalApp />
  </StrictMode>,
)
