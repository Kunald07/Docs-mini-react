import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);

    const data =[
        {
            desc: "This is the color of the card that will be displayed",
            filesize: ".9mb",
            close: true,
            tag: {isopen: true, tagTitle: "Download Now", tagColor: "green"}
        },

        {
            desc: "This is the color of the card that will be displayed",
            filesize: ".9mb",
            close: true,
            tag: {isopen: false, tagTitle: "Download Now", tagColor: "blue"}
        },

        {
            desc: "This is the color of the card that will be displayed",
            filesize: ".9mb",
            close: true,
            tag: {isopen: true, tagTitle: "Upload", tagColor: "blue"}
        }
    ]

return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index )=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
)
}

export default Foreground
