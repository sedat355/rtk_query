import { MdClose } from "react-icons/md"
import Button from "../reuseable_components/Button"
import ExpandablePanel from "../reuseable_components/ExpandablePanel"
import PhotoList from "./PhotoList"
import { useAddAlbumMutation } from "../store/slices/albumsApi"

const Album = ({album, user}) => {
  const [ addAlbum, result ] = useAddAlbumMutation();

  const handleAdd = () => {
    addAlbum(user)
  }

  const leftSectionItem = (
    <div className="flex items-center gap-x-4">
      <Button btnType="danger" size="circle-sm">
        <MdClose />
      </Button>
      <span>{album.name}</span>
    </div>
  )

  return (
    <div className="border border-slate-400 p-2">
      <ExpandablePanel handleAdd={addAlbum} obj={user} leftSectionItem={leftSectionItem}>
        <PhotoList album={album}/>
      </ExpandablePanel>
    </div>
  )
}

export default Album