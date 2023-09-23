import Image from "next/image";
import bg from '../assets/background.png'

export default function Background () {
    return (
        <Image
            alt = "Bg"
            src={bg}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
                objectFit: "cover",
                zIndex: '-99'
            }}
        />
    )
}