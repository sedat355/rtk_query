import List from "../components/List"
import { useFetchUsersQuery } from "../store/slices/usersApi"
import Header from "./Header"

const Panel = () => {
  const { data } = useFetchUsersQuery()

  console.log(data)

  return (
    <div>
      <Header/>
      <List/>
    </div>
  )
}

export default Panel