import { useFetchPhotosQuery } from "../store/slices/photosApi"
import Photo from "./Photo";

const PhotoList = ({album}) => {
  const { data } = useFetchPhotosQuery(album);

  const renderedPhotos = data?.map( photo => {
    return <Photo key={photo.id} photo={photo}/>
  })

  return (
    <div className="flex gap-x-1 mt-4">
      {renderedPhotos}
    </div>
  )
}

export default PhotoList