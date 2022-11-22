import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  MainConts,
  VideoConts,
  ChannelConts,
  SearchConts,
  HeaderCont,
  SearchBar,
} from './components'
const App = () => {
  return (
    <BrowserRouter>
      <HeaderCont />
      <Routes>
        <Route path="/" element={<MainConts />}></Route>
        <Route path="/" element={<SearchBar />}></Route>
        <Route path="/video/:id" element={<VideoConts />}></Route>
        <Route path="/channel/:id" element={<ChannelConts />}></Route>
        <Route path="/search/:searchkeyword" element={<SearchConts />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
