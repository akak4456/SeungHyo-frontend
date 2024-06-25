import React from 'react';
import ReactDOM from 'react-dom';
import styles from './problem.module.css';
import Header from '../../header/header';
import { isTabletQuery } from '../../responsive';
import classNames from 'classnames';
import {useMediaQuery} from 'react-responsive';
import Tag from '../../common/tag/tag';
const ProblemTab = (props) => {
    const copyFn = async (event) => {
        event.preventDefault();
        var preText = props.copyText;
    
        try {
            // Clipboard API를 사용하여 텍스트를 클립보드에 복사
            await navigator.clipboard.writeText(preText);
        } catch (err) {
            // 에러가 발생하면 사용자에게 알림
            console.error('Failed to copy: ', err);
            alert('Failed to copy text.');
        }


    }
    return (
        <div className={styles.ProblemTab}>
            <span>{props.text} {props.copyText && <a onClick={copyFn}>복사</a>}</span>
        </div>
    );
}
const ProblemLeftSide = (props) => {
    // 이런 특수문자는 어떡하지? 입력 탭 같은 경우 말이야
    const example1Text = '1 2';
    const example2Text = '3';
    return (
        <div className={classNames(styles.ProblemLeftSideRoot, {[styles.ProblemLeftSideRootTablet]: props.isTablet})}>
            <p className={styles.ProblemLeftSideMainTitle}>1000번. A + B</p> 
            <Tag text={"성공"} backgroundColor = {"#5CB85C"} marginLeft={"16px"} />
            <Tag text={"다국어"} backgroundColor = {"#777777"} marginLeft={"16px"} />
            <table className={styles.ProblemTable}>
                <tr>
                    <th>시간 제한</th>
                    <th>메모리 제한</th>
                    <th>정답 비율</th>
                </tr>
                <tr>
                    <td>2초</td>
                    <td>128MB</td>
                    <td>39.049%</td>
                </tr>
            </table>
            <ProblemTab text={"문제"} />
            <div className={styles.ProblemLeftSideDivider}></div>
            <p className={styles.ProblemContent}>
            두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
            </p>
            <ProblemTab text={"입력"} />
            <div className={styles.ProblemLeftSideDivider}></div>
            <p className={styles.ProblemContent}>
            첫째 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10)
            </p>
            <ProblemTab text={"출력"} />
            <div className={styles.ProblemLeftSideDivider}></div>
            <p className={styles.ProblemContent}>
            첫째 줄에 A+B를 출력한다.
            </p>

            <ProblemTab text={"예제 입력 1"} copyText = {example1Text} />
            <div className={styles.ProblemLeftSideDivider}></div>
            <pre className={styles.ProblemExample}>
{example1Text}             
            </pre>
            <ProblemTab text={"예제 출력 1"} copyText = {example2Text} />
            <div className={styles.ProblemLeftSideDivider}></div>
            <pre className={styles.ProblemExample}>
{example2Text}             
            </pre>
        </div>
    )
}
const ProblemRightSide = (props) => {
    return (
        <div className={classNames(styles.ProblemRightSideRoot, {[styles.ProblemRightSideRootTablet]: props.isTablet})}>
            
        </div>
    )
}
const Problem = (props) => {
    const isTablet = useMediaQuery({
        query : isTabletQuery
    });
    return (
        <>
            <Header />
            <main className = {classNames(styles.ProblemRoot, {[styles.ProblemRootTablet] : isTablet})}>
                <ProblemLeftSide isTablet={isTablet} />
                <ProblemRightSide isTablet={isTablet} />
            </main>
        </>
    );
}
export default Problem;