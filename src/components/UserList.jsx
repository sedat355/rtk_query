import { useFetchUsersQuery } from "../store/slices/usersApi"
import User from "./User";

const UserList = () => {
  const { data } = useFetchUsersQuery();

  const renderedUsers = data?.map( user => {
    return <User key={user.id} user={user}/>
  })
  return (
    <div className="flex flex-col gap-y-2 mt-4">
      {renderedUsers}
    </div>
  )
}

export default UserList