import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="To"
          {...register("To", { required: true })}
        />
        {errors.To?.type === "required" && (
          <p className="sendMail__error">To is Required!</p>
        )}
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject?.type === "required" && (
          <p className="sendMail__error">Subject is Required!</p>
        )}
        <input
          type="text"
          placeholder="Message..."
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {errors.message?.type === "required" && (
          <p className="sendMail__error">Message is Required!</p>
        )}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
