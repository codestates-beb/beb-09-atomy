import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiOutlineWallet } from "react-icons/ai";

const ProfileDiv = styled.div`
  margin-right: 60px;
  display: flex;
`;

const ProfileIcon = styled.div`
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    div {
      /* display:block; */
      animation: menu-open 0.5s forwards;
      @keyframes menu-open {
        from {
        }
        to {
          visibility: visible;
          top: 70px;
        }
      }
    }
  }
  div {
    /* display:none; */
    visibility: hidden;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 60px;
  right: 70px;
  box-shadow: 1px 1px 1px 1px;
  background: white;
  border-radius: 15px;
`;

const SubMenu = styled.div`
  /* margin-left:5px; */
  cursor: pointer;
  /* padding:30px; */
  padding-right: 100px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Profile = ({ web3, address, handleLogout }) => {
  const [balance, setBalance] = useState("");
  const nav = useNavigate();
  useEffect(() => {
    getEtherBalance();
  }, []);

  const getEtherBalance = () => {
    web3.eth.getAccounts().then((account) => {
      web3.eth
        .getBalance(account[0])
        .then((bal) => {
          return web3.utils.fromWei(bal, "ether"); // wei => ether로 단위 변환
        })
        .then((eth) => {
          eth = Number(eth).toFixed(4); // 소숫점 4번째 자리까지 반올림
          setBalance(eth);
        });
    });
  };

  return (
    <ProfileDiv>
      <h3>{balance} ETH</h3>
      <ProfileIcon>
        <img src="profile.png" alt="profile" width="70px" height="70px" />
        <Menu style={{ padding: "12px 0px" }}>
          <SubMenu>
            <AiOutlineWallet size="36px" style={{ padding: "0px 8px" }} />
            <h4>{`${address.slice(0, 6)}...${address.slice(-4)}`}</h4>
          </SubMenu>
          <SubMenu
            onClick={() => {
              nav("/account");
            }}
          >
            <img src="profile1.png" alt="profile" />
            <h4>Profile</h4>
          </SubMenu>
          <SubMenu
            onClick={() => {
              nav("/create");
            }}
          >
            <img src="pencil.png" alt="pencil" width="50px" height="50px" />
            <h4>create</h4>
          </SubMenu>
          <SubMenu onClick={handleLogout}>
            <img src="logout1.png" alt="logout" width="50px" height="50px" />
            <h4>Log Out</h4>
          </SubMenu>
        </Menu>
      </ProfileIcon>
    </ProfileDiv>
  );
};

export default Profile;
