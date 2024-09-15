import React from 'react'

interface CursorProps {
  color?: string
}

const Cursor: React.FC<CursorProps> = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <g filter="url(#filter0_d_2_4946)">
            <path d="M5.39205 9.98705L16.2999 4.42947L13.2184 16.3636L10.471 11.7177L5.39205 9.98705Z" fill={color} shapeRendering="crispEdges"/>
            <path d="M5.16698 9.53867L4.10675 10.0789L5.23358 10.4628L10.138 12.134L12.791 16.6203L13.4006 17.651L13.7001 16.491L16.7816 4.55694L17.0599 3.47919L16.0748 3.98109L5.16698 9.53867Z" stroke="none" strokeOpacity="0.8" shapeRendering="crispEdges"/>
        </g>
        <defs>
            <filter id="filter0_d_2_4946" x="0.821533" y="1.52881" width="18.9983" height="20.4097" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="1"/>
                <feGaussianBlur stdDeviation="1"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_4946"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_4946" result="shape"/>
            </filter>
        </defs>
    </svg>
  )
}

export default Cursor