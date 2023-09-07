import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import ControlerLoginBoxDesktop from "../FormLoginBox/ControlerLoginBox/ControlerLoginBoxDesktop";
import { useEffect, useState } from "react";
import LoginApi from "../../Api/LoginApi";
function Login() {
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });
  const navigates = useNavigate();
  useEffect(() => {
    localStorage.getItem("accestoken")
      ? navigates("/controladmin")
      : navigates("/");
  }, [navigates]);
  // ẩn hiện mật khẩu
  function dynamicPass() {
    const deskPass = document.getElementById("deskPass");
    const eyeDesk = document.getElementById("eyeDesk");
    if (deskPass.type == "password") {
      deskPass.setAttribute("type", "text");
      eyeDesk.classList.remove("fa-eye-slash");
      eyeDesk.classList.add("fa-eye");
    } else {
      deskPass.setAttribute("type", "password");
      eyeDesk.classList.remove("fa-eye");
      eyeDesk.classList.add("fa-eye-slash");
    }
  }
  // chức năng đăng nhập
  function Login_FN(flag) {
    const usernameDesk = document.getElementById("usernameDesk").value;
    const deskPass = document.getElementById("deskPass").value;
    const passErrMessDesk = document.getElementById("passErrMessDesk");
    const fetchFlogin = async () => {
      try {
        const respon = await LoginApi.getAll(dataLogin);
        if (respon && respon.access_token) {
          localStorage.setItem("accestoken", respon.access_token);
          navigates("/controladmin");
        } else {
          navigates("/");
        }
      } catch (error) {
        passErrMessDesk.innerHTML = `tài khoản hoặc mật khẩu không đúng vui lòng nhập lại ( ${error.message} )`;
        console.log(error);
      }
    };
    if (flag) {
      setDataLogin((dataLogin.username = usernameDesk));
      setDataLogin((dataLogin.password = deskPass));
      fetchFlogin();
    } else {
      navigates("/");
    }
  }
  // kiểm duyệt dữ liệu đầu vào của form input
  function validateForm() {
    const deskPass = document.getElementById("deskPass").value;
    const usernameDesk = document.getElementById("usernameDesk").value;
    const uerErrMessDesk = document.getElementById("uerErrMessDesk");
    const passErrMessDesk = document.getElementById("passErrMessDesk");
    let flagUser;
    let flagPass;
    let flagLogin;
    if (usernameDesk == "") {
      uerErrMessDesk.innerHTML = "tên người dùng không được bỏ trống";
      flagUser = false;
    } else {
      uerErrMessDesk.innerHTML = "";
      flagUser = true;
    }
    if (deskPass == "" || deskPass.length <= 7) {
      passErrMessDesk.innerHTML =
        "mật khẩu không được bỏ trống hoặc có ít hơn 8 kí tự";
      flagPass = false;
    } else {
      passErrMessDesk.innerHTML = "";
      flagPass = true;
    }
    if (flagUser && flagPass) {
      flagLogin = true;
    } else {
      flagLogin = false;
    }
    Login_FN(flagLogin);
  }

  useEffect(() => {
    const eyeDesk = document.getElementById("eyeDesk");
    eyeDesk.addEventListener("click", dynamicPass);
  }, []);
  useEffect(() => {
    const dangNhap = document.getElementById("dangNhap");
    dangNhap.addEventListener("click", validateForm);
  });

  return (
    <>
      <div className={clsx(styles.loginContainer)}>
        <div className={clsx(styles.loginTopContainer)}>
          <img
            src="src/image/logo/logoColor.e5de23ce.png"
            alt="logo"
            width={"60px"}
            height={"70px"}
          />
          <h2 className={clsx(styles.loginTopContainer_h2)}>
            HỆ THỐNG BÁO CÁO VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM ĐƯỢC ƯU TIÊN
            BẢO VỆ
          </h2>
        </div>
        <div className={clsx(styles.loginBottomContainer)}>
          <ControlerLoginBoxDesktop />
        </div>
      </div>
    </>
  );
}
export default Login;
