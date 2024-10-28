import React from 'react'

export const PersonaBadge = (props:{rotation:string;text:string}) => {
  return (
    <div className={`gradient-bg-without-noise p-2 w-fit h-8 rounded-2xl ${props.rotation}`}>{props.text}</div>
  )
}
