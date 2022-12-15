import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from '../../services'
import '../selectStyles.css'

function Countys() {

  const state = useSelector(state => state.selects)
  const dispatch = useDispatch()

  const [countys, setCountys] = useState([])
  const [countyName, setCountyName] = useState(undefined)
  const [countyInfo, setCountyInfo] = useState([])

  useEffect(() => {
  async function getCountys(){
   const response = await api.get(`localidades/estados/${state}/municipios`)

   setCountys(response.data)
  }

  getCountys()
  })

  useEffect(() => {
    async function getInfoCounty(){
      const response = await api.get(`localidades/municipios/${countyName}`)

      setCountyInfo(response.data)
    }

    getInfoCounty()
    
  }, [countyName])
  

  useEffect(() => {
   function handleCountyInfo(){
     
    dispatch({
      type: 'COUNTY_INFO',
      countyInfo
    })
   }

   handleCountyInfo()
  }, [countyInfo])

  return (
    <div>
      <select
      onChange={(id) => setCountyName(id.target.value)}
      className='selectOptions'
      >
        <option hidden value="">Selecione uma Cidade</option>
        {countys.map(county => (
          <option value={county.id} key={county.id}>{county.nome}</option>
        ))}
      </select>
    </div>
  )
}

export default Countys