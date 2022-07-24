import * as Swal from "sweetalert";
import React from "react";
import { Button } from "react-bootstrap";

const Index = () => {
  const handleMOdal = () => {
    Swal({
      title: "Good",
      text: "Nice",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then((result) => {
      if (result) {
        Swal("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "15%",
      }}
    >
      <Button style={{ width: "5rem" }} onClick={handleMOdal}>
        Add
      </Button>
    </div>
  );
};

export default Index;
