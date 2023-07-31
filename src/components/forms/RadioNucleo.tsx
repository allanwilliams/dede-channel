import { useEffect, useRef, InputHTMLAttributes, RefObject } from 'react'

import { useField, SubmitHandler, FormHandles } from '@unform/core'
import Nucleo from "../../types/nucleo";

/**
 * This is a Radio component that supports rendering multiple options.
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
 */
interface Props {
  name: string
  label?: string
  options: Nucleo[]
}

type RefInputEl = RefObject<HTMLInputElement[]>

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props

export default function RadioNucleo({ name, label, options, ...rest }: InputProps) {
  const inputRefs = useRef<any>([])
  const { fieldName, registerField, defaultValue = '', error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs,
      getValue: (refs) => {
        return refs.current?.find((input: any) => input?.checked)?.value
      },
      setValue: (refs, id) => {
        const inputRef = refs.current.find((ref: any) => ref.id === id)
        if (inputRef) inputRef.checked = true
      },
      clearValue: (refs) => {
        const inputRef = refs.current.find((ref: any) => ref.checked === true)
        if (inputRef) inputRef.checked = false
      },
    })
  }, [fieldName, registerField])

  return (
    <>
      {options.map((option, index) => (
        <div key={index} className="card-nucleo">
          <div>
            <input
              type="radio"
              ref={ref => {
                inputRefs.current[index] = ref
              }}
              id={String(option.id)}
              name={name}
              defaultChecked={defaultValue.includes(option.id)}
              value={option.id}
              {...rest}
              /><label> {option.nome}</label>
          </div>
          <small>
              {option.endereco}
          </small>
          <small>
              {option.tel}
          </small>
      </div>
      ))}
      {error && <span>{error}</span>}
    </>
  )
}