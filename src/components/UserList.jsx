import { useFetchUsersQuery } from "../store/slices/usersApi"
import User from "./User";

const UserList = () => {
  const { data } = useFetchUsersQuery();

  const renderedUsers = data?.map( user => {
    return <User key={user.id} user={user}/>
  })
  return (
    <div>
      {renderedUsers}
    </div>
  )
}

export default UserList