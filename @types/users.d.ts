/* eslint-disable @typescript-eslint/no-explicit-any */
interface ProfileResponse {
	id: string;
	first_name?: string;
	last_name?: string;
	email: string;
	is_active: boolean;
}

interface UserUpdatePayload {
	first_name: string;
	last_name: string;
}

interface User {
	id: string;
	first_name?: string;
	last_name?: string;
	email: string;
	is_active: boolean;
}

interface UserCreatePayload {
	first_name?: string;
	last_name?: string;
	email: string;
}

interface UsersPragmas extends PaginateParams {
	email?: string;
	name?: string;
}
