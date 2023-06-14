import { SVGProps } from 'react'

export function LogoArrows(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="logo-arrows" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 18" {...props}><path fill="currentColor" d="M4.5625 8.58337V15.6648M4.5625 15.6648V15.6667M4.5625 15.6648L8.09804 12.1292L4.56044 15.6648L1.0249 12.1292M11.4375 9.41671L11.4375 2.33532M11.4375 2.33532V2.33337M11.4375 2.33532L7.90199 5.87086L11.4396 2.33532L14.9751 5.87086" strokeWidth="2"></path></svg>
  )
}
export default LogoArrows;