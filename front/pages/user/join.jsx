import FormLayout from "../../components/FormLayout";
import Head from "next/head";
import useInput from "../../hooks/useInput";
import { useState, useEffect } from "react";
import { imageUpload, joinRequest } from "../../components/api/joinRequest";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { UserLoginAction } from "../../reducers/user";

const ProfileImage = () => {

  const [image, setImage] = useState();

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      <h2></h2>
      프로필 이미지: <input type="file" onChange={handleImage} />
    </>
  )
}
const Nickname = () => {

  const nickname = useInput("");

  return (
    <>
      닉네임:{" "}
      <input
        type="text"
        {...nickname}
        placeholder="닉네임을 입력해주세요"
      />
    </>
  )
}
const Gender = () => {

  const [gender, setGender] = useState({ male: false, female: false });

  const handleGender = (e) => {
    let temp = { male: false, female: false };
    temp[e.target.value] = e.target.checked;
    setGender(temp);
  };

  return (
    <>
      성별: 남:
      <input
        type="radio"
        name="gender"
        value="male"
        checked={gender.male}
        onChange={handleGender}
      />
      여:
      <input
        type="radio"
        name="gender"
        value="female"
        checked={gender.female}
        onChange={handleGender}
      />
    </>
  )
}
const PrevPresident = () => {

  // const [president, setPresident] = useState({ president1: false, president2: false,president3: false,president4: false,president5: false,president6: false});

  // const handlePresident = (e) => {
  //   let temp = { president1: false, president2: false,president3: false,president4: false,president5: false,president6: false};
  //   temp[e.target.value] = e.target.checked;
  //   setPresident(temp);
  // };

  return (
    <>
      <h2>1. 18대 대선 때 투표한 대선후보를 선택해주세요.</h2>

      <input
        type="radio"
        name="president1"
        value="president1"
      // checked={president.president1}
      // onChange={handlePresident}
      />박근혜

      <input
        type="radio"
        name="president2"
        value="president2"
      // checked={president.president2}
      // onChange={handlePresident}
      />문재인
      <input
        type="radio"
        name="president3"
        value="president3"
      // checked={president.president3}
      // onChange={handlePresident}
      />박종선

      <h2>2. 17대 대선 때 투표한 대선후보를 선택해주세요.</h2>

      <input
        type="radio"
        name="president4"
        value="president4"
      // checked={president.president4}
      // onChange={handlePresident}
      />정동영

      <input
        type="radio"
        name="president5"
        value="president5"
      // checked={president.president5}
      // onChange={handlePresident}
      />이명박

      <input
        type="radio"
        name="president6"
        value="president6"
      // checked={president.president6}
      // onChange={handlePresident}
      />이회창

    </>
  )
}

const Birth = () => {

  const age = useInput("");

  return (
    <>
      출생 연도:{" "}
      <input type="number" {...age} placeholder="출생연도 입력해주세요" />
    </>
  )
}
const Hometown = () => {

  const [hometown, setHomtown] = useState();

  const handleHometown = (e) => {
    setHomtown(e.target.value);
  };

  return (
    <>
      고향:{" "}
      <select name="hometown" onChange={handleHometown}>
        <option value="">고향</option>
        <option value="서울특별시">서울특별시</option>
        <option value="부산광역시">부산광역시</option>
        <option value="대구광역시">대구광역시</option>
        <option value="인천광역시">인천광역시</option>
        <option value="광주광역시">광주광역시</option>
        <option value="대전광역시">대전광역시</option>
        <option value="울산광역시">울산광역시</option>
        <option value="세종특별자치시">세종특별자치시</option>
        <option value="경기도">경기도</option>
        <option value="강원도">강원도</option>
        <option value="충청북도">충청북도</option>
        <option value="충청남도">충청남도</option>
        <option value="전라북도">전라북도</option>
        <option value="전라남도">전라남도</option>
        <option value="경상북도">경상북도</option>
        <option value="경상남도">경상남도</option>
        <option value="제주특별자치도">제주특별자치도</option>
      </select>
    </>
  )
}
const Residence = () => {

  const [residence, setResidence] = useState();
  const handleResidence = (e) => {
    setResidence(e.target.value);
  };

  return (
    <>
      거주지:{" "}
      <select name="residence" onChange={handleResidence}>
        <option value="">거주지</option>
        <option value="서울특별시">서울특별시</option>
        <option value="부산광역시">부산광역시</option>
        <option value="대구광역시">대구광역시</option>
        <option value="인천광역시">인천광역시</option>
        <option value="광주광역시">광주광역시</option>
        <option value="대전광역시">대전광역시</option>
        <option value="울산광역시">울산광역시</option>
        <option value="세종특별자치시">세종특별자치시</option>
        <option value="경기도">경기도</option>
        <option value="강원도">강원도</option>
        <option value="충청북도">충청북도</option>
        <option value="충청남도">충청남도</option>
        <option value="전라북도">전라북도</option>
        <option value="전라남도">전라남도</option>
        <option value="경상북도">경상북도</option>
        <option value="경상남도">경상남도</option>
        <option value="제주특별자치도">제주특별자치도</option>
      </select>
    </>
  )
}

const Agree = () => {
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  const handleTerm = () => {
    setTermError(term === true);
    setTerm(!term);
  };

  return (
    <>
      <input
        type="checkbox"
        checked={term}
        onChange={handleTerm}
        id="term"
      />
      <label htmlFor="term">약관에 동의해주세요.</label>
      <br />
      {termError && (
        <div style={{ color: "red" }}>약관에 동의해주세요.</div>
      )}

    </>
  )
}

const Finish = () => {
  return (
    <>
      <input type="number" value={number} />
      <button type="submit">회원가입</button>
    </>
  )
}

const Join = () => {
  const dispatch = useDispatch();
  const [userid, setUserid] = useState();

  const [number, setNumber] = useState(1);
  
  const upBtn = () => {
    setNumber(number + 1)
    if (setNumber == 8) {
      return setNumber(1)
    }
  }

  useEffect(async () => {
    const id = new URL(window.location.href).searchParams.get("id");
    setUserid(id);
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();

    const [image, setImage] = useState();

    const handleImage = (e) => {
      setImage(e.target.files[0]);
    };

    let imageURI = "defaultProfil";
    if (image != undefined) {
      imageURI = await imageUpload(image);
    }

    let sex;
    if (gender.male) {
      sex = 0;
    } else {
      sex = 1;
    }

    const data = {
      userid: userid,
      nickname: nickname.value,
      age: age.value,
      hometown: hometown,
      residence: residence,
      gender: sex,
      image: imageURI,
    };

    const result = await joinRequest(data);
    await dispatch(UserLoginAction(result));
    Router.push("/");
  };



  const Component = () => {
    if (number == 1) {
      return <Agree />
    } else if (number == 2) {
      return <ProfileImage />
  
    } else if (number == 3) {
      return <Nickname />
  
    } else if (number == 4) {
      return <Gender />
  
    } else if (number == 5) {
      return <Birth />
    } else if (number == 6) {
      return <Hometown />
    } else if (number == 7) {
      return <Residence />
    } else if (number == 8) {
      return <PrevPresident />
    }
  }
  

  return (
    <>
      <Head>
        <title>Join</title>
      </Head>
      <FormLayout>
        <h2>회원가입</h2>

        <form onSubmit={handleSubmit}>
          {/* <Agree />
          <ProfileImage />
          <Nickname/>
          <Gender />
          <Birth />
          <Hometown />
          <Residence /> */}
          <Component />
          <br />
          <button onClick={upBtn}>다음</button>
          <input type="number" value={number} />
          <button type="submit">회원가입</button>
        </form>
      </FormLayout>
    </>
  );
}




export default Join;
