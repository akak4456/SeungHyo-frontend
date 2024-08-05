import axios from 'axios';

import { commonAPI } from './Common';

export const loginUser = (id, pw, onSuccess) => {
	commonAPI
		.post(
			'/api/v1/auth/login',
			{
				memberId: id,
				memberPw: pw,
			},
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		.then((response) => {
			if (response.data.code === '0') {
				onSuccess(response.data.data);
			}
		})
		.catch((exception) => {
			console.log(exception);
		});
};

export const logoutUser = (accessToken, refreshToken, onSuccess) => {
	commonAPI
		.patch(
			'/api/v1/auth/logout',
			{
				accessToken: accessToken,
				refreshToken: refreshToken,
			},
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		.then((response) => {
			if (response.data.code === '0') {
				onSuccess();
			}
		})
		.catch((exception) => {
			console.log(exception);
		});
};

export const sendEmailCheckCode = (email, onSuccess) => {
	commonAPI
		.post(
			'/api/v1/auth/send-email-check-code',
			{
				toEmail: email,
			},
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		.then((response) => {
			if (response.data.code === '0') {
				onSuccess(response.data.data);
			}
		})
		.catch((exception) => {
			console.log(exception);
		});
};

export const validEmailCheckCode = (email, code, onSuccess) => {
	commonAPI
		.post(
			'/api/v1/auth/valid-email',
			{
				email: email,
				code: code,
			},
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		.then((response) => {
			if (response.data.code === '0') {
				onSuccess(response.data.data);
			}
		})
		.catch((exception) => {
			console.log(exception);
		});
};
