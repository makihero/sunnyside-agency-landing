import { ServiceImage } from './ServiceImage'
import { ServiceText } from './ServiceText'
import { ServiceTextImage } from './ServiceTextImage'

import eggImageMobile from '../assets/mobile/image-transform.jpg'
import eggImageDesktop from '../assets/desktop/image-transform.jpg'
import glassImageMobile from '../assets/mobile/image-stand-out.jpg'
import glassImageDesktop from '../assets/desktop/image-stand-out.jpg'
import imageDesignMobile from '../assets/mobile/image-graphic-design.jpg'
import imageDesignDesktop from '../assets/desktop/image-graphic-design.jpg'
import imagePhotographyMobile from '../assets/mobile/image-photography.jpg'
import imagePhotographyDesktop from '../assets/desktop/image-photography.jpg'


export const Services = () => {
    return (
        <section className='tablet:grid tablet:grid-cols-2'>
            <ServiceImage
                order='order-2'
                imageDesktop={eggImageDesktop}
                imageMobile={eggImageMobile}
            />
            <ServiceText 
            order='order-1'
            title={'Transform your brand'}
            text={'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'}
            color='bg-yellow'
            />
            <ServiceImage
                order='order-3'
                imageDesktop={glassImageDesktop}
                imageMobile={glassImageMobile}
            />
            <ServiceText
            order='order-4'
            title={'Stand out to the right audience'}
            text={'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. '}
            color='bg-soft-red'
            />
            <ServiceTextImage 
            order='order-5'
            imageMobile={imageDesignMobile}
            imageDesktop={imageDesignDesktop}
            title={'Graphic design'}
            text={'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'}
            color='text-dark-desaturated-cyan'
            />
            <ServiceTextImage
            order='order-6'
            imageMobile={imagePhotographyMobile}
            imageDesktop={imagePhotographyDesktop}
            title={'Photography'}
            text={'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'}
            color='text-dark-blue'
            />

        </section>
    )
}