import { MdClose } from "react-icons/md"
import Button from "../reuseable_components/Button"
import ExpandablePanel from "../reuseable_components/ExpandablePanel"
import PhotoList from "./PhotoList"
import {
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "../store/slices/albumsApi"
import Header from "../reuseable_components/Header"
import { useAddPhotoMutation } from "../store/slices/photosApi"

const Album = ({ album }) => {
  const [removeAlbum] = useRemoveAlbumMutation()
  const [addPhoto] = useAddPhotoMutation()

  const leftSectionItem = (
    <div className="flex items-center gap-x-4">
      <Button
        handleClick={() => removeAlbum(album)}
        btnType="danger"
        size="circle-sm"
      >
        <MdClose />
      </Button>
      <span>{album.name}</span>
    </div>
  )

  return (
    <div className="border border-slate-400 p-2">
      <ExpandablePanel handleAdd={addPhoto} leftSectionItem={leftSectionItem}>
        <Header
          handleAdd={addPhoto}
          obj={album}
          title={`${album.name} albümündeki fotoğraflar`}
          btnTitle="+Add Photo"
          btnSize="small"
          textSize="text-lg"
        />
        <PhotoList album={album} />
      </ExpandablePanel>
    </div>
  )
}

export default Album
