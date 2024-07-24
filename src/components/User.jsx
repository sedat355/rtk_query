import { MdClose } from "react-icons/md"
import Button from "../reuseable_components/Button"
import ExpandablePanel from "../reuseable_components/ExpandablePanel"
import AlbumList from "./AlbumList"
import Header from "../reuseable_components/Header"
import { useRemoveUserMutation } from "../store/slices/usersApi"

const User = ({ user }) => {
  const [ removeUser, result ] = useRemoveUserMutation();

  const leftSectionItem = (
    <div className="flex items-center gap-x-4">
      <Button handleClick={() => removeUser(user) } btnType="danger" size="circle-sm">
        <MdClose />
      </Button>
      <span>{user.name}</span>
    </div>
  )

  return (
    <div className="border border-slate-400 p-2">
      <ExpandablePanel leftSectionItem={leftSectionItem}>
        <Header
          title={`${user.name}'in album listesi`}
          btnTitle="+Add Album"
          btnSize="medium"
          textSize="text-xl"
        />
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  )
}

export default User
