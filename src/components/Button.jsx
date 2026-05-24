import clsx from 'clsx'

export const Button = ({ children, onClick, isDisabled, type = 'button', className = '' }) => {
  return (
    <button
      className={clsx('button', className)}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
