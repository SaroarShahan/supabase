/* eslint-disable react-hooks/exhaustive-deps */
import { App } from 'antd';
import { useCallback } from 'react';
import { useStoreDispatch } from '~/store';
import { appActions } from '~/store/actions';

export const useMessage = (key: string) => {
	const dispatch = useStoreDispatch();
	const { message } = App.useApp();

	const showMessage = useCallback(
		(msg?: string) => {
			dispatch(appActions.updateRoute('complete'));
			if (msg) {
				message.success({ content: msg, key });
			}
		},

		[dispatch, key]
	);

	const showError = useCallback(
		(error: string) => {
			dispatch(appActions.updateRoute('error'));
			message.error({ content: error, key });
		},
		[dispatch, key]
	);

	/**
	 * This function will be used to handle the error message or the
	 * success message to be shown in the UI. It needs to be called
	 * in the component that will be using the `useMessage` hook.
	 */
	const APIRequest = useCallback(
		(request: () => Promise<string | void>) => {
			dispatch(appActions.updateRoute('start'));
			request()
				.then((msg) => showMessage(msg as string | undefined))
				.catch((err) => showError(err.message));
		},
		[dispatch, showError, showMessage]
	);

	return {
		showMessage,
		showError,
		APIRequest,
	};
};
