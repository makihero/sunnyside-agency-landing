
import { Testimonial } from "./Testimonial"

import imageEmily from "../assets/image-emily.jpg"
import imageThomas from "../assets/image-thomas.jpg"
import imageJennie from "../assets/image-jennie.jpg"

export const TestimonialContainer = () => {
    return (
        <section>
            <h1 className="uppercase font-fraunces font-bold tracking-[0.3em] mb-6 text-center pt-10 text-grayish-blue desktop:text-4xl desktop:pt-20">Client testimonials</h1>
            <div className="lg:flex desktop:p-10">
                <Testimonial
                imageProfile={imageEmily}
                text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                name="Emily R."
                role="Marketing Director"
                />
                <Testimonial
                imageProfile={imageThomas}
                text="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
                name="Thomas S."
                role="Chief Operating Officer"
                />
                <Testimonial
                imageProfile={imageJennie}
                text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                name="Jennie F."
                role="Business Owner"
                />
            </div>
        </section>
    )
}