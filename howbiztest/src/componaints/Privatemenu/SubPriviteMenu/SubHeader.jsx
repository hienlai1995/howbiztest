import clsx from "clsx";
import styles from "./SubPriviteMenu.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeClass } from "../../../redux/actions";
function SubHeader() {
  const dispath = useDispatch();
  const navigates = useNavigate();
  const [locaToken, setLocalToken] = useState(
    localStorage.getItem("accestoken")
  );
  useEffect(() => {
    document
      .getElementById("SubRightLogoutBottomBtnLogout")
      .addEventListener("click", () => {
        setLocalToken(localStorage.removeItem("accestoken"));
      });
    locaToken ? navigates("/controladmin") : navigates("/");
  }, [locaToken]);
  useEffect(() => {
    document.getElementById("SubRightBox").addEventListener("click", () => {
      document
        .getElementById("SubRightLogout")
        .classList.add(clsx(styles.popupLogout));
      document
        .getElementById("SubRightLogout")
        .classList.remove(clsx(styles.shutdowPopup));
    });
    document.addEventListener("click", (e) => {
      if (!document.getElementById("SubRightBox").contains(e.target)) {
        document
          .getElementById("SubRightLogout")
          .classList.add(clsx(styles.shutdowPopup));
        document
          .getElementById("SubRightLogout")
          .classList.remove(clsx(styles.popupLogout));
      }
    });
  });
  const controleffect = 0;
  let flag = 0;
  function sendvalue() {
    flag === 0 ? (flag = 1) : (flag = 0);
    dispath(changeClass(flag));
  }
  useEffect(() => {
    const hiddentMenu = document.getElementById("SubLeftIcon");
    hiddentMenu.addEventListener("click", sendvalue);
  }, [controleffect]);
  return (
    <>
      <div className={clsx(styles.SubHeaderContainer)}>
        <div className={clsx(styles.SubLeft)}>
          <button className={clsx(styles.SubLeftBnt)}>
            <i
              id="SubLeftIcon"
              className={clsx(styles.SubLeftIcon, "fa-solid fa-bars")}
            ></i>
          </button>

          <img
            src="src/image/logo/logoColor.e5de23ce.png"
            alt=""
            width={"40px"}
            height={"50px"}
            className={clsx()}
          />
          <h3 className={clsx(styles.active)}>
            HỆ THỐNG BÁO CÁO VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM ĐƯỢC ƯU TIÊN
            BẢO VỆ
          </h3>
          <h3 className={clsx(styles.disble)}>HỆ THỐNG BÁO CÁO...</h3>
        </div>
        <div id="SubRight" className={clsx(styles.SubRight)}>
          <button id="SubRightBox" className={clsx(styles.SubRightBox)}>
            <div className={clsx(styles.SubRightBoxCiclre)}>B</div>
            <p className={clsx(styles.SubRightP)}>Ban quản lý dự án</p>
          </button>
          <div
            id="SubRightLogout"
            className={clsx(styles.SubRightLogout, styles.shutdowPopup)}
          >
            <div className={clsx(styles.SubRightLogoutTop)}>
              <div className={clsx(styles.SubRightBoxCiclre)}>B</div>
              <h3 className={clsx(styles.SubRightLogoutTopH3)}>
                Ban quản lý dự án
              </h3>
              <h5 className={clsx(styles.SubRightLogoutTopH5)}>
                Ban quản lý dự án
              </h5>
            </div>
            <div className={clsx(styles.SubRightLogoutBottom)}>
              <button className={clsx(styles.SubRightLogoutBottomBtn)}>
                Hố sơ
              </button>
              <button
                id="SubRightLogoutBottomBtnLogout"
                className={clsx(
                  styles.SubRightLogoutBottomBtn,
                  styles.SubRightLogoutBottomBtnLogout
                )}
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SubHeader;
