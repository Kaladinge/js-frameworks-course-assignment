import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import AuthProvider from "../../context/AuthContext";
import Heading from "./Heading";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

function Layout({ children, title }) {
  const { pathname } = useRouter();

  return (
    <AuthProvider>
      <Navbar expand="lg" className={`p-4 ${styles.nav}`}>
        <Container>
          <Navbar.Brand href="/" className={`${styles.logo}`}>
            Beverage Inc.
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div
                className={`mx-5 text-center ${
                  pathname === "/" ? styles.active : styles.nav
                }`}
              >
                <Link href="/">Home</Link>
              </div>
              <div
                className={`mx-5 text-center ${
                  pathname === "/contact" ? styles.active : styles.nav
                }`}
              >
                <Link href="/contact">Contact</Link>
              </div>
              <div
                className={`mx-5 text-center ${
                  pathname === "/login" ? styles.active : styles.nav
                }`}
              >
                <Link href="/login">Login</Link>
              </div>
              <div
                className={`mx-5 text-center ${
                  pathname === "/favorites" ? styles.active : styles.nav
                }`}
              >
                <Link href="/favorites">Favorites</Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Heading title={title} />
        <div>{children}</div>
      </Container>
    </AuthProvider>
  );
}

export default Layout;
