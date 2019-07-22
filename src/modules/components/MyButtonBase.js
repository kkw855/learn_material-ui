import React from 'react'
import PropTypes from 'prop-types'

export const styles = {
  /* Styles applied to the root element. */
}

const MyButtonBase = React.forwardRef(function MyButtonBase(props, ref) {
  return (
    <button ref={ref}>
      {props.children}
    </button>
  )
})
MyButtonBase.displayName = 'MyButtonBase'

MyButtonBase.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
}

export default MyButtonBase