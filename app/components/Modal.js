import React from 'react'

const styles = {
  display:         'none',
  position:        'fixed',
  zIndex:          '10',
  left:            '0',
  top:             '0',
  width:           '100%',
  height:          '100%',
  overflow:        'auto',
  backgroundColor: 'rgba(0,0,0,0.4)'
}

const contentStyles = {
  backgroundColor: '#fefefe',
  margin:          '15% auto',
  padding:         '20px',
  border:          '1px solid #888',
  width:           '80%'
}

const closeButtonStyles = {
  float: 'right';
}

export default ({ children }) =>
  <div style={styles}>
    <a style={closeButtonStyles} href="#">X</a>
    <div style={contentStyles}>
      {children}
    </div>
  </div>
