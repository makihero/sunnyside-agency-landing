

export const Testimonial = ({imageProfile, text, name, role}) => {
    return (
        <div className="text-center p-10 text-grayish-blue flex flex-col gap-8 desktop:gap-10">
            <img className="mx-auto rounded-full w-[70px] desktop:w-[100px]" src={imageProfile} alt="" />
            <p className="font-barlow leading-7 text-dark-grayish-blue desktop:text-lg desktop:leading-9">{text}</p>
            <div>
                <p className="font-fraunces font-extrabold text-very-dark-desaturated-blue mb-1 desktop:text-xl desktop:mb-2">{name}</p>
                <p className="text-grayish-blue text-sm desktop:text-base">{role}</p>
            </div>
        </div>
    )
}