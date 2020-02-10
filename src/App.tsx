import React from 'react';

import { Header } from './components/Header/Header';
import { Modal } from './components/Modal/Modal';
import './App.scss'

export interface PropsState{
  isActive: boolean;
}

const  App:React.FC = () =>{
  const [state, setState] = React.useState<PropsState>({
  isActive: false
  })

  const ref = React.useRef();

  React.useEffect(()=>{
    document.addEventListener('click', handleCloseModal, false);
  },[])

  const handleCloseModal = (event:Event) => {
    if(ref.current===event.target){
      return
    }
    setState({
      isActive: false
    })  
   }

  const handleFirstClick = () =>{
    console.log('Wywołanie pierwszej funkcji');
  }
  const handleSecondClick = () => {
    console.log('Wywołanie drugiej funkcji');
  }
  const handleThirdClick = () => {
    setState({
      isActive: !state.isActive
    })
  }
  const handleFirstModalClick = () =>{
    console.log('Wywołanie pierwszej funkcji modala');
    setState({
      isActive: false
    })
  }
  const handleSecondtModalClick = () =>{
    console.log('Wywołanie drugiej funkcji modala');
    setState({
      isActive: false
    })
  }
  const handleThirdModalClick = () =>{
    console.log('Wywołanie trzeciej funkcji modala');
    setState({
      isActive: false
    })
  }
  return (
    <>
    <Header 
      ref={ref}
      firstClick = {handleFirstClick}
      secondClick = {handleSecondClick}
      thirdClick = {handleThirdClick}
      isActive = {state.isActive}
    />
     {state.isActive ? <Modal
      firstModalClick = {handleFirstModalClick}
      secondModalClick = {handleSecondtModalClick}
      thirdModalClick = {handleThirdModalClick}
    /> :null}
    </>
  );
}

export default App;