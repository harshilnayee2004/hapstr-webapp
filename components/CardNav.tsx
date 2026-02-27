import React, {
  useLayoutEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import "./CardNav.css";

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  links: CardNavLink[];
  bgImage?: string;
};

export interface CardNavProps {
  brandName?: string;
  logo?: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export interface CardNavHandle {
  openNav: () => void;
  closeNav: () => void;
}

const CardNav = forwardRef<CardNavHandle, CardNavProps>(
  (
    {
      brandName = "Hapstr",
      logo,
      logoAlt = "Logo",
      items,
      className = "",
      ease = "power3.out",
      ctaLabel = "Get Started",
      onCtaClick,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    const calculateHeight = () => {
      const navEl = navRef.current;
      if (!navEl) return 290;
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (isMobile) {
        const contentEl = navEl.querySelector(
          ".cn-content"
        ) as HTMLElement;
        if (contentEl) {
          const total = 60 + contentEl.scrollHeight + 10;
          return total;
        }
      }
      return 290;
    };

    const buildTl = () => {
      const navEl = navRef.current;
      if (!navEl) return null;

      gsap.set(navEl, { height: 60, overflow: "hidden" });
      gsap.set(cardsRef.current, { y: 20, opacity: 0 });

      const tl = gsap.timeline({ paused: true });
      tl.to(navEl, {
        height: calculateHeight,
        duration: 0.4,
        ease,
      });
      tl.to(
        cardsRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.28,
          ease,
          stagger: 0.06,
        },
        "-=0.16"
      );

      return tl;
    };

    useLayoutEffect(() => {
      const tl = buildTl();
      tlRef.current = tl;
      return () => {
        tl?.kill();
      };
    }, [ease, items]);

    const openNav = () => {
      const tl = tlRef.current;
      if (!tl || isOpen) return;
      setIsOpen(true);
      tl.play(0);
    };

    const closeNav = () => {
      const tl = tlRef.current;
      if (!tl || !isOpen) return;
      tl.eventCallback("onReverseComplete", () => setIsOpen(false));
      tl.reverse();
    };

    const toggle = () => {
      isOpen ? closeNav() : openNav();
    };

    // 🔥 Expose functions to parent
    useImperativeHandle(ref, () => ({
      openNav,
      closeNav,
    }));

    return (
      <div className={`cn-container ${className}`}>
        <nav ref={navRef} className={`cn-nav ${isOpen ? "open" : ""}`}>

          <div className="cn-topbar">
            <button
              className={`cn-hamburger ${isOpen ? "open" : ""}`}
              onClick={toggle}
            >
              <span className="cn-ham-line" />
              <span className="cn-ham-line" />
            </button>

            <div className="cn-brand">
              {logo && <img src={logo} alt={logoAlt} className="cn-logo" />}
              {brandName && (
                <span className="cn-brand-name">{brandName}</span>
              )}
            </div>

            <button className="cn-cta" onClick={onCtaClick}>
              {ctaLabel}
            </button>
          </div>

          <div className="cn-content" aria-hidden={!isOpen}>
            {items.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="cn-card"
                ref={(el) => {
                  if (el) cardsRef.current[idx] = el;
                }}
              >
                {item.bgImage && (
                  <div
                    className="cn-card-bg"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  />
                )}

                <div className="cn-card-body">
                  <span className="cn-card-label">{item.label}</span>
                  <div className="cn-card-links">
                    {item.links.map((lnk, i) => (
                      <a key={i} href={lnk.href} className="cn-card-link">
                        <GoArrowUpRight className="cn-link-icon" />
                        {lnk.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </nav>
      </div>
    );
  }
);

export default CardNav;