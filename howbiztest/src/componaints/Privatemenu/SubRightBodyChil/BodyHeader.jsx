import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import styles from "./SubRightBody.module.css";
import { useEffect } from "react";
function BodyHeader() {
  const navigates = useNavigate();
  const locaToken2 = localStorage.getItem("accestoken");
  useEffect(() => {
    document.getElementById("addNewForm").addEventListener("click", () => {
      locaToken2 ? navigates("/controladmin/them-moi") : navigates("/");
    });
  });

  return (
    <>
      <div className={clsx(styles.BodyHeaderContainer)}>
        <div className={clsx(styles.logoFunction)}>
          <i className={clsx(styles.stylesIcon, "fa-solid fa-hippo")}></i>
          <h3>Loài nguy cấp quý hiếm</h3>
        </div>
        <div className={clsx(styles.SearchAdd)}>
          <div className={clsx(styles.searchContainer)}>
            <i
              className={clsx(
                styles.searchIcon,
                "fa-solid fa-magnifying-glass"
              )}
            ></i>
            <input
              className={clsx(styles.inputSearch)}
              type="text"
              placeholder="Tìm kiếm theo tên"
            />
          </div>
          <div className={clsx(styles.AddNewContai)}>
            <button id="addNewForm" className={clsx(styles.AddNew)}>
              + Thêm mới
            </button>
          </div>
        </div>
        <div className={clsx(styles.ColumInformation)}>
          <h5 className={clsx(styles.ColumInformationSub)}>Tên</h5>
          <h5 className={clsx(styles.ColumInformationSub)}>Tên Khoa Học</h5>
          <h5 className={clsx(styles.ColumInformationSub)}>Giới</h5>
          <h5 className={clsx(styles.ColumInformationSub)}>Ngành</h5>
          <h5 className={clsx(styles.ColumInformationSub)}>Lớp</h5>
          <h5 className={clsx(styles.ColumInformationSub)}>Bộ</h5>
          <h5 className={clsx(styles.ColumInformationSub)}>Họ</h5>
          <h5 className={clsx(styles.ColumInformationSub)}>Chi</h5>
          <h5 className={clsx(styles.ColumInformationSub)}>Hành động</h5>
        </div>
      </div>
    </>
  );
}
export default BodyHeader;
