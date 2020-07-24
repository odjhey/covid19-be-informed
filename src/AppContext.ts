import React from 'react'

interface ContextType {
  toggleTheme: () => void
  homeData:
    | Array<{ title: string; description: string; svg: string }>
    | undefined
  symptomsData: Array<{ svg: string; title: string }> | undefined
  preventionData: Array<{ svg: string; title: string }> | undefined
}
const AppContext = React.createContext<ContextType | undefined>(
  undefined,
)

export default AppContext
