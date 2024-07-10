import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// 콘솔 오류를 예외로 던지도록 설정
if (process.env.NODE_ENV !== 'production') {
    const originalConsoleError = console.error;
    console.error = function (message, ...args) {
        if (/(Failed prop type)/.test(message)) {
            throw new Error(message);
        }
        originalConsoleError.apply(console, [message, ...args]);
    };
}

/**
 * 기본 네모 버튼을 나타냄
 * @param {string} props.type - 버튼 type 지정. ('danger' 또는 'primary' 또는 'default')
 * @param {function} props.onClick - on click 에 동작할 것 지정
 * @param {string} props.text - 버튼에 들어갈 text 지정
 * @returns {JSX.Element} 사용자 이름을 출력하는 JSX 요소
 */
const NormalButton = props => {
    const bgColor = props.type === 'danger' ? 'var(--color-danger)' : props.type === 'primary' ? 'var(--color-primary)' : 'transparent';
    const StyledButton = styled.button`
        padding: 8px;
        background-color: ${bgColor};
        color: white;
        font-size: 14px;
        text-align: center;
    `; 
    return (
        <StyledButton onClick={props.onClick}>
            {props.text}
        </StyledButton>
    )
}

NormalButton.propTypes = {
    type: PropTypes.oneOf(['danger', 'primary', 'default']).isRequired,
};

export default NormalButton;
