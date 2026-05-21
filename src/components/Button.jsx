import clsx from 'clsx'

export const Button = ({ children, type = 'button', className = '' }) => {
  return (
    <button
      className={clsx('button', className)}
      type={type}
    >
      {children}
    </button>
  )
}
