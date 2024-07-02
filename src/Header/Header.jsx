import React from 'react'
import styles from './Header.module.css'
import SimpleListMenu from '../drawer/Dropdown';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <img src="../src/assets/download.png" alt="" />
      </div>
      <div style={{display: 'flex', alignItems: 'center', }}>
        <ul style={{display: 'flex', gap: 60, marginRight: 40, letterSpacing: 1,}}>
          <li>Home</li>
          <li>Pages</li>
          <li>Course</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className={styles.searchBox}>
        <input type="text" name="" id="" placeholder="Search Course"/>
        <a href="##" class="icon">
            <img src="../src/assets/vector5.svg" alt="" />
        </a>
    </div>
      </div>
    </div>
  )
}

export default Header;
