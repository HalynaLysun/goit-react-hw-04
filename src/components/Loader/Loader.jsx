import css from "./Loader.module.css";
import { Hearts } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <h1>Please wait for the images</h1>
      <Hearts
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>
  );
}
