import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();

  const goToLogin = () => {
    if (authenticate) {
      setAuthenticate(false);
    } else {
      navigate("/login");
    }
  };

  const search = (e) => {
    if (e.keyCode === 13) {
      // 입력한 검색어를 읽어와서
      let keyword = e.target.value;
      // url을 바꿔준다.
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png"
          alt="logo"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyDown={(e) => search(e)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
