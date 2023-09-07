import clsx from "clsx";
import style from "./TotalPrivate.module.css";
import SubHeader from "../SubPriviteMenu/SubHeader";
import SubLeftBody from "../SubPriviteMenu/SubLeftBody";
import SubRightBody from "../SubPriviteMenu/SubRightMenu";
function TotalPriviteMenu() {
  return (
    <>
      <SubHeader />
      <div className={clsx(style.bodyStyle)}>
        <SubLeftBody />
        <SubRightBody />
      </div>
    </>
  );
}
export default TotalPriviteMenu;
