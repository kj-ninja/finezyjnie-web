import React, { useEffect, useRef } from 'react';
import * as styles from './Navbar.styles';
import { NavLink, useLocation } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import Cart from '../Cart/Cart';
import MenuItem from '../MenuItem/MenuItem';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const isHome = pathname === PATHS.HOME;

  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === PATHS.HOME) {
      return;
    }

    const header = headerRef.current;
    if (!header) return;

    const sticky = header.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset > sticky + 30) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <div css={[styles.navbarWrapper, isHome && styles.homeNavbarWrapper]}>
      <nav css={[styles.navbarSticky, isHome && styles.homeNavbar]} ref={headerRef}>
        <div css={styles.navbar}>
          {!isHome && (
            <div css={styles.navbarLogoWrapper} onClick={() => navigate(PATHS.HOME)}>
              <h1>F</h1>
            </div>
          )}
          <ul css={[styles.navbarList, !isHome && styles.navbarShopList]}>
            <MenuItem label="Sklep" pathname={PATHS.SHOP} isHome={isHome} />
            <MenuItem label="Blog" pathname={PATHS.BLOG} isHome={isHome} />
            <MenuItem label="Kontakt" pathname={PATHS.CONTACT} isHome={isHome} />

            {!isHome && (
              <li>
                <NavLink to={PATHS.CART} css={styles.cartLink}>
                  <Cart />
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
