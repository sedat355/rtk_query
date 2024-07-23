import Header from "../reuseable_components/Header"
import UserList from "./UserList"

const App = () => {
  return (
    <div>
      <Header title="User List" btnTitle="+Add User" btnSize="large" textSize="text-2xl"/>
      <UserList/>
    </div>
  )
}

export default App
