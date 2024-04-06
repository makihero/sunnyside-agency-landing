

export const ServiceText = ( {order, title, text, color} ) => {
    return (
        <div className={`${order} text-center p-[50px_30px] tablet:p-[40px_30px] lg:p-[90px] lg:text-left xl:p-[150px] desktop:p-[165px]`}>
            <h2 className="text-very-dark-desaturated-blue font-fraunces text-3xl font-extrabold mb-6 tablet:text-[1.25rem] lg:text-4xl desktop:text-5xl desktop:mb-8">{title}</h2>
            <p className="text-dark-grayish-blue mb-8 font-barlow leading-7 tablet:text-sm">{text}</p>

            <div className="relative">
                <button className="text-very-dark-desaturated-blue font-fraunces uppercase font-bold text-sm ">Learn more</button>
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[115px] h-[10px] ${color} rounded-full -z-10 lg:left-[50px] bg-opacity-25`}></div>
            </div>

        </div>
    )
}