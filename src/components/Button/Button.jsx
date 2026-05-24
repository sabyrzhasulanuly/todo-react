import clsx from 'clsx'
import styles from './Button.module.scss'

export const Button = ({ children, onClick, isDisabled, type = 'button', className = '' }) => {
  return (
    <button
      className={clsx(styles.button, className)}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
