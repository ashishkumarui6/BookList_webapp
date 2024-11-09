import React from "react";

const View = ({ userData, OngetDelete }) => {
  return userData.map((it, ix) => {
    return (
      <>
        <tr key={it.InISBN}>
          <td>{it.InISBN}</td>
          <td>{it.Intitle}</td>
          <td>{it.Inauthor}</td>
          <td onClick={() => OngetDelete(it.InISBN)}>Delete</td>
        </tr>
      </>
    );
  });
};

export default View;
