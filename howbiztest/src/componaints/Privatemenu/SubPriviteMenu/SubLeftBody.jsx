import clsx from "clsx";
import styles from "./SubPriviteMenu.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function SubLeftBody() {
  const flagChane = useSelector((state) => state.hiddentnav);
  useEffect(() => {
    const SubLeftTitleContainer = document.getElementById(
      "SubLeftTitleContainer"
    );
    const SubLeftContainer = document.getElementById("SubLeftContainer");
    if (flagChane == 0) {
      SubLeftTitleContainer.classList.add(clsx(styles.shutdowPopup));
      SubLeftTitleContainer.classList.remove(
        clsx(styles.SubLeftContainerActive)
      );
      SubLeftContainer.classList.remove(clsx(styles.SubLeftContainerControlOn));
      SubLeftContainer.classList.add(clsx(styles.SubLeftContainerControlOff));
    } else {
      SubLeftTitleContainer.classList.remove(clsx(styles.shutdowPopup));
      SubLeftTitleContainer.classList.add(clsx(styles.SubLeftContainerActive));
      SubLeftContainer.classList.add(clsx(styles.SubLeftContainerControlOn));
      SubLeftContainer.classList.remove(
        clsx(styles.SubLeftContainerControlOff)
      );
    }
  }, [flagChane]);
  return (
    <>
      <div
        id="SubLeftContainer"
        className={clsx(
          styles.SubLeftContainer,
          styles.SubLeftContainerControlOn
        )}
      >
        <div className={clsx(styles.SubLeftIconContainer)}>
          <i className={clsx(styles.stylesIcon, "fa-solid fa-table-cells")}></i>
          <i className={clsx(styles.stylesIcon, "fa-regular fa-user")}></i>
          <i className={clsx(styles.stylesIcon, "fa-regular fa-chart-bar")}></i>
          <i className={clsx(styles.stylesIcon, "fa-solid fa-hippo")}></i>
          <i className={clsx(styles.stylesIcon, "fa-solid fa-pen-clip")}></i>
        </div>
        <div
          id="SubLeftTitleContainer"
          className={clsx(
            styles.SubLeftTitleContainer,
            styles.SubLeftContainerActive
          )}
        >
          <button className={clsx(styles.stylePara)}>Bảng điều khiển</button>
          <button className={clsx(styles.stylePara)}>Quản lý người dùng</button>
          <button className={clsx(styles.stylePara)}>Phân loại học</button>
          <button className={clsx(styles.stylePara)}>
            Loài nguy cấp quý hiếm
          </button>
          <button className={clsx(styles.stylePara)}>Bài viết</button>
        </div>
      </div>
    </>
  );
}
export default SubLeftBody;
