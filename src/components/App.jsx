import Header from "../reuseable_components/Header"
import UserList from "./UserList"

const App = () => {
  return (
    <div>
      <Header title="User List" btnTitle="+Add User"/>
      <UserList/>
    </div>
  )
}

export default App
