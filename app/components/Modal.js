import React from 'react'

const styles = show => ({
  display:         show ? 'flex' : 'none',
  position:        'fixed',
  zIndex:          '10',
  left:            '0',
  top:             '0',
  width:           '100%',
  height:          '100%',
  overflow:        'auto',
  backgroundColor: 'rgba(0,0,0,0.6)',
  justifyContent:  'center',
  alignItems:      'center'
})

const containerStyles = {
  backgroundColor: 'rgb(40, 48, 52)',
  padding:         '20px',
  border:          '1px solid rgb(62, 68, 81)',
  width:           '50%'
}

const closeButtonStyles = {
  float: 'right'
}

export default ({ children, show, hideModal }) =>
  <div
    style={styles(show)}
    onClick={hideModal}>

    <div style={containerStyles} onClick={e => e.stopPropagation()}>
      {children}
    </div>
  </div>

  // <div style={{height: '2rem'}}>
  //   <a
  //     style={closeButtonStyles}
  //     href="#"
  //     onClick={e => { e.preventDefault(); hideModal(); }}>
  //     <h4>X</h4>
  //   </a>
  // </div>
