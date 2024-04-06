

export const GalleryImage = ({imageDesktop, imageMobile}) => {
    return (
        <picture>
            <source media="(min-width: 641px)" srcSet={imageDesktop} />
            <source media="(max-width: 640px)" srcSet={imageMobile} />
            <img src={imageMobile} alt="" />
        </picture>
    )
}