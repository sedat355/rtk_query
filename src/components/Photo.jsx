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
      <div className="absolute top-1 right-1 flex items-center justify-center">
        <Button 
          handleClick={() => removePhoto(photo)}
          btnType="danger" size="circle-sm" className="text-2xl text-red-500 font-bold bg-gray-50">
          <MdClose />
        </Button>
      </div>
    </div>
  )
}

export default Photo
