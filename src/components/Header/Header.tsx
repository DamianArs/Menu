import React from 'react';

import styles from './Header.module.scss';
import drops from './../../assets/drops.svg'
import transparency from './../../assets/transparency.svg'
import transparency1 from './../../assets/transparency1.svg'
import {PropsState} from './../../App'

interface Props{
  firstClick: ()=>void;
  secondClick: ()=>void;
  thirdClick: ()=>void;
  ref:React.Ref<any>
}

export const Header:React.FC<Props & PropsState> = React.forwardRef ((props,ref) => (
  <div className={styles.wrapper}>
    <button onClick={props.firstClick}><img src={transparency} alt='one'/></button>
    <button onClick={props.secondClick}><img src={transparency1} alt='two'/></button>
    <button onClick={props.thirdClick}><img ref={ref} className={props.isActive ? styles.modalImgActive : undefined}src={drops} alt='drops' /></button>
  </div>
))