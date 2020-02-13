import { useState } from 'react'

/**
 * Hook to manage a timeout of a specified amount of time.
 *
 * @param delay Milliseconds to wait before the timeout expires.
 * @returns An array with two elements:
 * * A boolean indicating if the timeout is expired or not.
 * * A method to reset the timeout.
 */
const useTimeout = (delay: number): [boolean, () => void] => {
  const [isExpired, setIsExpired] = useState(false)
  let timeout: NodeJS.Timeout

  const resetTimeout = () => {
    clearTimeout(timeout)
    setIsExpired(false)
    timeout = setTimeout(() => {
      setIsExpired(true)
    }, delay)
  }

  resetTimeout()
  return [isExpired, resetTimeout]
}

export default useTimeout
