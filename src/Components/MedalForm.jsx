import { useState } from "react";

const MedalForm = ({ countries, setCountries }) => {
  const [countryName, setCountryName] = useState("");
  const [goldMedals, setGoldMedals] = useState("");
  const [silverMedals, setSilverMedals] = useState("");
  const [bronzeMedals, setBronzeMedals] = useState("");
  const resetFields = () => {
    setCountryName("");
    setGoldMedals(0);
    setSilverMedals(0);
    setBronzeMedals(0);
  };
  // 추가 함수
  const handleAdd = (e) => {
    e.preventDefault(); // 새로고침 방지

    if (!countryName) {
      alert("올바른 국가명을 입력하세요.");
      return;
    }
    if (goldMedals >= 100 || silverMedals >= 100 || bronzeMedals >= 100) {
      alert("제대로 입력해주세요!");
      return;
    }
    if (goldMedals < 0 || silverMedals < 0 || bronzeMedals < 0) {
      alert("제대로 입력해주세요!");
      return;
    }

    const existingCountry = countries.find(
      (country) => country.name === countryName
    );

    if (existingCountry) {
      alert("이미 존재하는 국가입니다.");
      return;
    }

    // 국가 추가
    setCountries([
      ...countries,
      {
        id: Date.now(),
        name: countryName,
        gold: goldMedals,
        silver: silverMedals,
        bronze: bronzeMedals,
      },
    ]);

    // 입력 필드 초기화
    resetFields();
  };

  // 업데이트 함수
  const handleUpdate = (e) => {
    e.preventDefault();

    // 기존 국가 찾기
    const existingCountry = countries.find(
      (country) => country.name === countryName
    );

    if (!existingCountry) {
      alert("존재하지 않는 국가입니다.");
      return;
    }
    if (goldMedals >= 100 || silverMedals >= 100 || bronzeMedals >= 100) {
      alert("제대로 입력해주세요!");
      return;
    }
    if (goldMedals < 0 || silverMedals < 0 || bronzeMedals < 0) {
      alert("제대로 입력해주세요!");
      return;
    }
    // 존재하면 메달 수 누적
    setCountries(
      countries.map((country) =>
        country.name === countryName
          ? {
              ...country,
              gold: goldMedals,
              silver: silverMedals,
              bronze: bronzeMedals,
            }
          : country
      )
    );

    // 입력 필드 초기화
    resetFields();
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <input
          className="countryname"
          type="text"
          placeholder="국가 입력"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)} // 입력 시 상태 업데이트
        />

        <input
          className="goldmedals"
          type="number"
          placeholder="금메달 수"
          value={goldMedals}
          onChange={(e) => setGoldMedals(Number(e.target.value))} // 숫자로 변환
        />
        <input
          className="silvermedals"
          type="number"
          placeholder="은메달 수"
          value={silverMedals}
          onChange={(e) => setSilverMedals(Number(e.target.value))}
        />
        <input
          className="bronzemedals"
          type="number"
          placeholder="동메달 수"
          value={bronzeMedals}
          onChange={(e) => setBronzeMedals(Number(e.target.value))}
        />

        <button type="submit" className="addbtn">
          국가추가
        </button>
        <button type="button" className="updbtn" onClick={handleUpdate}>
          업데이트
        </button>
      </form>
    </>
  );
};

export default MedalForm;
