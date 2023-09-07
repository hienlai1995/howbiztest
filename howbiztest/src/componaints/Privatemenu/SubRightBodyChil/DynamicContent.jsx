import clsx from "clsx";
import styles from "./SubRightBody.module.css";
import { useEffect, useState } from "react";
import DangerTypeAnimalApi from "../../../Api/DangerTypeAnimalApi";
import { useSelector } from "react-redux";
function DynamicContent() {
  //  lấy dữ liệu
  const storePage = useSelector((state) => state.pagination);
  const [filter, Setfilter] = useState({
    paginate: true,
    page: 1,
    perpage: 8,
  });

  useEffect(() => {
    Setfilter({ ...filter, page: storePage });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storePage]);
  const [animalList, setAnimalList] = useState([]);
  useEffect(() => {
    const fetchInformationAnimal = async () => {
      try {
        const respon = await DangerTypeAnimalApi.getAll(filter);
        setAnimalList(respon.list);
      } catch (error) {
        console.log("fail to fetch api", error);
      }
    };
    fetchInformationAnimal();
  }, [filter]);

  return (
    <>
      <div className={clsx(styles.DynamicContentContai)}>
        {animalList.map((iteam) => (
          <>
            <div className={clsx(styles.newAnimal)}>
              <div className={clsx(styles.newAnimalName)}>
                <img
                  className={clsx(styles.avatarAnimal)}
                  src={
                    iteam.attachments[0]
                      ? `https://wlp.howizbiz.com${iteam.attachments[0].path}`
                      : "/src/image/logo/logoColor.e5de23ce.png"
                  }
                  alt="avatar"
                />
                <p className={clsx(styles.newAnimalP)}>{iteam.ten}</p>
              </div>
              <p className={clsx(styles.newAnimalName)}>{iteam.ten_khoa_hoc}</p>
              <p className={clsx(styles.newAnimalName)}>{iteam.kingdom.ten}</p>
              <p className={clsx(styles.newAnimalName)}>{iteam.class.ten}</p>
              <p className={clsx(styles.newAnimalName)}>{iteam.phylumn.ten}</p>
              <p className={clsx(styles.newAnimalName)}>{iteam.order.ten}</p>
              <p className={clsx(styles.newAnimalName)}>{iteam.kingdom.ten}</p>
              <p className={clsx(styles.newAnimalName)}>{iteam.class.ten}</p>
              <div
                className={clsx(
                  styles.newAnimalName,
                  styles.newAnimalNameAction
                )}
              >
                <i className={clsx(styles.axtionIcon, "fa-solid fa-pen")}></i>
                <i className="fa-solid fa-trash"></i>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
export default DynamicContent;
