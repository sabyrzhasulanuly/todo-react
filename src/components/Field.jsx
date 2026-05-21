import clsx from 'clsx'

export const Field = ({ id, label, onInput, type = 'text', className = '' }) => {
  return (
    <div className={clsx('field', className)}>
      <label
        className="field__label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        onInput={onInput}
      />
    </div>
  )
}
