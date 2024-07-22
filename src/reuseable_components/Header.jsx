import Button from "./Button"

const Header = () => {
  return (
    <div className="flex justify-between">
      <span className="font-bold text-2xl">User List</span>
      <Button btnType="primary" size="large">
        +Add User
      </Button>
    </div>
  )
}

export default Header