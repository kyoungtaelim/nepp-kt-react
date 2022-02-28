import { useEffect } from "react";
import { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeUsername = (e) => setName(e.target.value);
  const onChangeUsername2 = (e) => setNickname(e.target.value);

  useEffect(() => {
    console.log("확인");
    return () => {
      console.log("제거됨");
    };
  }, []);

  return (
    <>
      <input value={name} onChange={onChangeUsername} type="text" name="name" />
      <input
        value={nickname}
        onChange={onChangeUsername2}
        type="text"
        name="name"
      />
      <h1>{name}</h1>
      <h1>{nickname}</h1>
    </>
  );
};

export default Info;
