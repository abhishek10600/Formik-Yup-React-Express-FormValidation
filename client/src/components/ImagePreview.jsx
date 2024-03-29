import { useState } from "react"

const ImagePreview = ({ file }) => {
    const [preview, setPreview] = useState({})
    if (file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreview(reader.result)
        }
    }
    return (
        <div>
            <img className="w-[300px]" src={preview} alt="" />
        </div>
    )
}

export default ImagePreview