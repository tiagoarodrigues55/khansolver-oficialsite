import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Sign one of our plans and "
      subtitle="have time to do anything else."
      button={
        <Link href="/english">
          <a>
            <Button>Take a free trial</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
