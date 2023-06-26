import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProfileButton = styled.div`
  &:hover {
    div {
      visibility: visible;
    }
  }
  div {
    visibility: hidden;
  }
`;

const Menu = styled.div`
  position: absolute;
`;

const SubMenu = styled.div`
  padding: 10px;
`;

const Profile = ({ web3 }) => {
  const [balance, setBalance] = useState('');
  useEffect(() => {
    web3.eth.getAccounts().then((account) => {
      web3.eth
        .getBalance(account[0])
        .then((bal) => {
          return web3.utils.fromWei(bal, 'ether');
        })
        .then((eth) => {
          eth = Number(eth).toFixed(4);
          setBalance(eth);
        });
    });
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <h3>{balance} ETH</h3>
      <ProfileButton>
        <img src="/profile.png" alt="profile" width="70px" height="70px" /> {/* 이미지 파일의 경로 수정 */}
        <Menu>
          <SubMenu>* Profile</SubMenu>
          <SubMenu>* Create</SubMenu>
          <SubMenu>* Log Out</SubMenu>
        </Menu>
      </ProfileButton>
    </div>
  );
};

export default Profile;