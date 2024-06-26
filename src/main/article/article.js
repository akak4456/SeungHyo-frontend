import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './article.module.css';
import Header from '../../header/header';
import { NavLink } from 'react-router-dom';
import { HandThumbsUp } from 'react-bootstrap-icons';
import PrimaryButton from '../../common/button/primary/primary-button';
import NormalEditor from '../../common/editor/normal/normal-editor';
import SourceEditor from '../../common/editor/source/source-editor';
import Dropdown from '../../common/dropdown/dropdown';

const ReplyAdd = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isSourceEditorOpen, setIsSourceEditorOpen] = useState(false);
	const languages = ['JAVA', 'C', 'C++'];
	return (
		<div className={styles.ReplyAddRoot}>
			{!isOpen && (
				<PrimaryButton
					buttonText={'댓글 쓰기'}
					onClick={() => setIsOpen(true)}
				/>
			)}
			<div className={styles.ReplyAddEditor}>
				{isOpen && <NormalEditor />}
				{isOpen && !isSourceEditorOpen && (
					<PrimaryButton
						buttonText={'소스 추가'}
						onClick={() => setIsSourceEditorOpen(true)}
					/>
				)}
				{isOpen && isSourceEditorOpen && <Dropdown dropDownText={languages} />}
				{isOpen && isSourceEditorOpen && <SourceEditor></SourceEditor>}
				{isOpen && <PrimaryButton buttonText={'댓글 저장'} />}
			</div>
		</div>
	);
};

const Reply = (props) => {
	return (
		<div className={styles.ReplyRoot}>
			<div className={styles.ReplyTitle}>
				<span>{props.author}</span>
				<span className={styles.ReplyMargin16}>{props.date}</span>
				<HandThumbsUp
					className={styles.ReplyMargin16}
					size={'16px'}
				></HandThumbsUp>
				<span className={styles.ReplyMargin8}>{props.recommendCount}</span>
				<span className={styles.ReplyLike}>좋아요</span>
			</div>
			<div className={styles.ReplyContentRoot}>
				<p className={styles.ReplyContent}>{props.content}</p>
			</div>
		</div>
	);
};

const Article = (props) => {
	return (
		<>
			<Header />
			<main className={styles.ArtileRoot}>
				<div className={styles.ArticleTitle}>
					<p>런타임 에러가 왜 뜨는 걸까요?</p>
				</div>
				<div className={styles.ArticleLinkRoot}>
					<NavLink to={'#'} className={styles.ArticleLink}>
						2525번 - 오븐 시계
					</NavLink>
				</div>
				<Reply
					author={'akak4456'}
					date={'10분전'}
					recommendCount={'10'}
					content={'왜 안될까요?'}
				/>
				<Reply
					author={'akak4478'}
					date={'10분전'}
					recommendCount={'10'}
					content={'한번 이렇게 해보세요!'}
				/>
				<ReplyAdd />
			</main>
		</>
	);
};
export default Article;
