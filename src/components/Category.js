import React from "react";
import Button from "./Button";

const Category = ({ reqType, setReqType }) => {
  return (
    <React.Fragment>
      <form onSubmit={(e) => e.preventDefault()}>
      <Button
        buttonText="Major"
        searchName="search?type=major"
        reqTpe={reqType}
        setReqType={setReqType}
        />
      <Button
        buttonText="Wands"
        searchName="suits/wands"
        reqTpe={reqType}
        setReqType={setReqType}
        />
        <Button
        buttonText="Cups"
        searchName="suits/cups"
        reqTpe={reqType}
        setReqType={setReqType}
        />
        <Button
        buttonText="Swords"
        searchName="suits/swords"
        reqTpe={reqType}
        setReqType={setReqType}
        />
        <Button
        buttonText="Pentacles"
        searchName="suits/pentacles"
        reqTpe={reqType}
        setReqType={setReqType}
        />
      </form>
    </React.Fragment>
  );
};

export default Category;
