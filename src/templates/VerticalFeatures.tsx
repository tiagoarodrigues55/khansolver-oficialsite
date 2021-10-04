import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Would you like to have your KhanAcademy recommendations delivered with 100% on time every week?"
    description="Sign up for one of our plans and stop worrying!"
  >
    <VerticalFeatureRow
      title="Only 2 dolars per assigment"
      description="And you give one assigment free, for test our system."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Pay in Bitcoin to receive 90% off!!"
      description="Give the anual plan for 300 dolars or 0,0006 BTC (30 dolars in atual cotation)"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="We manage every thing for you."
      description="Every day we enter in your account and resolve all the assigments, during the plan period! Is only sign a plan and relax."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
