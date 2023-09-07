import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./FormLoginBoxBottom.module.css";

function FormLoginBoxBottom() {
  return (
    <>
      <form action="/" method="post" className={clsx(styles.loginFormBottom)}>
        <div className={clsx(styles.inputDiv)}>
          <i className="fa-regular fa-user"></i>
          <input
            id="usernameDesk"
            type="text"
            placeholder="Tên đăng nhập"
            className={clsx(styles.inputTag)}
          />
        </div>
        <div id="uerErrMessDesk" className={clsx(styles.errMess)}></div>
        <div className={clsx(styles.inputDiv)}>
          <i className="fa-solid fa-lock"></i>
          <input
            id="deskPass"
            type="password"
            placeholder="Mật khẩu"
            className={clsx(styles.inputTag)}
          />
          <i id="eyeDesk" className="fa-regular fa-eye"></i>
        </div>
        <div id="passErrMessDesk" className={clsx(styles.errMess)}></div>
        <Link id="dangNhap" className={clsx(styles.controlLogin)}>
          Đăng Nhập
        </Link>
        <a href="#" className={clsx(styles.controlLoginMissPass)}>
          Quên Mật Khẩu
        </a>
      </form>
    </>
  );
}
export default FormLoginBoxBottom;
