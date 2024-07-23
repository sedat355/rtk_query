import { MdClose } from "react-icons/md"
import Button from "../reuseable_components/Button"

const User = ({ user }) => {
  return (
    <div className="border border-slate-400 p-2">
      <div className="flex items-center gap-x-4">
        <Button btnType="danger" size="circle-sm">
          <MdClose />
        </Button>
        <span>{user.name}</span>
      </div>
    </div>
  )
}

export default User
