import Header from "../reuseable_components/Header"
import { useAddUserMutation } from "../store/slices/usersApi"
import UserList from "./UserList"

const App = () => {
  const [ addUser, result ] = useAddUserMutation();

  return (
    <div>
      <Header handleAdd={addUser} title="User List" btnTitle="+Add User" btnSize="large" textSize="text-2xl"/>
      <UserList/>
    </div>
  )
}

export default App
