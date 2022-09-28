import React from "react"
import PropTypes from "prop-types"
import { TabBarContainer, TabButton, AlertAndUserInfoContainer } from "./styles"
import { FiLogOut } from "react-icons/fi";
import {useNavigate} from "react-router-dom";

const TabBar = ({ className, children }) => {
  const navigate = useNavigate();
  return (
    <TabBarContainer className={`flex flex-min-with pl-1.5 pr-2.5 w-full ${className} justify-between items-center`}>
      {children}
      <div>
        данные о пользователе
      </div>
      <div className="m-l-auto">
        <FiLogOut
          size={18}
          onClick={() => navigate("/login")}
        />
      </div>
    </TabBarContainer>
  )
}

TabBar.propTypes = {
  className: PropTypes.string
}

TabBar.defaultProps = {
  className: ""
};

export default React.memo(TabBar)
