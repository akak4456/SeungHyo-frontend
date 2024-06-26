import React from 'react';
import ReactDOM from 'react-dom';
import styles from './setting-pw-change.module.css';
import Header from '../../../header/header';
import SettingTab from '../setting-tab';
import {useMediaQuery} from 'react-responsive';
import { isMobileQuery } from '../../../responsive';
import classNames from 'classnames';
import InputBox from '../../../common/input-box/input-box';
import PrimaryButton from '../../../common/button/primary/primary-button';

const SettingPwChange = () => {
    const isMobile = useMediaQuery({
        query : isMobileQuery
    });
    return (
        <>
            <Header></Header>
            <main className={classNames(styles.SettingPwChangeRoot, {[styles.SettingPwChangeRootMobile]: isMobile})}>
                <SettingTab isPWChangeActive={true}></SettingTab>
                <div className={classNames(styles.SettingPwChangeContent, {[styles.SettingPwChangeContentMobile]: isMobile})}>
                    <p className={styles.SettingPwChangeMainTitle}>비밀번호 변경</p>
                    <div className={styles.SettingPwChangeDiv}></div>
                    <p className={styles.SettingPwChangeInputTitle}>아이디</p>
                    <InputBox type="text" disabled value="akak4456"></InputBox>
                    <p className={styles.SettingPwChangeInputTitle}>비밀번호</p>
                    <InputBox type="password" placeholder="비밀번호"></InputBox>
                    <p className={styles.SettingPwChangeInputTitle}>새로운 비밀번호</p>
                    <InputBox type="password" placeholder="새로운 비밀번호"></InputBox>
                    <p className={styles.SettingPwChangeInputTitle}>새로운 비밀번호 확인</p>
                    <InputBox type="password" placeholder="새로운 비밀번호 확인"></InputBox>
                    <div className={styles.SettingPwChangeButtonGroup}>
                        <PrimaryButton buttonText="변경"></PrimaryButton>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SettingPwChange;