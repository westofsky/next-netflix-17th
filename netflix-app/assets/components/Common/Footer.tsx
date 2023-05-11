import styled from 'styled-components';
import {BiHomeAlt2} from 'react-icons/bi';
import {FiSearch} from 'react-icons/fi';
import {MdOutlineVideoLibrary} from 'react-icons/md';
import {HiDownload} from 'react-icons/hi';
import {BsList} from 'react-icons/bs';

function Footer() {

  return (
    <FooterWrapper>
      <FooterItem selected = {true}>
        <BiHomeAlt2/>
        <FooterItemText>Home</FooterItemText>
      </FooterItem>
      <FooterItem selected = {false}>
        <FiSearch/>
        <FooterItemText>Search</FooterItemText>
      </FooterItem>
      <FooterItem selected = {false}>
        <MdOutlineVideoLibrary/>
        <FooterItemText>Coming Soon</FooterItemText>
      </FooterItem>
      <FooterItem selected = {false}>
        <HiDownload/>
        <FooterItemText>Downloads</FooterItemText>
      </FooterItem>
      <FooterItem selected = {false}>
        <BsList/>
        <FooterItemText>More</FooterItemText>
      </FooterItem>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 375px;
  height: 48px;
  background-color: #121212;
  margin: 0 auto;
`;

const FooterItem = styled.div<{ selected: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.selected ? '#E0E0E0' : '#757575')};
  font-size : 25px;
  display : flex;
  flex-direction : column;
  align-items :center;
  justify-content : center;
  :hover {
    color: ${(props) => (props.selected ? '#E0E0E0' : '#BDBDBD')};
  }
`;

const FooterItemText = styled.p`
  font-size : 10px;
`