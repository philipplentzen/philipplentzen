import React, { forwardRef } from "react"

interface TitleProps {
  title: string
  subTitle: string | React.ReactNode
  isSub?: boolean
  isLanding?: boolean
}

export const Title: React.ForwardRefExoticComponent<
  TitleProps & React.RefAttributes<any>
> = forwardRef(({ title, subTitle, isSub = false, isLanding = false }, ref) => {
  return (
    <div className="title" ref={ref}>
      {isSub ? (
        <>
          <h3>{title}</h3>
          <h4>{subTitle}</h4>
        </>
      ) : (
        <>
          <h1>{title}</h1>
          {isLanding ? <span>{subTitle}</span> : <h2>{subTitle}</h2>}
        </>
      )}
    </div>
  )
})
