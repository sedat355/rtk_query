import { useState } from "react"
import Button from "./Button"
import { GoChevronLeft } from "react-icons/go"
import { GoChevronDown } from "react-icons/go"

const ExpandablePanel = ({ children, leftSectionItem }) => {
  const [isOpenPanel, setIsOpenPanel] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between">
        {leftSectionItem}

        <div onClick={() => setIsOpenPanel(!isOpenPanel)}>
          <Button>{isOpenPanel ? <GoChevronDown /> : <GoChevronLeft />}</Button>
        </div>
      </div>

      {isOpenPanel && children}
    </>
  )
}

export default ExpandablePanel
