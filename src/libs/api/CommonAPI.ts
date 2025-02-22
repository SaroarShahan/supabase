/* eslint-disable @typescript-eslint/ban-types */
import config from '~/config';
import { authService } from '../auth';
import { HttpAuthService } from './httpService';

class CommonAPI {
	constructor(private http: HttpAuthService) {}

	updateStatus({ endpoint, id, recordType, payload }: UpdateStausRequest) {
		return this.http.patch<UpdateStatusResponse>(
			`${endpoint}/${id}/${
				['is_active', 'is_required'].includes(recordType) ? 'update-status' : 'update-availability'
			}/`,
			payload
		);
	}
}

const httpAuthService = new HttpAuthService(config.apiURL, authService);
export const commonAPI = new CommonAPI(httpAuthService);
