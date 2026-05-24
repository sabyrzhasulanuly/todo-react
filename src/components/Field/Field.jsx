import clsx from 'clsx'
import styles from './Field.module.scss'

export const Field = ({ id, label, value, error, onInput, ref, type = 'text', className = '' }) => {
  return (
    <div className={clsx(styles.field, className)}>
      <label
        className={styles.label}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={clsx(styles.input, error && styles.isInvalid)}
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        value={value}
        onInput={onInput}
        ref={ref}
      />
      {error && (
        <span className={styles.error} title={error}>{error}</span>
      )}
    </div>
  )
}
