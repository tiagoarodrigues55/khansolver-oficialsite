import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/english">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {
              'Would you like to have your KhanAcademy recommendations delivered\n'
            }
            <span className="text-primary-500">
              with 100% on time every week?
            </span>
          </>
        }
        description=""
        button={
          <Link href="/english">
            <a>
              <Button xl>
                Sign up for one of our plans and stop worrying!
              </Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
