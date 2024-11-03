'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      width={70}
      height={70}
      viewBox="0 0 200 200"
      className={cn('', className)}
      strokeMiterlimit={10}
      style={{
        fillRule: "nonzero",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <clipPath id="a">
        <path d="M0 0h200v200H0z" />
      </clipPath>
      <g
        clipPath="url(#a)"
        stroke="#fff"
        strokeLinecap="butt"
        strokeWidth={7.287}
      >
        <path
          d="M125.963 109.565a12.613 12.613 0 0 1-6.126-10.727l-.479-66.64c-.071-9.784 10.542-15.92 18.986-10.976l31.692 18.551a12.616 12.616 0 0 1 6.242 10.863l.124 66.881c.018 9.814-10.685 15.889-19.102 10.842l-31.337-18.794Z"
          fill="#2f2e2e"
        />
        <path
          d="M107.187 152.697a12.61 12.61 0 0 1-6.126-10.727l-.479-66.639c-.071-9.784 10.542-15.92 18.986-10.977l31.692 18.552a12.615 12.615 0 0 1 6.242 10.862l.124 66.881c.018 9.815-10.685 15.89-19.102 10.842l-31.337-18.794Z"
          fill="#2f2e2e"
        />
        <path
          d="M87.566 114.531a12.614 12.614 0 0 1-6.126-10.727l-.479-66.64c-.07-9.784 10.542-15.92 18.987-10.976l31.691 18.551a12.614 12.614 0 0 1 6.242 10.863l.124 66.881c.019 9.814-10.685 15.889-19.102 10.841l-31.337-18.793Z"
          fill="#2f2e2e"
        />
        <path
          d="M68.818 169.647a12.615 12.615 0 0 1-6.126-10.727l-.48-66.64c-.07-9.784 10.543-15.92 18.987-10.976l31.692 18.551a12.613 12.613 0 0 1 6.242 10.863l.124 66.881c.018 9.814-10.685 15.889-19.102 10.842l-31.337-18.794Z"
          fill="#2f2e2e"
        />
        <path
          d="M50.044 114.48a12.615 12.615 0 0 1-6.127-10.728l-.478-66.639c-.07-9.784 10.542-15.92 18.986-10.977l31.692 18.552a12.616 12.616 0 0 1 6.242 10.863l.124 66.881c.018 9.814-10.685 15.889-19.102 10.841L50.044 114.48Z"
          fill="#86eee9"
        />
        <path
          d="M30.321 157.612a12.615 12.615 0 0 1-6.126-10.727l-.48-66.64c-.07-9.784 10.543-15.92 18.988-10.976L74.394 87.82a12.614 12.614 0 0 1 6.242 10.863l.124 66.881c.018 9.814-10.685 15.889-19.102 10.841l-31.337-18.793Z"
          fill="#2f2e2e"
        />
      </g>
    </svg>
  )
}

export { IconLogo }
