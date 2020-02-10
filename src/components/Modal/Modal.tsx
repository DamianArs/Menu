import React from 'react'

import styles from './Modal.module.scss';

interface Props{
  firstModalClick: ()=>void;
  secondModalClick: ()=>void;
  thirdModalClick: ()=>void;
}
export const Modal:React.FC<Props> = ({firstModalClick, secondModalClick, thirdModalClick}) => (
  <div className={styles.wrapper}>
    <ul>
     <li onClick={firstModalClick}>Pierwsza funkcja</li>
     <li onClick={secondModalClick}>Druga funkcja</li>
     <li onClick={thirdModalClick}>Trzecia funkcja</li>
    </ul>
  </div>
)