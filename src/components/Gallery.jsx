import {GalleryImage} from "./GalleryImage"

import milkMobile from "../assets/mobile/image-gallery-milkbottles.jpg"
import milkDesktop from "../assets/desktop/image-gallery-milkbottles.jpg"
import orangeMobile from "../assets/mobile/image-gallery-orange.jpg"
import orangeDesktop from "../assets/desktop/image-gallery-orange.jpg"
import coneMobile from "../assets/mobile/image-gallery-cone.jpg"
import coneDesktop from "../assets/desktop/image-gallery-cone.jpg"
import sugarMobile from "../assets/mobile/image-gallery-sugar-cubes.jpg"
import sugarDesktop from "../assets/desktop/image-gallery-sugarcubes.jpg"

export const Gallery = () => {
    return (
        <section className="mt-[100px] grid grid-cols-2 sm:flex">
            <GalleryImage
                imageDesktop={milkMobile}
                imageMobile={milkDesktop}
            />
            <GalleryImage
                imageDesktop={orangeMobile}
                imageMobile={orangeDesktop}
            />
            <GalleryImage
                imageDesktop={coneMobile}
                imageMobile={coneDesktop}
            />
            <GalleryImage
                imageDesktop={sugarMobile}
                imageMobile={sugarDesktop}
            />
        </section>
    )
}