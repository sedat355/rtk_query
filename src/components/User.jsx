import { MdClose } from "react-icons/md"
import Button from "../reuseable_components/Button"
import ExpandablePanel from "../reuseable_components/ExpandablePanel"
import AlbumList from "./AlbumList"

const User = ({ user }) => {
  return (
    <div className="flex items-center justify-between border border-slate-400 p-2">
      <div className="flex items-center gap-x-4">
        <Button btnType="danger" size="circle-sm">
          <MdClose />
        </Button>
        <span>{user.name}</span>
      </div>

      <ExpandablePanel>
        <AlbumList user={user}/>
      </ExpandablePanel>
      
    </div>
  )
}

export default User
