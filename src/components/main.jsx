import React from 'react'
import States from "./selectState/index"
import './main.css'
import Countys from './selectCounty'
import ContentCounty from './contentCounty'

function Main() {
  return (
    <main>

      <header>
        <h1>Buscar Estados</h1>
      </header>

      <section>
         <States/>
         <Countys/>
      </section>

      <section>
        <ContentCounty/>
      </section>

    </main>
  )
}

export default Main