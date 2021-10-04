import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import {Hero} from '../templates/Hero'

export default function About(){
  return (
    <>
    <Hero/>
    <VerticalFeatureRow
      title="About us:"
      description="We are a team of people dedicated to making your life easier by taking away one of the biggest burdens, school. We at khansolver believe that life is more than a list of math exercises and we understand that not everyone was born to be in front of the computer. With that in mind, we've put together a team of young people with math skills to solve your exercises for you!"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    </>
  )
}