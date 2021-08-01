import React from 'react'
import cn from 'classnames'
import RotateRightIcon from '@material-ui/icons/RotateRight'

const Loader = ({ message = '', absolute = false }) => (
  <div
    className={cn(
      'flex flex-col items-center justify-center w-full h-full p-20',
      {
        'absolute top-0 left-0': absolute
      }
    )}
  >
    {absolute && (
      <div className='absolute block w-full h-full bg-white opacity-75' />
    )}
    <span className='flex items-center text-orange-500 animate-spin'>
      <RotateRightIcon />
    </span>
    {message && <div className='pt-5 text-xl'>{message}</div>}
  </div>
)

export default Loader