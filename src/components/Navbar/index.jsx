import NavItem from "./NavItems/index";
import { navItems } from "./NavItems/Utils/NavItem";
import ResumeButton from "./NavItems/Button"
import "./Nav.css";

function Nav({ setClicked, clicked }) {
  return (
    <nav className={`Nav ${clicked ? "active" : ""}`}>
      {navItems.map((item) => (
        <NavItem
          setClicked={setClicked}
          clicked={clicked}
          name={item.name}
          link={item.link}
        />
      ))}
      {/* <BlogButton /> */}
      <ResumeButton />
    </nav>
  );
}

export default Nav;
