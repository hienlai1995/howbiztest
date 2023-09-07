import clsx from "clsx";
import styles from "./SubPriviteMenu.module.css";
import BodyHeader from "../SubRightBodyChil/BodyHeader";
import DynamicContent from "../SubRightBodyChil/DynamicContent";
import Pagination from "../SubRightBodyChil/Pagination";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function SubRightBody() {
  const flagChane = useSelector((state) => state.hiddentnav);
  useEffect(() => {
    const SubRightBodyContainer = document.getElementById(
      "SubRightBodyContainer"
    );

    if (flagChane == 0) {
      SubRightBodyContainer.classList.remove(
        clsx(styles.SubRightBodyContainerOn)
      );
      SubRightBodyContainer.classList.add(
        clsx(styles.SubRightBodyContainerOff)
      );
    } else {
      SubRightBodyContainer.classList.add(clsx(styles.SubRightBodyContainerOn));
      SubRightBodyContainer.classList.remove(
        clsx(styles.SubRightBodyContainerOff)
      );
    }
  }, [flagChane]);
  return (
    <>
      <div
        id="SubRightBodyContainer"
        className={clsx(
          styles.SubRightBodyContainer,
          styles.SubRightBodyContainerOn
        )}
      >
        <BodyHeader />
        <DynamicContent />
        <Pagination />
      </div>
    </>
  );
}
export default SubRightBody;
