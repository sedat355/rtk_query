import { useFetchAlbumsQuery } from "../store/slices/albumsApi"
import Album from "./Album"

const AlbumList = ({user}) => {
  const { data } = useFetchAlbumsQuery(user)

  const renderedAlbums = data?.map( album => {
    return <Album key={album.id} album={album}/>
  })

  return (
    <div className="mt-4 flex flex-col gap-y-1">
      {renderedAlbums}
    </div>
  )
}

export default AlbumList