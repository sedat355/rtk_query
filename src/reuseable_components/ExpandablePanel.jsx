import { useState } from "react"
import Button from "./Button"
import { GoChevronLeft } from "react-icons/go"
import { GoChevronDown } from "react-icons/go"

const ExpandablePanel = ({ children }) => {
  const [isOpenPanel, setIsOpenPanel] = useState(false)

  return (
    <>
      <div onClick={() => setIsOpenPanel(!isOpenPanel)}>
        <Button>{isOpenPanel ? <GoChevronDown /> : <GoChevronLeft />}</Button>
        {isOpenPanel && children}
      </div>
    </>
  )
}

export default ExpandablePanel
