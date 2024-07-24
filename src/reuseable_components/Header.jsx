import Button from "./Button"

const Header = ({title, btnTitle, btnSize, textSize, handleAdd, obj}) => {

  const handleAddClick = () => {
    handleAdd(obj);
  }

  return (
    <div className="flex justify-between mt-4">
      <span className={`font-bold ${textSize}`}>{title}</span>
      <Button
        handleClick={handleAddClick} 
        btnType="primary" size={btnSize}>
        {btnTitle}
      </Button>
    </div>
  )
}

export default Header