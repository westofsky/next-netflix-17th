import styled from 'styled-components';
import Link from 'next/link';

function Header(){
  return (
    <HeaderWrapper>
      <Link href={'/'}>
        <LogoWrapper src={`/netflix_trans.png`}></LogoWrapper>
			</Link>
			<Link href={'/pages'}>
				<HeaderMenu>TV Shows</HeaderMenu>
			</Link>
			<Link href={'/pages'}>
				<HeaderMenu>Movies</HeaderMenu>
			</Link>
			<Link href={'/pages'}>
				<HeaderMenu>My List</HeaderMenu>
			</Link>
		</HeaderWrapper>
	);
};

export default Header;

const HeaderWrapper = styled.div`
  width: 375px;
  padding: 1rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
`;

const HeaderMenu = styled.div`
  font-size: 17.2px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LogoWrapper = styled.img`
  width: 1.5rem;
`;
