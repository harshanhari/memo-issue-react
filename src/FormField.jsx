// FormField Component
const FormField = ({
  label,
  type = 'text',
  value,
  onChange,
  options = [],
  readOnly = false,
  step,
  ...props
}) => {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label}
      </label>
      {type === 'select' ? (
        <select
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          disabled={readOnly}
          {...props}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          step={step}
          onChange={(e) =>
            onChange &&
            onChange(
              type === 'number'
                ? (e.target.value === '' ? '' : parseFloat(e.target.value))
                : e.target.value
            )
          }
          className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:border-blue-500 disabled:bg-gray-100"
          readOnly={readOnly}
          disabled={readOnly}
          {...props}
        />
      )}
    </div>
  );
};

// ActionButton Component
const ActionButton = ({
  label,
  variant = 'default',
  disabled = false,
  onClick,
  ...props
}) => {
  const baseClasses =
    "px-3 py-1 text-xs font-medium rounded border transition-colors";

  const variants = {
    primary: "bg-blue-500 text-white border-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300",
    default: "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200",
  };

  const disabledClasses =
    "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${
        disabled ? disabledClasses : variants[variant]
      }`}
      {...props}
    >
      {label}
    </button>
  );
};

export { FormField, ActionButton };