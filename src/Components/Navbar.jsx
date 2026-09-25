import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
  ChevronRight,
  LogOut,
} from "lucide-react";

/* =========================
   NAVIGATION DATA
========================= */

const CATEGORIES = [
  {
    label: "Women",
    to: "/products?category=women",
    color: "#B4527A",
  },
  {
    label: "Men",
    to: "/products?category=men",
    color: "#2A1226",
  },
  {
    label: "Accessories",
    to: "/products?category=accessories",
    color: "#D9A86C",
  },
  {
    label: "Home & Living",
    to: "/products?category=home",
    color: "#C9707F",
  },
];

const LINKS = [
  {
    label: "Home",
    to: "/",
    end: true,
  },
  {
    label: "Shop",
    to: "/products",
  },
  {
    label: "Categories",
    children: CATEGORIES,
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
  {
    label: "Orders",
    to: "/orders",
  },
];

/* =========================
   STYLES
========================= */

const SERIF = {
  fontFamily: "'Fraunces', Georgia, serif",
};

const SANS = {
  fontFamily:
    "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif",
};

const SPRING =
  "ease-[cubic-bezier(.3,1.5,.45,1)]";

const GLASS =
  "bg-white/75 backdrop-blur-[18px] backdrop-saturate-150";

const GRADIENT_BORDER =
  "before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:p-[1.5px] before:pointer-events-none " +
  "before:bg-[linear-gradient(120deg,rgba(180,82,122,.55),rgba(217,168,108,.6)_50%,rgba(180,82,122,.18))] " +
  "before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] " +
  "before:[-webkit-mask-composite:xor] " +
  "before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)]";

const ICON_BASE =
  `group relative grid h-[42px] w-[42px] lg:h-11 lg:w-11 ` +
  `place-items-center rounded-full text-[#2A1226] ` +
  `transition-all duration-300 ${SPRING} hover:-translate-y-0.5`;

const ICON_HOVER =
  "hover:bg-white hover:shadow-[0_8px_18px_rgba(180,82,122,.22)]";

const ICON_SVG =
  `transition-all duration-[400ms] ${SPRING} ` +
  `group-hover:scale-110 group-hover:-rotate-[8deg]`;

/* =========================
   NAVBAR
========================= */

function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [catOpen, setCatOpen] =
    useState(false);

  const [accountOpen, setAccountOpen] =
    useState(false);

  const [hover, setHover] =
    useState(null);

  const [mounted, setMounted] =
    useState(false);

  /* =========================
     AUTH STATE
  ========================= */

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [userName, setUserName] =
    useState("");

  /* =========================
     CART + WISHLIST
  ========================= */

  const [cartCount, setCartCount] =
    useState(0);

  const [wishlistCount, setWishlistCount] =
    useState(0);

  /* =========================
     SLIDING HIGHLIGHT
  ========================= */

  const [blob, setBlob] = useState({
    x: 0,
    w: 0,
    ready: false,
  });

  const headerRef = useRef(null);
  const wrapRef = useRef(null);
  const itemRefs = useRef([]);
  const inputRef = useRef(null);
  const accountRef = useRef(null);

  /* =========================
     AUTH CHECK
  ========================= */

  useEffect(() => {
    const updateAuth = () => {
      const loggedIn =
        localStorage.getItem(
          "veloraLoggedIn"
        ) === "true";

      setIsLoggedIn(loggedIn);

      if (loggedIn) {
        const savedUser =
          JSON.parse(
            localStorage.getItem(
              "veloraUser"
            ) || "null"
          ) || {};

        const savedProfile =
          JSON.parse(
            localStorage.getItem(
              "veloraProfile"
            ) || "null"
          ) || {};

        setUserName(
          savedProfile.name ||
            savedUser.name ||
            "Velora User"
        );
      } else {
        setUserName("");
      }
    };

    updateAuth();

    window.addEventListener(
      "veloraAuthUpdated",
      updateAuth
    );

    window.addEventListener(
      "storage",
      updateAuth
    );

    return () => {
      window.removeEventListener(
        "veloraAuthUpdated",
        updateAuth
      );

      window.removeEventListener(
        "storage",
        updateAuth
      );
    };
  }, []);

  /* =========================
     CART / WISHLIST COUNT
  ========================= */

  useEffect(() => {
    const updateCounts = () => {
      try {
        const cart =
          JSON.parse(
            localStorage.getItem(
              "veloraCart"
            )
          ) || [];

        const wishlist =
          JSON.parse(
            localStorage.getItem(
              "veloraWishlist"
            )
          ) || [];

        const totalCartItems =
          cart.reduce(
            (total, item) =>
              total +
              (Number(item.quantity) || 1),
            0
          );

        setCartCount(totalCartItems);
        setWishlistCount(wishlist.length);
      } catch (error) {
        console.error(
          "Velora storage error:",
          error
        );

        setCartCount(0);
        setWishlistCount(0);
      }
    };

    updateCounts();

    window.addEventListener(
      "veloraCartUpdated",
      updateCounts
    );

    window.addEventListener(
      "veloraWishlistUpdated",
      updateCounts
    );

    window.addEventListener(
      "storage",
      updateCounts
    );

    return () => {
      window.removeEventListener(
        "veloraCartUpdated",
        updateCounts
      );

      window.removeEventListener(
        "veloraWishlistUpdated",
        updateCounts
      );

      window.removeEventListener(
        "storage",
        updateCounts
      );
    };
  }, []);

  /* =========================
     ACTIVE NAV ITEM
  ========================= */

  const activeIndex =
    LINKS.findIndex((link) => {
      if (!link.to) return false;

      return link.to === "/"
        ? pathname === "/"
        : pathname.startsWith(link.to);
    });

  const target =
    hover ?? activeIndex;

  /* =========================
     SLIDING HIGHLIGHT
  ========================= */

  useLayoutEffect(() => {
    const placeHighlight = () => {
      const item =
        itemRefs.current[target];

      const wrapper =
        wrapRef.current;

      if (!item || !wrapper) return;

      const itemRect =
        item.getBoundingClientRect();

      const wrapperRect =
        wrapper.getBoundingClientRect();

      setBlob((previous) => ({
        ...previous,
        x:
          itemRect.left -
          wrapperRect.left,
        w: itemRect.width,
      }));
    };

    placeHighlight();

    window.addEventListener(
      "resize",
      placeHighlight
    );

    if (document.fonts) {
      document.fonts.ready.then(
        placeHighlight
      );
    }

    return () => {
      window.removeEventListener(
        "resize",
        placeHighlight
      );
    };
  }, [target, pathname]);

  /* =========================
     INITIAL ANIMATION
  ========================= */

  useEffect(() => {
    const raf =
      requestAnimationFrame(() => {
        setBlob((previous) => ({
          ...previous,
          ready: true,
        }));
      });

    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  /* =========================
     SCROLL EFFECT
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 20
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =========================
     ESC / OUTSIDE CLICK / RESIZE
  ========================= */

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
        setCatOpen(false);
        setAccountOpen(false);
      }
    };

    const handleOutsideClick = (
      event
    ) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(
          event.target
        )
      ) {
        setSearchOpen(false);
        setAccountOpen(false);
      }

      if (
        accountRef.current &&
        !accountRef.current.contains(
          event.target
        )
      ) {
        setAccountOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKey
    );

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKey
      );

      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* =========================
     CLOSE MENU ON ROUTE CHANGE
  ========================= */

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setCatOpen(false);
    setAccountOpen(false);
  }, [pathname]);

  /* =========================
     LOCK BODY SCROLL
  ========================= */

  useEffect(() => {
    document.body.style.overflow =
      menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =========================
     SEARCH AUTO FOCUS
  ========================= */

  useEffect(() => {
    if (!searchOpen) return;

    setMenuOpen(false);
    setAccountOpen(false);

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchOpen]);

  /* =========================
     SEARCH SUBMIT
  ========================= */

  const submitSearch = (event) => {
    event.preventDefault();

    const query =
      inputRef.current?.value.trim();

    if (!query) return;

    navigate(
      `/products?search=${encodeURIComponent(
        query
      )}`
    );

    setSearchOpen(false);
  };

  /* =========================
     LOGOUT
  ========================= */

  const handleLogout = () => {
    localStorage.removeItem(
      "veloraLoggedIn"
    );

    setIsLoggedIn(false);
    setUserName("");
    setAccountOpen(false);

    window.dispatchEvent(
      new Event("veloraAuthUpdated")
    );

    navigate("/login");
  };

  /* =========================
     DESKTOP LINK STYLE
  ========================= */

  const desktopLink = ({
    isActive,
  }) =>
    `relative z-[1] flex items-center gap-1.5 rounded-full px-[18px] py-[11px] text-[.95rem] transition-colors duration-200 ${
      isActive
        ? "font-semibold text-[#B4527A]"
        : "font-medium hover:text-[#B4527A]"
    }`;

  /* =========================
     BADGE
  ========================= */

  const badge = (background) =>
    `absolute right-0 top-px grid h-[19px] min-w-[19px] place-items-center rounded-full border-2 border-white px-[5px] text-[.7rem] font-semibold text-white transition-transform duration-500 ${SPRING} ${background} ${
      mounted
        ? "scale-100"
        : "scale-0"
    }`;

  /* =========================
     FLOATING PANEL
  ========================= */

  const floating = (open) =>
    `absolute left-0 right-0 top-[calc(100%_+_10px)] origin-top transition-all duration-[450ms] ${SPRING} shadow-[0_12px_40px_rgba(180,82,122,.16)] ${GLASS} ${
      open
        ? "visible translate-y-0 scale-100 opacity-100"
        : "invisible -translate-y-2.5 scale-[.98] opacity-0"
    }`;

  return (
    <>
      {/* Google Fonts */}

      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap");
        `}
      </style>

      {/* MOBILE OVERLAY */}

      <div
        onClick={() =>
          setMenuOpen(false)
        }
        className={`fixed inset-0 z-[90] bg-[#2A1226]/30 backdrop-blur-[3px] transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* FLOATING NAVBAR */}

      <header
        ref={headerRef}
        style={SANS}
        className={`fixed left-1/2 z-[100] -translate-x-1/2 text-[#5A4A55] transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
          scrolled
            ? "top-2 w-[min(1020px,calc(100%_-_20px))] lg:top-2.5 lg:w-[min(1020px,calc(100%_-_28px))]"
            : "top-2.5 w-[min(1160px,calc(100%_-_20px))] lg:top-3.5 lg:w-[min(1160px,calc(100%_-_28px))]"
        }`}
      >
        {/* MAIN NAVBAR */}

        <div
          className={`relative flex items-center rounded-full pl-[18px] pr-1.5 transition-all duration-[400ms] lg:pl-6 lg:pr-2.5 ${GLASS} ${GRADIENT_BORDER} ${
            scrolled
              ? "h-14 shadow-[0_16px_44px_rgba(42,18,38,.16)] lg:h-[60px]"
              : "h-[60px] shadow-[0_12px_40px_rgba(180,82,122,.16)] lg:h-[68px]"
          }`}
        >
          {/* LOGO */}

          <Link
            to="/"
            style={SERIF}
            className="group mr-auto flex items-center text-[1.5rem] font-bold lg:mr-0 lg:text-[1.7rem]"
          >
            <span className="bg-[linear-gradient(100deg,#2A1226_20%,#B4527A_70%,#D9A86C)] bg-clip-text font-bold text-transparent">
              Velora
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <div
            ref={wrapRef}
            onMouseLeave={() =>
              setHover(null)
            }
            className="relative mx-auto hidden lg:block"
          >
            {/* Sliding Highlight */}

            <span
              style={{
                width: blob.w,
                transform: `translateX(${blob.x}px)`,
              }}
              className={`pointer-events-none absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(135deg,rgba(180,82,122,.14),rgba(217,168,108,.22))] ${
                blob.ready && target >= 0
                  ? `opacity-100 transition-[transform,width,opacity] duration-500 ${SPRING}`
                  : "opacity-0"
              }`}
            />

            <ul className="flex gap-0.5">
              {LINKS.map(
                (link, index) => (
                  <li
                    key={link.label}
                    ref={(element) => {
                      itemRefs.current[
                        index
                      ] = element;
                    }}
                    onMouseEnter={() =>
                      setHover(index)
                    }
                    onFocus={() =>
                      setHover(index)
                    }
                    onBlur={() =>
                      setHover(null)
                    }
                    className="group relative"
                  >
                    {link.children ? (
                      <>
                        <button
                          type="button"
                          className={desktopLink(
                            {
                              isActive: false,
                            }
                          )}
                        >
                          {link.label}

                          <ChevronDown
                            size={13}
                            className={`transition-transform duration-[350ms] ${SPRING} group-hover:rotate-180`}
                          />
                        </button>

                        {/* Categories Dropdown */}

                        <div className="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-2 scale-95 pt-4 opacity-0 transition-all duration-[350ms] group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                          <ul className="min-w-[210px] rounded-3xl border border-[#B4527A]/10 bg-white/95 p-2 shadow-[0_20px_50px_rgba(42,18,38,.16)]">
                            {link.children.map(
                              (category) => (
                                <li
                                  key={
                                    category.label
                                  }
                                >
                                  <Link
                                    to={
                                      category.to
                                    }
                                    className="group/c flex items-center gap-3 whitespace-nowrap rounded-2xl px-3.5 py-[11px] text-[.93rem] font-medium transition-all duration-200 hover:translate-x-1 hover:bg-[#B4527A]/[.08] hover:text-[#2A1226]"
                                  >
                                    <span
                                      style={{
                                        backgroundColor:
                                          category.color,
                                      }}
                                      className="h-[9px] w-[9px] rounded-full transition-transform duration-300 group-hover/c:scale-150"
                                    />

                                    {
                                      category.label
                                    }
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <NavLink
                        to={link.to}
                        end={link.end}
                        className={desktopLink}
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* RIGHT ICONS */}

          <div className="flex items-center gap-1">
            {/* SEARCH */}

            <button
              type="button"
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={() => {
                setSearchOpen(
                  (open) => !open
                );
                setAccountOpen(false);
              }}
              className={`${ICON_BASE} ${ICON_HOVER}`}
            >
              <Search
                size={22}
                strokeWidth={1.8}
                className={ICON_SVG}
              />
            </button>

            {/* WISHLIST */}

            <NavLink
              to="/wishlist"
              aria-label="Wishlist"
              className={`${ICON_BASE} ${ICON_HOVER}`}
            >
              <Heart
                size={22}
                strokeWidth={1.8}
                className={`${ICON_SVG} group-hover:fill-[#B4527A] group-hover:text-[#B4527A]`}
              />

              {wishlistCount > 0 && (
                <span
                  className={badge(
                    "bg-[#2A1226]"
                  )}
                >
                  {wishlistCount}
                </span>
              )}
            </NavLink>

            {/* CART */}

            <NavLink
              to="/cart"
              aria-label="Cart"
              className={`${ICON_BASE} ${ICON_HOVER}`}
            >
              <ShoppingBag
                size={22}
                strokeWidth={1.8}
                className={ICON_SVG}
              />

              {cartCount > 0 && (
                <span
                  className={badge(
                    "bg-[#B4527A]"
                  )}
                >
                  {cartCount}
                </span>
              )}
            </NavLink>

            {/* PROFILE / ACCOUNT */}

            <div
              ref={accountRef}
              className="relative ml-1.5 hidden lg:block"
            >
              <button
                type="button"
                aria-label="Account"
                aria-expanded={
                  accountOpen
                }
                onClick={() => {
                  setAccountOpen(
                    (open) => !open
                  );
                  setSearchOpen(false);
                }}
                className={`${ICON_BASE} bg-[linear-gradient(135deg,#B4527A,#C9707F_55%,#D9A86C)] text-white shadow-[0_6px_16px_rgba(180,82,122,.35)] hover:shadow-[0_10px_22px_rgba(180,82,122,.45)]`}
              >
                <User
                  size={21}
                  strokeWidth={1.9}
                  className={ICON_SVG}
                />
              </button>

              {/* ACCOUNT DROPDOWN */}

              <div
                className={`absolute right-0 top-[calc(100%_+_12px)] w-[270px] origin-top-right rounded-[24px] border border-[#B4527A]/10 bg-white/95 p-2.5 shadow-[0_20px_50px_rgba(42,18,38,.18)] backdrop-blur-xl transition-all duration-300 ${SPRING} ${
                  accountOpen
                    ? "visible translate-y-0 scale-100 opacity-100"
                    : "invisible -translate-y-2 scale-95 opacity-0"
                }`}
              >
                {/* ACCOUNT HEADER */}

                <div className="rounded-[18px] bg-gradient-to-br from-[#FAF7F2] to-[#F9EAF0] px-4 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B4527A]">
                    My Account
                  </p>

                  {isLoggedIn ? (
                    <>
                      <p
                        className="mt-1 truncate text-lg font-semibold text-[#2A1226]"
                        style={SERIF}
                      >
                        Hello, {userName}
                      </p>

                      <p className="mt-1 text-[11px] text-[#8F7C88]">
                        Welcome back to
                        Velora
                      </p>
                    </>
                  ) : (
                    <>
                      <p
                        className="mt-1 text-lg font-semibold text-[#2A1226]"
                        style={SERIF}
                      >
                        Welcome to
                        Velora
                      </p>

                      <p className="mt-1 text-[11px] text-[#8F7C88]">
                        Sign in to manage
                        your account
                      </p>
                    </>
                  )}
                </div>

                {!isLoggedIn ? (
                  <>
                    {/* LOGIN */}

                    <Link
                      to="/login"
                      className="group flex items-center justify-between rounded-[17px] px-4 py-3.5 transition-all duration-300 hover:translate-x-1 hover:bg-[#B4527A]/[.07]"
                    >
                      <div>
                        <p className="text-sm font-semibold text-[#2A1226]">
                          Login
                        </p>

                        <p className="mt-0.5 text-[11px] text-[#8F7C88]">
                          Sign in to your
                          account
                        </p>
                      </div>

                      <ChevronRight
                        size={17}
                        className="text-[#D9A86C] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>

                    {/* REGISTER */}

                    <Link
                      to="/register"
                      className="group flex items-center justify-between rounded-[17px] px-4 py-3.5 transition-all duration-300 hover:translate-x-1 hover:bg-[#B4527A]/[.07]"
                    >
                      <div>
                        <p className="text-sm font-semibold text-[#2A1226]">
                          Register
                        </p>

                        <p className="mt-0.5 text-[11px] text-[#8F7C88]">
                          Create your
                          account
                        </p>
                      </div>

                      <ChevronRight
                        size={17}
                        className="text-[#D9A86C] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </>
                ) : (
                  <>
                    {/* PROFILE */}

                    <Link
                      to="/profile"
                      className="group flex items-center justify-between rounded-[17px] px-4 py-3.5 transition-all duration-300 hover:translate-x-1 hover:bg-[#B4527A]/[.07]"
                    >
                      <div>
                        <p className="text-sm font-semibold text-[#2A1226]">
                          My Profile
                        </p>

                        <p className="mt-0.5 text-[11px] text-[#8F7C88]">
                          Manage your
                          account
                        </p>
                      </div>

                      <ChevronRight
                        size={17}
                        className="text-[#D9A86C] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>

                    {/* ORDERS */}

                    <Link
                      to="/orders"
                      className="group flex items-center justify-between rounded-[17px] px-4 py-3.5 transition-all duration-300 hover:translate-x-1 hover:bg-[#B4527A]/[.07]"
                    >
                      <div>
                        <p className="text-sm font-semibold text-[#2A1226]">
                          My Orders
                        </p>

                        <p className="mt-0.5 text-[11px] text-[#8F7C88]">
                          View your
                          orders
                        </p>
                      </div>

                      <ChevronRight
                        size={17}
                        className="text-[#D9A86C] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>

                    {/* WISHLIST */}

                    <Link
                      to="/wishlist"
                      className="group flex items-center justify-between rounded-[17px] px-4 py-3.5 transition-all duration-300 hover:translate-x-1 hover:bg-[#B4527A]/[.07]"
                    >
                      <div>
                        <p className="text-sm font-semibold text-[#2A1226]">
                          Wishlist
                        </p>

                        <p className="mt-0.5 text-[11px] text-[#8F7C88]">
                          Your saved
                          products
                        </p>
                      </div>

                      <ChevronRight
                        size={17}
                        className="text-[#D9A86C] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>

                    {/* LOGOUT */}

                    <div className="my-1.5 border-t border-[#B4527A]/10" />

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="group flex w-full items-center justify-between rounded-[17px] px-4 py-3.5 text-left transition-all duration-300 hover:translate-x-1 hover:bg-red-50"
                    >
                      <div>
                        <p className="text-sm font-semibold text-red-500">
                          Logout
                        </p>

                        <p className="mt-0.5 text-[11px] text-[#8F7C88]">
                          Sign out of
                          Velora
                        </p>
                      </div>

                      <LogOut
                        size={17}
                        className="text-red-400 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => {
                setSearchOpen(false);
                setAccountOpen(false);

                setMenuOpen(
                  (open) => !open
                );
              }}
              className={`${ICON_BASE} ${ICON_HOVER} lg:hidden`}
            >
              <span className="block w-5">
                <i
                  className={`block h-0.5 rounded-sm bg-[#2A1226] transition-all duration-[400ms] ${SPRING} ${
                    menuOpen
                      ? "translate-y-[7px] rotate-45"
                      : ""
                  }`}
                />

                <i
                  className={`ml-auto mt-[5px] block h-0.5 w-3.5 rounded-sm bg-[#2A1226] transition-all duration-200 ${
                    menuOpen
                      ? "opacity-0"
                      : ""
                  }`}
                />

                <i
                  className={`mt-[5px] block h-0.5 rounded-sm bg-[#2A1226] transition-all duration-[400ms] ${SPRING} ${
                    menuOpen
                      ? "-translate-y-[7px] -rotate-45"
                      : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* SEARCH PANEL */}

        <form
          role="search"
          onSubmit={submitSearch}
          className={`flex h-[58px] items-center gap-3 rounded-full pl-[22px] pr-2 ${GRADIENT_BORDER} ${floating(
            searchOpen
          )}`}
        >
          <Search
            size={20}
            strokeWidth={2}
            className="text-[#B4527A]"
          />

          <input
            ref={inputRef}
            type="search"
            placeholder="Search for something lovely"
            aria-label="Search"
            className="min-w-0 flex-1 bg-transparent text-base text-[#2A1226] outline-none placeholder:text-[#9a8794]"
          />

          <button
            type="submit"
            className={`h-[42px] rounded-full bg-[linear-gradient(135deg,#B4527A,#C9707F)] px-[22px] text-[.9rem] font-semibold text-white transition-all duration-300 ${SPRING} hover:scale-105 hover:shadow-[0_8px_18px_rgba(180,82,122,.35)]`}
          >
            Search
          </button>
        </form>

        {/* MOBILE MENU */}

        <nav
          aria-label="Mobile menu"
          className={`max-h-[calc(100vh_-_100px)] overflow-y-auto rounded-[30px] p-3 lg:hidden ${floating(
            menuOpen
          )}`}
        >
          {LINKS.map(
            (link, index) => {
              const rowStyle = {
                transitionDelay:
                  menuOpen
                    ? `${index * 55 + 120}ms`
                    : "0ms",
              };

              const rowClass =
                `transition-all duration-500 ${SPRING} ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`;

              const itemClass =
                "flex w-full items-center justify-between rounded-[18px] px-4 py-[15px] text-[1.35rem] font-semibold text-[#2A1226] transition-colors duration-200 hover:bg-[#B4527A]/[.08] hover:text-[#B4527A]";

              if (link.children) {
                return (
                  <div
                    key={link.label}
                    style={rowStyle}
                    className={rowClass}
                  >
                    <button
                      type="button"
                      style={SERIF}
                      className={itemClass}
                      onClick={() =>
                        setCatOpen(
                          (open) =>
                            !open
                        )
                      }
                      aria-expanded={catOpen}
                    >
                      {link.label}

                      <ChevronDown
                        size={18}
                        strokeWidth={2.4}
                        className={`text-[#D9A86C] transition-transform duration-300 ${
                          catOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        catOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-wrap gap-2 px-4 pb-3 pt-1">
                          {link.children.map(
                            (category) => (
                              <Link
                                key={
                                  category.label
                                }
                                to={
                                  category.to
                                }
                                className="flex items-center gap-2 rounded-full border border-[#B4527A]/20 bg-white px-3.5 py-2 text-sm font-medium text-[#2A1226] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B4527A]/40"
                              >
                                <span
                                  style={{
                                    backgroundColor:
                                      category.color,
                                  }}
                                  className="h-2 w-2 rounded-full"
                                />

                                {
                                  category.label
                                }
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={link.label}
                  style={rowStyle}
                  className={rowClass}
                >
                  <NavLink
                    to={link.to}
                    end={link.end}
                    style={SERIF}
                    className={({
                      isActive,
                    }) =>
                      `${itemClass} ${
                        isActive
                          ? "text-[#B4527A]"
                          : ""
                      }`
                    }
                  >
                    {link.label}

                    <ChevronRight
                      size={18}
                      strokeWidth={2.4}
                      className="text-[#D9A86C]"
                    />
                  </NavLink>
                </div>
              );
            }
          )}

          {/* MOBILE ACCOUNT ACTIONS */}

          <div className="mt-2 grid grid-cols-2 gap-2.5 border-t border-[#B4527A]/15 pt-3">
            <Link
              to="/wishlist"
              className="flex items-center justify-center rounded-full border border-[#B4527A]/20 bg-white p-3.5 text-[.92rem] font-semibold text-[#2A1226] transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Wishlist

              {wishlistCount > 0 && (
                <span className="ml-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#2A1226] px-1 text-[10px] text-white">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center justify-center rounded-full border border-[#B4527A]/20 bg-white p-3.5 text-[.92rem] font-semibold text-[#2A1226] transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  Profile
                </Link>

                <Link
                  to="/orders"
                  className="flex items-center justify-center rounded-full border border-[#B4527A]/20 bg-white p-3.5 text-[.92rem] font-semibold text-[#2A1226] transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  Orders
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center justify-center rounded-full bg-red-500 p-3.5 text-[.92rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#B4527A,#C9707F_60%,#D9A86C)] p-3.5 text-[.92rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(180,82,122,.3)]"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="flex items-center justify-center rounded-full border border-[#B4527A]/20 bg-white p-3.5 text-[.92rem] font-semibold text-[#2A1226] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      {/* NAVBAR SPACING */}

      <div
        aria-hidden="true"
        className="h-[76px] lg:h-[96px]"
      />
    </>
  );
}

export default Navbar;