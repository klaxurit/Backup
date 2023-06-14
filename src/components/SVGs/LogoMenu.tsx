import { SVGProps } from 'react'

export function LogoMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3.75 6.875H16.25M3.75 13.125H16.25" stroke="white" strokeWidth="2"/>
    </svg>
  )
}
export default LogoMenu;