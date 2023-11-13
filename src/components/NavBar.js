import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElement = links.map((navLink) => {
    return(
     <a href={navLink} key={navLink}>{navLink}</a>
   )});
  return (
  <nav>
    {linkElement}
  </nav>);
}

export default NavBar;
