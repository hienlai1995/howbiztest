import clsx from "clsx";
import styles from "./FormLoginBoxTop.module.css";
function FormLoginBoxTopDisble() {
  return (
    <>
      <div className={clsx(styles.loginFormTop, styles.active)}>
        <img
          src="src/image/logo/logoColor.e5de23ce.png"
          alt="logo"
          width={"60px"}
          height={"70px"}
        />
        <h3>Đăng nhập</h3>
      </div>
    </>
  );
}
export default FormLoginBoxTopDisble;
