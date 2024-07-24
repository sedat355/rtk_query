import Button from "./Button"

const Header = ({title, btnTitle, btnSize, textSize, handleAdd, obj}) => {

  const handleAddClick = () => {
    handleAdd(obj);
  }

  return (
    <div className="flex items-start justify-between mt-4">
      <span className={`font-bold ${textSize}`}>{title}</span>
      <Button
        handleClick={handleAddClick} 
        className="whitespace-nowrap"
        btnType="primary" size={btnSize}>
        {btnTitle}
      </Button>
    </div>
  )
}

export default Header