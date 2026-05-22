import clsx from 'clsx'

export const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      className={clsx('button', className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
