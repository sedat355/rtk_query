import classNames from 'classnames'
import PropTypes from 'prop-types'
// import { LuLoader2 } from 'react-icons/lu'

const Button = ({children, btnType, type="button", size="medium", handleClick, loading, ...rest}) => {

  const baseClasses = 'flex items-center justify-center font-semibold rounded';

  const variants = {
    "bg-blue-500 text-white": btnType === "primary",
    "bg-gray-one text-black opacity-50": btnType === "passive",
    "bg-green-two text-white": btnType === "success",
    "bg-red-one text-white": btnType === "danger",
    "bg-transparent text-black border border-black-one": btnType === "outline",
    "p-1.5 text-sm rounded-full": size === 'circle-sm',
    "p-2.5 text-lg rounded-full": size === 'circle-md',
    "p-3 text-xl rounded-full": size === 'circle-lg',
    "p-1.5 text-sm": size === 'square',
    "px-1.5 py-1 text-sm": size === 'square-sm',
    "px-2.5 py-1.5 text-lg": size === 'square-md',
    "px-4 py-1.5 text-xl": size === 'square-lg',
    "py-2.5 px-1 text-sm": size === 'upright-sm',
    "py-3.5 px-1 text-lg": size === 'upright-md',
    "py-5 px-1 text-xl": size === 'upright-lg',
    "px-2 py-1 text-sm": size === 'small',
    "px-4 py-1 text-md": size === 'medium',
    "px-6 py-2 text-lg": size === 'large',  
    "px-2 py-1 text-md max-w-full": size === 'full',  
  }

  const btnClasses = classNames(baseClasses, variants, rest.className)

  return(
    <button {...rest} disabled={loading} onClick={handleClick} className={btnClasses}>
     {children}
    </button>
  )
}

Button.propTypes = {
  btnType: PropTypes.oneOf(['primary', 'passive', 'success', 'danger', 'outline']),
  size: PropTypes.oneOf(["small", "medium", "large", "circle-sm","circle-md", "circle-lg", "full", "square-sm", "square-md", "square-lg", "square", "upright-sm", "upright-md", "upright-lg"]),
  type: PropTypes.oneOf(["button", "submit", "reset"])

}

export default Button;