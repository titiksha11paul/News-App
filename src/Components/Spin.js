import React from 'react'
import loading from './loading.gif'
const Spin=()=>{//export class Spin extends Component {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }


export default Spin
