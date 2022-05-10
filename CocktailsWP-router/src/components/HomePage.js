import React from "react";
import Cocktails from "./Cocktails";
import InputField from "./InputField";
import { useGlobalContext } from "./Context";
import Loading from "./Loading";

export default function HomePage() {
  const { loading } = useGlobalContext();
  return (
    <div className="HomePage">
      <InputField />
      {loading ? <Loading /> : <Cocktails />}
    </div>
  );
}
