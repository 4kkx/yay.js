import { REST } from './Rest';
import { RequestMethod } from '../util/Types';
import { BlockedUserIdsResponse, BlockedUsersResponse } from '../util/Responses';

export class BlockApi {
	public constructor(private readonly rest: REST) {}

	blockUser = async (user_id: number) => {
		return await this.rest.request({
			method: RequestMethod.POST,
			route: `v1/users/${user_id}/block`,
			requireAuth: true,
		});
	};

	getBlockedUserIds = async (): Promise<BlockedUserIdsResponse> => {
		return await this.rest.request({ method: RequestMethod.GET, route: `v1/users/block_ids`, requireAuth: true });
	};

	getBlockedUsers = async (
		nickname?: string,
		username?: string,
		biography?: string,
		prefecture?: string,
		gender?: number,
		from_id?: number,
	): Promise<BlockedUsersResponse> => {
		const params: Record<string, any> = {};

		if (nickname) params.nickname = nickname;
		if (username) params.username = username;
		if (biography) params.biography = biography;
		if (prefecture) params.prefecture = prefecture;
		if (gender) params.gender = gender;
		if (from_id) params.from_id = from_id;

		return await this.rest.request({
			method: RequestMethod.POST,
			route: `v2/users/blocked`,
			requireAuth: true,
			params: params,
		});
	};

	unblockUser = async (user_id: number) => {
		return await this.rest.request({
			method: RequestMethod.GET,
			route: `v2/users/${user_id}/unblock`,
			requireAuth: true,
		});
	};
}
