import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './header.module.css';
import { Mobile, PC } from '../responsive.js';
import iconSearch from '../img/icon-search.png';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Logo from '../common/logo/logo.js';
import HamburgerButton from '../common/button/hamburger/hamburger-button.js';

class TapButton extends React.Component {
	render() {
		return (
			<div className={styles.TapButtonRoot}>
				<NavLink to={this.props.linkTo ? this.props.linkTo : '#'}>
					{this.props.buttonElement}
				</NavLink>
			</div>
		);
	}
}

function UserAnchor() {
	return (
		<ul className={styles.UserAnchor}>
			<li>
				<NavLink to={'/join'}>회원가입</NavLink>
			</li>
			<li>
				<NavLink to={'/login'}>로그인</NavLink>
			</li>
			<li>
				<NavLink to={'/user'}>akak4456</NavLink>
			</li>
			<li>
				<NavLink to={'/setting/info-edit'}>설정</NavLink>
			</li>
			<li>로그아웃</li>
		</ul>
	);
}

function MobileHeader() {
	const [isDropdownShown, setDropdownShown] = useState(false);
	const onShow = () => {
		setDropdownShown(true);
	};
	const onHide = () => {
		setDropdownShown(false);
	};
	return (
		<header className={styles.HeaderRoot}>
			<Link to="/">
				<Logo />
			</Link>
			<div className={styles.HeaderRightSide}>
				<div className={styles.HeaderUserAnchorGroup}>
					<UserAnchor />
				</div>
				<div className={styles.HeaderHamburgerButtonGroup}>
					<HamburgerButton onClick={isDropdownShown ? onHide : onShow} />
				</div>
			</div>
			<div
				className={styles.MobileHeaderDropDown}
				style={{
					opacity: isDropdownShown ? '1' : '0',
					visibility: isDropdownShown ? 'visible' : 'collapse',
				}}
			>
				<Link to="/problem-list">
					<p onClick={onHide}>문제</p>
				</Link>
				<div className={styles.MobileHeaderDropDownBorder}></div>
				<Link to="/reflection-note-list">
					<p onClick={onHide}>오답노트</p>
				</Link>
				<div className={styles.MobileHeaderDropDownBorder}></div>
				<Link to="/board">
					<p onClick={onHide}>게시판</p>
				</Link>
				<div className={styles.MobileHeaderDropDownBorder}></div>
				<Link to="/search">
					<p onClick={onHide}>
						<img src={iconSearch}></img>
					</p>
				</Link>
			</div>
		</header>
	);
}

function PCHeader() {
	return (
		<header className={styles.HeaderRoot}>
			<Link to="/">
				<Logo />
			</Link>
			<div className={styles.HeaderRightSide}>
				<div className={styles.HeaderUserAnchorGroup}>
					<UserAnchor />
				</div>
				<div>
					<TapButton buttonElement={'문제'} linkTo={'/problem-list'} />
					<TapButton
						buttonElement={'오답노트'}
						linkTo={'/reflection-note-list'}
					/>
					<TapButton buttonElement={'게시판'} linkTo={'/board'} />
					<TapButton
						buttonElement={<img src={iconSearch}></img>}
						linkTo={'/search'}
					/>
				</div>
			</div>
		</header>
	);
}

export default class Header extends React.Component {
	render() {
		// TODO 나중에 모바일 및 반응형 컴포넌트 제작하기
		return (
			<>
				<Mobile>
					<MobileHeader></MobileHeader>
				</Mobile>
				<PC>
					<PCHeader />
				</PC>
			</>
		);
	}
}
