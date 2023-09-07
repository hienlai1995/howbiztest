import clsx from "clsx";
import styles from "./FormLoginBoxTop.module.css";
function FormLoginBoxTopActive() {
  return (
    <>
      <div className={clsx(styles.loginFormTop, styles.disble)}>
        <img
          src="src/image/logo/logoColor.e5de23ce.png"
          alt="logo"
          width={"60px"}
          height={"70px"}
        />
        <h3>Đăng nhập</h3>
        <h5 className={clsx(styles.h4Pos)}>
          HỆ THỐNG BÁO CÁO VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM
        </h5>
        <h5 className={clsx(styles.h4Pos)}>ĐƯỢC ƯU TIÊN BẢO VỆ</h5>
      </div>
    </>
  );
}
export default FormLoginBoxTopActive;
