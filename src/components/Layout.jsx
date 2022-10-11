import React, { Component } from 'react'
import axios from 'axios';

import '../index.css';
export default class Layout extends Component {
    constructor(props){
        super(props);
        this.state={
            advice:''
        }
    }

    componentDidMount(){
        this.getAdvice();
        console.log(this.state.advice);
    }
    getAdvice=()=>{
        axios.get(`https://api.adviceslip.com/advice`).
        then((response)=>{
            const {advice}=response.data.slip;
            this.setState({advice});
        })
        .catch((error)=>console.log(error))
    }
  render() {
    const advice=this.state.advice;
    return (
      <div className="advice-wrapper">
        <div className='advice-content mx-3'>
        <div className="advice-text">
            <p>{advice}</p>
        </div>
        <div className="next-advice-btn">
            <button onClick={()=>{this.getAdvice()}}>Another Advice</button>
        </div>
        </div>
      </div>
    )
  }
}
