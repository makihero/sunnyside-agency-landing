

export const ServiceTextImage = ({order, imageMobile, imageDesktop, title, text, color}) => {
    return (
        <div className={`${order} text-center text-dark-desaturated-cyan relative `}>
            <picture className="">
                <source media="(min-width: 641px)" srcSet={imageDesktop} />
                <source media="(max-width: 640px)" srcSet={imageMobile} />
                <img src={imageMobile} alt="" />
            </picture>
            <div className={`absolute bottom-0 -translate-y-1/2 px-4 ${color}`}>
                <h2 className="font-fraunces text-3xl font-extrabold mb-6 tablet:text-[1.25rem] lg:text-4xl desktop:text-5xl">{title}</h2>
                <p className="font-barlow leading-7 tablet:text-sm lg:text-lg desktop:text-xl">{text}</p>
            </div>
        </div>
    
    )
}