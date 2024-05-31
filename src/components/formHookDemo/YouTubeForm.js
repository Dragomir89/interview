import { Buttontest } from "@dragomir89/story-book-app/dist";
import { DevTool } from "@hookform/devtools";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

let renderCount = 0;

const YouTubeForm = () => {
  renderCount++;
  // const defaultValues1 = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/users/1"
  //   );
  //   const data = await response.json();
  //   return {
  //     username: "Batman",
  //     email: data.email,
  //     channel: "",
  //   };
  // };
  const defaultValues = {
    username: "Pesho",
    email: "test@test.com",
    channel: "",
    social: {
      twitter: "",
      facebook: "",
    },
    age: 0,
    dob: new Date(),
  };

  const form = useForm({ defaultValues });

  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
  } = form;
  console.log("=== control ===");
  console.log(control);
  console.log("===  ===");
  const watchForm = watch();

  const { errors } = formState;
  // console.log({ errors });
  const onSubmit = (data) => {
    console.log("Form submitted: ", data);
  };

  useEffect(() => {
    // same like onCange event
    const subscription = watch((value) => {
      console.log(value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const handleGetValues = () => {
    console.log("Get Values ", getValues());
    console.log("Get Values ", getValues("social"));
  };

  const handleSetValue = () => {
    // променя стойността все едно не е докосвана от потребител
    // може да се добавя допълнителни попс които ще направят така все едно юзъра я е пипал
    setValue("username", "");
  };

  ///// NEXT VIDEO IS 10 !!!
  return (
    <div style={{ marginTop: "50px" }}>
      <Buttontest>test</Buttontest>
      <h2>Yoytube form ({renderCount / 2})</h2>
      <h2>Wathced Val: {JSON.stringify(watchForm)}</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            {...register("username", {
              required: { value: true, message: "Username is required" },
            })}
          />
          <p style={{ color: "red", margin: "2px" }}>
            {errors.username?.message}
          </p>
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  // this functions is called on submit
                  return (
                    fieldValue !== "admin@example.com" ||
                    "Enter a different email"
                  );
                },
                notInBlackList: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain.com") ||
                    "This domain is not supported"
                  );
                },
              },
            })}
          />
          <p style={{ color: "red", margin: "2px" }}>{errors.email?.message}</p>
        </div>
        <br />
        <div>
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            {...register("channel", {
              required: { value: true, message: "Channel is required" },
            })}
          />
          <p style={{ color: "red", margin: "2px" }}>
            {errors.channel?.message}
          </p>
        </div>
        <br />
        <div>
          <label htmlFor="twitter">Twitter</label>
          <input
            type="text"
            id="twitter"
            name="twitter"
            {...register("social.twitter")}
          />
        </div>
        <br />
        <div>
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            name="facebook"
            {...register("social.facebook")}
          />
        </div>
        <br />
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            {...register("age", {
              required: { value: true, message: "Age is required" },
            })}
          />
          <p style={{ color: "red", margin: "2px" }}>{errors.age?.message}</p>
        </div>
        <br />
        <div>
          <label htmlFor="dob">Date Of birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            {...register("dob", {
              valueAsDate: true,
              required: { value: true, message: "Date Of birth is required" },
            })}
          />
          <p style={{ color: "red", margin: "2px" }}>{errors.dob?.message}</p>
        </div>
        <button>Submit</button>
      </form>
      <button type="button" onClick={handleGetValues}>
        GET VALUES
      </button>
      <button type="button" onClick={handleSetValue}>
        SET VALUES
      </button>
      <DevTool control={control} />
    </div>
  );
};

export default YouTubeForm;
