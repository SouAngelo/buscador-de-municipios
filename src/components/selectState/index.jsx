import React from 'react'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import api from "../../services/index"
import '../selectStyles.css'

function States() {

  const dispatch = useDispatch()

  const [states, setStates] = useState([])
  const [selectValueState, setSelectValueState] = useState('')

  useEffect(() => {
    async function getStates(){
      const response = await api.get('localidades/estados')

      setStates(response.data)
    }

    getStates()
  }, [selectValueState])

useEffect(() => {
  function handleStates(){


    dispatch({
      type: 'ADD_STATE',
      selectValueState
    })

  }

  handleStates()
}, [selectValueState])

  return (
    <div>
      <select
      value={selectValueState}
      onChange={(e) => setSelectValueState(e.target.value)}
      placeholder='Selecione um Estado'
      className='selectOptions'
      >
        <option hidden value="">Selecione um Estado</option>
         {states.map(state => (
          <option value={state.sigla} key={state.id}>{state.sigla}</option>
         ))}
      </select>
    </div>
  )
}

export default States