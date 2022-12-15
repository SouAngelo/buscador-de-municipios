import React from 'react'
import { useSelector } from 'react-redux'

function ContentCounty() {

  const state = useSelector(state => state.countys)

  console.log(state)

  return (
    <div>
      <h2>Município: {state.nome}</h2>
      <h1>Microrregião: {state.microrregiao?.nome}</h1>
      <p>Mesorregião: {state.microrregiao?.mesorregiao?.nome}</p>
      <p>Estado: {state.microrregiao?.mesorregiao?.UF?.nome}</p>
      <p>Região: {state.microrregiao?.mesorregiao?.UF?.regiao.nome}</p>
    </div>
  )
}

export default ContentCounty