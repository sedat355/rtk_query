import Button from "../reuseable_components/Button"
import { MdClose } from "react-icons/md"
import { useRemovePhotoMutation } from "../store/slices/photosApi"

const Photo = ({ photo }) => {
  const [ removePhoto, result ] = useRemovePhotoMutation();

  return (
    <div className="relative flex items-center justify-center border border-slate-400 w-24 h-32">
      <img
        className="h-full object-cover w-full"
        src={photo.url}
        alt={photo.name}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 opacity-0 hover:opacity-70">
        <Button 
          handleClick={() => removePhoto(photo)}
          size="circle-sm" className="bg-red-400">
          <MdClose className="text-2xl font-bold"/>
        </Button>
      </div>
    </div>
  )
}

export default Photo
