const React = require('react')

module.exports = function DumberComponent(props) {
  return (
    <div onClick={props.handleClick} >I am just happy</div>
  )
}
