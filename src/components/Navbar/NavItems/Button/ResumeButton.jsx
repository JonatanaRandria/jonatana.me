import { Link } from "react-router-dom";
import "./ResumeButton.css";

function ResumeButton() {

    // TODO : add CV link
  return (
    <Link
      className="navItem resumeButton"

      //  CV Here
      to=""
      target="_blank"
    >
      <h3>Resume</h3>
    </Link>
  );
}

export default ResumeButton;
