import * as React from 'react'

function SvgSearch(props) {
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
        <path
          d="M14.293 16.707a1 1 0 011.414-1.414l4 4a1 1 0 01-1.414 1.414l-4-4z"
          fill="currentColor"
          fillRule="nonzero"
          opacity={0.3}
        />
        <path
          d="M11 16a5 5 0 100-10 5 5 0 000 10zm0 2a7 7 0 110-14 7 7 0 010 14z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}

export default SvgSearch
