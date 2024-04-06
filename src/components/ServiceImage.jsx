

export const ServiceImage = ({order, imageDesktop, imageMobile }) => {
    return (
        <picture className={order}>
            <source media="(min-width: 641px)" srcSet={imageDesktop} />
            <source media="(max-width: 640px)" srcSet={imageMobile} />
            <img src={imageMobile} alt="" />
        </picture>
    )
}