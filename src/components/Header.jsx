import React from "react";

//Styles
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <div className="tittle">
        <header>
          <h4 className="logo">Todo List</h4>
          {/* <h4 className="logo">Eddy Tellez</h4> */}
        </header>

        <div className="buttons btn-bg bg-2 ">
          <div className="btn btn-2 flex buttons">
            <button> All Task</button>
            <button>Completed Task</button>
            <button>Uncompleted Task</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
