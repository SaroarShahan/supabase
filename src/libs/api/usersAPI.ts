/* eslint-disable @typescript-eslint/ban-types */
import config from '~/config';
import { authService } from '../auth';
import { Common } from './common';
import { HttpAuthService } from './httpService';

class UsersAPI extends Common {
	constructor(private http: HttpAuthService) {
		super(config.itemsPerPage);
	}

	profile() {
		return this.http.get<ProfileResponse>('users/me/');
	}

	updatePassword(current_password: string, new_password: string) {
		const payload = { current_password, new_password, re_new_password: new_password };
		return this.http.post<{}>('users/set_password/', payload);
	}

	users(params: UsersPragmas) {
		const url = this.setURL('users/').params(params).getURL();
		return this.http.get<Pagination<User[]>>(url);
	}

	user(ID: string) {
		return this.http.get<User>(`users/${ID}/`);
	}

	updateUser(ID: string | number, payload: Partial<UserUpdatePayload>) {
		return this.http.put<User>(`users/${ID}/`, payload);
	}

	createUser(payload: UserCreatePayload) {
		return this.http.post<User>('users/', payload);
	}

	userFilteredRoles() {
		return this.http.get<UserRole[]>('filtered-auth-group/');
	}

	logout() {
		return this.http.post<ProfileResponse['permissions']>('token/logout/', {});
	}
}

const httpAuthService = new HttpAuthService(config.apiURL, authService);
export const usersAPI = new UsersAPI(httpAuthService);
