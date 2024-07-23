import Button from "./Button"

const Header = ({title, btnTitle, btnSize, textSize}) => {
  return (
    <div className="flex justify-between mt-4">
      <span className={`font-bold ${textSize}`}>{title}</span>
      <Button btnType="primary" size={btnSize}>
        {btnTitle}
      </Button>
    </div>
  )
}

export default Header