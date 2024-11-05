const MedalList = ({ countries, handleDelete }) => {
  return (
    <>
      <div className="table">
        <table className="medaltable">
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {[...countries]
              .sort((a, b) => b.gold - a.gold)
              .map((country) => (
                <tr key={country.name}>
                  <td>{country.name}</td>
                  <td>{country.gold}</td>
                  <td>{country.silver}</td>
                  <td>{country.bronze}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(country.name)}
                      className="dlebtn"
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MedalList;
