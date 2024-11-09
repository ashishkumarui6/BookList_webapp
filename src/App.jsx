import { useState, useEffect } from "react";
import "./App.css";
import View from "./components/View";

function App() {
  // input field satate
  const [formData, setFormData] = useState({
    Intitle: "",
    Inauthor: "",
    InISBN: "",
  });

  const onGetChange = (e) => {
    let oldData = { ...formData };
    let InputName = e.target.name;
    let InputValue = e.target.value;
    oldData[InputName] = InputValue;
    setFormData(oldData);
  };

  const getlocalstrogevall = () => {
    const data = localStorage.getItem("users");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const [userData, setUserData] = useState(getlocalstrogevall());

  const OnSaveData = (e) => {
    e.preventDefault();

    const OnGetcurrentdata = {
      Intitle: formData.Intitle,
      Inauthor: formData.Inauthor,
      InISBN: formData.InISBN,
    };

    const alluser = [...userData, OnGetcurrentdata];

    setUserData(alluser);
    console.log(alluser);
    setFormData({
      Intitle: "",
      Inauthor: "",
      InISBN: "",
    });
  };

  // saving in data on local stroge

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userData));
  }, [userData]);

  const OngetDelete = (InISBN) => {
    const deleteFillter = userData.filter((elm, ix) => {
      return elm.InISBN !== InISBN;
    });
    setUserData(deleteFillter);
  };
  return (
    <>
      <div className="wrapper">
        <h1>BookList App</h1>
        <p>Add view your books using local storage</p>
        <div className="main">
          <div className="form-container">
            <form
              autoComplete="off"
              className="form-group"
              onSubmit={OnSaveData}
            >
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                name="Intitle"
                value={formData.Intitle}
                onChange={onGetChange}
                required
              />
              <br />
              <label>Author</label>
              <input
                type="text"
                className="form-control"
                name="Inauthor"
                value={formData.Inauthor}
                onChange={onGetChange}
                required
              />
              <br />
              <label>ISBN#</label>
              <input
                type="text"
                className="form-control"
                name="InISBN"
                value={formData.InISBN}
                onChange={onGetChange}
                required
              />
              <br />
              <button type="Submit" className="btn btn-success btn-md">
                ADD
              </button>
            </form>
          </div>
          <div className="view-container">
            {userData.length > 0 && (
              <>
                <div className="table-presponsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ISBN#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <View userData={userData} OngetDelete={OngetDelete} />
                    </tbody>
                  </table>
                </div>
                <button
                  className="btn btn-danger btn-md"
                  onClick={() => setUserData([])}
                >
                  Remove All
                </button>
              </>
            )}
            {userData.length < 1 && <p>No Books Add !</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
