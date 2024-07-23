import Button from "./Button"

const Header = ({title, btnTitle}) => {
  return (
    <div className="flex justify-between">
      <span className="font-bold text-2xl">{title}</span>
      <Button btnType="primary" size="large">
        {btnTitle}
      </Button>
    </div>
  )
}

export default Header