import headerMobile from '../assets/mobile/image-header.jpg'
import headerDesktop from '../assets/desktop/image-header.jpg'
import arrowDown from '../assets/icon-arrow-down.svg'

export const Main = () => {
    return(
        <main>
            <picture>
                <source media="(min-width: 641px" srcSet={headerDesktop}  />
                <source media="(max-width: 640px" srcSet={headerMobile} />
                <img src={headerMobile} alt="" />
            </picture>
            <div className='flex flex-col items-center gap-10 absolute top-[130px] left-1/2 -translate-x-1/2'>
                <h1 className='text-white font-fraunces text-[40px] text-center uppercase tracking-[0.2em] font-bold'>We are creatives</h1>
                <img src={arrowDown} alt="arrow" />
            </div>
        </main>
    )
}