import { MdClose } from "react-icons/md"
import Button from "../reuseable_components/Button"
import ExpandablePanel from "../reuseable_components/ExpandablePanel"

const Album = ({album}) => {

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
      <ExpandablePanel leftSectionItem={leftSectionItem}>

      </ExpandablePanel>
    </div>
  )
}

export default Album