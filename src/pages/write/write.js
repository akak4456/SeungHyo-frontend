import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './write.module.css';
import InputBox from '../../components/inputbox';
import Dropdown from '../../components/dropdown';
import NormalEditor from '../../components/editor-normal';
import SourceEditor from '../../components/editor-source';
import NormalButton from '../../components/button-normal';
const Write = () => {
	const categories = ['질문', '자유', '기타'];
	const languages = ['JAVA', 'C', 'C++'];
	return (
		<main className={styles.WriteRoot}>
			<table className={styles.WriteTable}>
				<tr>
					<td className={styles.WriteTableLeft}>제목</td>
					<td className={styles.WriteTableRight}>
						<InputBox />
					</td>
				</tr>
				<tr>
					<td className={styles.WriteTableLeft}>카테고리</td>
					<td className={styles.WriteTableRight}>
						<Dropdown dropDownText={categories} />
					</td>
				</tr>
				<tr>
					<td className={styles.WriteTableLeft}>언어</td>
					<td className={styles.WriteTableRight}>
						<Dropdown dropDownText={languages} />
					</td>
				</tr>
				<tr>
					<td className={styles.WriteTableLeft}>문제번호</td>
					<td className={styles.WriteTableRight}>
						<InputBox />
					</td>
				</tr>
				<tr>
					<td className={styles.WriteTableLeft}>내용</td>
					<td className={styles.WriteTableRight}>
						<NormalEditor />
					</td>
				</tr>
				<tr>
					<td className={styles.WriteTableLeft}>소스코드</td>
					<td className={styles.WriteTableRight}>
						<SourceEditor />
					</td>
				</tr>
				<tr>
					<td className={styles.WriteTableLeft}></td>
					<td className={styles.WriteTableRight}>
						<NormalButton type="primary" text="글쓰기"></NormalButton>
					</td>
				</tr>
			</table>
		</main>
	);
};

export default Write;