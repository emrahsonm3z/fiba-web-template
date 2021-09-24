import * as React from 'react'

function SvgOther(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      className=""
      {...props}>
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <circle fill="currentColor" cx={5} cy={12} r={2} />
        <circle fill="currentColor" cx={12} cy={12} r={2} />
        <circle fill="currentColor" cx={19} cy={12} r={2} />
      </g>
    </svg>
  )
}

export default SvgOther
