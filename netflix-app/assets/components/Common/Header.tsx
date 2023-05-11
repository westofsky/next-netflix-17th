import styled from 'styled-components';
import Link from 'next/link';

function Header(){
  return (
    <HeaderWrapper>
      <LogoLink href={'/'}>
        <LogoWrapper src={`/netflix_trans.png`}></LogoWrapper>
	  	</LogoLink>
      <LogoLink href={'/pages'}>
				<HeaderMenu>TV Shows</HeaderMenu>
			</LogoLink>
			<LogoLink href={'/pages'}>
				<HeaderMenu>Movies</HeaderMenu>
			</LogoLink>
			<LogoLink href={'/pages'}>
				<HeaderMenu>My List</HeaderMenu>
			</LogoLink>
		</HeaderWrapper>
	);
};

export default Header;

const HeaderWrapper = styled.div`
  width: 375px;
  padding: 1rem 0 1rem 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
`;
const LogoLink = styled(Link)`
	text-decoration : none;
`
const HeaderMenu = styled.p`
  font-size: 17.2px;
  color: white;
`;

const LogoWrapper = styled.img`
  width: 1.5rem;
`;
