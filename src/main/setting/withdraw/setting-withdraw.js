import React from 'react';
import ReactDOM from 'react-dom';
import styles from './setting-withdraw.module.css';
import Header from '../../../header/header';
import SettingTab from '../setting-tab';
import {useMediaQuery} from 'react-responsive';
import { isMobileQuery } from '../../../responsive';
import classNames from 'classnames';
import InputBox from '../../../common/input-box/input-box';
import PrimaryButton from '../../../common/button/primary/primary-button';
import DangerButton from '../../../common/button/danger/danger-button';

const SettingWithdraw = () => {
    const isMobile = useMediaQuery({
        query : isMobileQuery
    });
    return (
        <>
            <Header></Header>
            <main className={classNames(styles.SettingWithdrawRoot, {[styles.SettingWithdrawRootMobile]: isMobile})}>
                <SettingTab isWithdrawActive={true}></SettingTab>
                <div className={classNames(styles.SettingWithdrawContent, {[styles.SettingWithdrawContentMobile]: isMobile})}>
                    <p className={styles.SettingWithdrawMainTitle}>탈퇴하기</p>
                    <div className={styles.SettingWithdrawDiv}></div>
                    <p className={styles.SettingWithdrawSubTitle}>회원 탈퇴를 진행할 경우 되돌릴 수 없습니다.</p>
                    <p className={styles.SettingWithdrawSubTitle}>모든 정보가 삭제될 것인데 그래도 회원 탈퇴를 진행하시겠습니까?</p>
                    <p className={styles.SettingWithdrawSubTitle}>탈퇴 후 같은 아이디로의 재가입은 불가능합니다.</p>
                    <div className={styles.SettingWithdrawButtonGroup}>
                        <DangerButton buttonText="탈퇴"></DangerButton>
                        <PrimaryButton buttonText="취소"></PrimaryButton>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SettingWithdraw;