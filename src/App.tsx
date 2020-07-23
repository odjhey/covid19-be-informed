import React, { useState, useEffect, useRef } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import AppContext from './AppContext'
import Home from './pages/Home'
import Symptoms from './pages/Symptoms'
import Prevention from './pages/Prevention'

function App() {
  const AppRef = useRef<HTMLDivElement>(null)
  const [currentTheme, setCurrentTheme] = useState<String | null>(
    localStorage.getItem('theme'),
  )

  const [homeData, setHomeData] = useState()
  const [symptomsData, setSypmtomsData] = useState()
  const [preventionData, setPreventionData] = useState()

  const FetchData = () => {
    axios
      .get('../feed/data.json')
      .then((resp) => {
        setHomeData(resp.data.home)
        setSypmtomsData(resp.data.symptoms)
        setPreventionData(resp.data.prevention)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    FetchData()

    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light-mode')
      setCurrentTheme('light-mode')
    }
  }, [])

  const toggleTheme = () => {
    if (AppRef.current?.classList.contains('light-mode')) {
      AppRef.current?.classList.replace('light-mode', 'dark-mode')
      localStorage.setItem('theme', 'dark-mode')
    } else {
      AppRef.current?.classList.replace('dark-mode', 'light-mode')
      localStorage.setItem('theme', 'light-mode')
    }
  }

  return (
    <div className={`App ${currentTheme}`} ref={AppRef}>
      <AppContext.Provider
        value={{
          toggleTheme,
          homeData,
          symptomsData,
          preventionData,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/symptoms" component={Symptoms} />
          <Route path="/prevention" component={Prevention} />
        </Switch>
      </AppContext.Provider>
    </div>
  )
}

export default App
