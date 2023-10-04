import { Settings } from 'http2';
import {
	Activity,
	Application,
	BanWord,
	Bgm,
	ChatRoom,
	ConferenceCall,
	CreateGroupQuota,
	Game,
	Genre,
	GifImageCategory,
	Gift,
	GiftCount,
	GiftingAbility,
	Group,
	GroupCategory,
	GroupSetting,
	GroupUser,
	Message,
	MessageTag,
	MuteKeyword,
	PopularWord,
	Post,
	PostTag,
	PresignedUrl,
	Promotion,
	Shareable,
	SharedUrl,
	StickerPack,
	Survey,
	ThreadInfo,
	User,
	UserSetting,
	Video,
} from './Models';

export interface BlockedUserIdsResponse {
	blockIds: number[];
}
export interface BlockedUsersResponse {
	blockedCount: number;
	lastId: number;
	users: User[];
}
export interface PostResponse {
	id?: number;
	text?: string;
	postType?: string;
	groupId?: number;
	fontSize?: number;
	color?: number;
	likesCount?: number;
	createdAt?: number;
	updatedAt?: number;
	editedAt?: number;
	liked?: boolean;
	likers?: User[];
	tag?: string;
	likersCount?: number;
	repostsCount?: number;
	reposted?: boolean;
	repostable?: boolean;
	reportedCount?: number;
	conversationId?: number;
	inReplyTo?: number;
	inReplyToPost?: Post;
	inReplyToPostCount?: number;
	user?: User;
	mentions?: User[];
	group?: Group;
	conferenceCall?: ConferenceCall;
	attachment?: string;
	attachmentThumbnail?: string;
	attachment_2?: string;
	attachment_2Thumbnail?: string;
	attachment_3?: string;
	attachment_3Thumbnail?: string;
	attachment_4?: string;
	attachment_4Thumbnail?: string;
	attachment_5?: string;
	attachment_5Thumbnail?: string;
	attachment_6?: string;
	attachment_6Thumbnail?: string;
	attachment_7?: string;
	attachment_7Thumbnail?: string;
	attachment_8?: string;
	attachment_8Thumbnail?: string;
	attachment_9?: string;
	attachment_9Thumbnail?: string;
	shareable?: Shareable;
	sharedUrl?: SharedUrl;
	survey?: Survey;
	videos?: Video[];
	giftsCount?: GiftCount[];
	sharedThread?: ThreadInfo;
	threadId?: number;
	thread?: ThreadInfo;
	highlighted?: boolean;
	messageTags?: MessageTag[];
	isFailToSend?: boolean;
}
export interface PostsResponse {
	hasMoreHotPosts?: boolean;
	nextPageValue?: string;
	pinnedPosts?: Post[];
	posts: Post[];
}
export interface BgmsResponse {
	bgm: Bgm[];
}
export interface ConferenceCallResponse {
	conferenceCall?: ConferenceCall;
	conferenceCallUserUuid?: string;
}
export interface UsersByTimestampResponse {
	lastTimestamp?: number;
	users: User[];
}
export interface CallStatusResponse {
	phoneStatus?: boolean;
	roomUrl?: string;
	videoStatus?: boolean;
}
export interface GamesResponse {
	fromId?: number;
	games: Game[];
}
export interface GenresResponse {
	genres: Genre[];
	nextPageValue?: string;
}
export interface UserTimestampResponse {
	time: number;
	ipAddress: string;
	country: string;
}
export interface SnsInfo {
	type: string;
	uid: string;
	nickname: string;
	biography: string;
	profileImage: string;
	gender: string;
}
export interface LoginUserResponse {
	userId?: number;
	username?: string;
	isNew?: boolean;
	snsInfo?: SnsInfo;
	accessToken?: string;
	refreshToken?: string;
	tokenType?: string;
	createdAt?: number;
	expiresIn?: number;
}
export interface ActivitiesResponse {
	activities: Activity[];
	lastTimestamp?: number;
}
export interface UnreadStatusResponse {
	isUnread?: boolean;
}
export interface CreateChatRoomResponse {
	roomId: number;
}
export interface FollowUsersResponse {
	lastFollowId?: number;
	users: User[];
}
export interface GifsDataResponse {
	gifCategories: GifImageCategory[];
}
export interface ChatRoomResponse {
	chat?: ChatRoom;
}
export interface ChatRoomsResponse {
	chatRooms: ChatRoom[];
	nextPageValue?: string;
	pinnedChats?: ChatRoom[];
}
export interface MessageResponse {
	conferenceCall?: ConferenceCall;
	id: number;
}
export interface MessagesResponse {
	messages: Message[];
}
export interface AdditionalSettingsResponse {
	setting?: Settings;
}
export interface NotificationSettingResponse {
	setting: UserSetting;
}
export interface StickerPacksResponse {
	stickerPacks: StickerPack[];
}
export interface TotalChatRequestResponse {
	total?: number;
}
export interface ApplicationConfigResponse {
	app?: Application;
}
export interface BanWordsResponse {
	banWords: BanWord[];
}
export interface PopularWordsResponse {
	popularWords: PopularWord[];
}
export interface GiftingAbilitiesResponse {
	giftingAbilities: GiftingAbility[];
}
export interface GiftsResponse {
	gifts: Gift[];
	nextPageValue?: string;
	totalCount?: number;
}
export interface GiftSendersResponse {
	senders: User[];
	totalSendersCount?: number;
}
export interface CreateGroupResponse {
	groupId?: number;
}
export interface UsersResponse {
	nextPageValue?: string;
	users: User[];
}
export interface GroupCategoriesResponse {
	groupCategories: GroupCategory[];
}
export interface CreateQuotaResponse {
	create: CreateGroupQuota;
}
export interface GroupResponse {
	group?: Group;
}
export interface GroupNotificationSettingsResponse {
	setting?: GroupSetting;
}
export interface GroupsResponse {
	groups?: Group[];
	pinnedGroups?: Group[];
}
export interface GroupUserResponse {
	groupUser?: GroupUser;
}
export interface GroupUsersResponse {
	groupUsers?: GroupUser[];
}
export interface GroupsRelatedResponse {
	groups: Group[];
	nextPageValue?: string;
}
export interface HiddenResponse {
	hiddenUsers: User[];
	limit?: number;
	nextPageValue?: string;
	totalCount?: number;
}
export interface LoginUpdateResponse {
	accessToken: string;
	expiresIn?: number;
	refreshToken: string;
	userId?: number;
	username?: string;
}
export interface TokenResponse {
	accessToken: string;
	createdAt?: number;
	expiresIn?: number;
	id?: number;
	refreshToken: string;
}
export interface RegisterDeviceTokenResponse {
	createdAt?: number;
	id?: number;
	serverDeviceId?: string;
	updatedAt?: number;
	uuid?: string;
}
export interface EmailVerificationPresignedUrlResponse {
	url: string;
}
export interface PresignedUrlsResponse {
	presignedUrls: PresignedUrl;
}
export interface IdCheckerPresignedUrlResponse {
	presignedUrl: string;
}
export interface PresignedUrlResponse {
	presignedUrl: string;
}
export interface PolicyAgreementsResponse {
	latestPrivacyPolicyAgreed?: boolean;
	latestTermsOfUseAgreed?: boolean;
}
export interface PromotionsResponse {
	promotions: Promotion[];
}
export interface VipGameRewardUrlResponse {
	url: string;
}
export interface WebSocketTokenResponse {
	token: string;
}
export interface VerifyDeviceResponse {
	verified?: boolean;
	verifiedAt: string;
}
export interface CreateMuteKeywordResponse {
	hiddenWord: MuteKeyword;
}
export interface MuteKeywordResponse {
	hiddenWords: MuteKeyword[];
}
export interface BookmarkPostResponse {
	bookmarked?: boolean;
}
export interface CreatePostResponse {
	conferenceCall?: ConferenceCall;
	post?: Post;
}
export interface PostLikersResponse {
	lastId?: number;
	users: User[];
}
export interface PostTagsResponse {
	tags: PostTag;
}
export interface LikePostsResponse {
	likeIds: number[];
}
export interface ValidationPostResponse {
	result?: boolean;
}
export interface VoteSurveyResponse {
	survey?: Survey;
}
