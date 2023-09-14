'use client';

import Container from '@/components/container';
import Join from '@/components/navbar/join';
import Logo from '@/components/navbar/logo';
import Menu from '@/components/navbar/menu';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50">
      <div className="py-10 ">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Menu />
            <Join />
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
