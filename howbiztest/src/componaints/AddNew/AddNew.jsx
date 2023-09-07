import clsx from "clsx";
import styles from "./AddNew.module.css";
function AddNew() {
  return (
    <>
      <div className={clsx(styles.container)}>
        <h1>mất file anh ơi đến đây em hết sức rồi T_T</h1>
        <video width={"800px"} height={"600px"} controls autoPlay>
          <source src="/src/image/video/video.mp4.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
export default AddNew;
