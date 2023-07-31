import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

type Props = {
  name: string,
  rest?: any
}


export default function TextArea({ name, ...rest }: Props) {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])
  return ( 
    <div>  
      <textarea className={`w100 form-control  ${error ? "input-erro" : ""}`} ref={inputRef} defaultValue={defaultValue} {...rest} />
      <span className='erro'>{error}</span>
    </div>
  )
}