import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  // to check the status
  const authStatus = useSelector((state) => state.auth.status);
  // use like the diapasthc to naviaget the page
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-post",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <>
      <header className="py-3 shadow bg-gray-500">
        <Container>
          <nav className="flex">
            <div className="mr-4">
              <Link to="/">
                <Logo width="65px" />
              </Link>
            </div>
            {/*  here we use the  () bcs we dont have to return aything */}
            <ul className="flex ml-auto">
              {navItems.map((items) =>
                items.active ? (
                  <li key={items.name}>
                    <button
                      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                      onClick={() => navigate(items.slug)}
                      type="button"
                    >
                      {items.name}
                    </button>
                  </li>
                ) : null
              )}
              {/* the below statemet is used like when the first statement is true then the content under the parenthesis() is work or look */}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
        </Container>
      </header>
    </>
  );
}
export default Header;
