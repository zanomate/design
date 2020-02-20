import { useState } from 'react'

const useList = <T>(): [
  T[],
  (element: T) => void,
  (element: T) => void
] => {
  const [list, setList] = useState<T[]>([])

  const add = (element: T) => {
    setList([...list, element])
  }

  const remove = (element: T) => {
    setList(list.filter(el => el !== element))
  }

  return [list, add, remove]
}

export default useList
