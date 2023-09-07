import clsx from "clsx";
import styles from "./ControlerLoginBox.module.css";
import FormLoginBoxTopDisble from "../FormLoginBoxTop/FormLoginBoxTopDisble";
import FormLoginBoxTopActive from "../FormLoginBoxTop/FormLoginTopActive";
import FormLoginBoxBottom from "../FormLoginBoxBottom/FormLoginBoxBottom";
function ControlerLoginBoxDesktop() {
  return (
    <>
      <div className={clsx(styles.loginBoxContainer)}>
        <FormLoginBoxTopDisble />
        <FormLoginBoxTopActive />
        <FormLoginBoxBottom />
      </div>
    </>
  );
}
export default ControlerLoginBoxDesktop;
