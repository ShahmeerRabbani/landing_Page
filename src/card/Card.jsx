import React from 'react'
import styles from './Card.module.css'

const Card = ({img, title}) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="" />
      <div className={styles.caption}>
        <a href='#' className={styles.anchor}>{title}</a>
        <a href="#" className={styles.anchor}>learn more</a>
      </div>
    </div>
  )
}

export default Card;
