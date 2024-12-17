import { useCallback } from 'react';
import { useAccessContext } from 'react-access-boundary';

const useIsAllowedPermission = () => {
	const { isAllowedTo } = useAccessContext();
	const isAllowedPermission = useCallback(
		(permission: string | string[]) => {
			if (Array.isArray(permission)) {
				for (const item of permission) {
					if (isAllowedTo(item)) {
						return true;
					}
				}

				return false;
			}

			return isAllowedTo(permission);
		},
		[isAllowedTo]
	);

	return {
		isAllowedPermission,
	};
};

export default useIsAllowedPermission;
