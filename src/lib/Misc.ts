import {
  EmailGrantTokenResponse,
  EmailVerificationPresignedUrlResponse,
  PolicyAgreementsResponse,
  PresignedUrlResponse,
  PresignedUrlsResponse,
  PromotionsResponse,
  VerifyDeviceResponse,
  VipGameRewardUrlResponse,
  WebSocketTokenResponse,
} from '../util/Responses';
import { BaseClient } from '../client/BaseClient';
import { API_VERSION_NAME, ID_CARD_CHECK_URL } from '../util/Constants';

/**
 * **雑多API**
 *
 * @remarks
 * カテゴリ化できないAPIのエンドポイントと連携するためのクラスです
 *
 * @see https://github.com/ekkx/yay.js
 *
 */
export class MiscAPI {
  public constructor(private readonly base: BaseClient) {}

  public acceptPolicyAgreement = async (options: { type: string }) => {
    return await this.base.request({
      method: 'POST',
      route: `v1/users/policy_agreements/${options.type}`,
      requireAuth: true,
    });
  };

  public getEmailGrantToken = async (options: { email: string; code: string }): Promise<EmailGrantTokenResponse> => {
    return await this.base.request({
      method: 'POST',
      route: `apis/v1/apps/yay/email_grant_tokens`,
      json: { email: options.email, code: options.code },
      requireAuth: false,
      baseURL: ID_CARD_CHECK_URL,
    });
  };

  public getEmailVerificationPresignedUrl = async (options: {
    email: string;
    locale: string;
    intent?: string;
  }): Promise<EmailVerificationPresignedUrlResponse> => {
    return await this.base.request({
      method: 'POST',
      route: `v1/email_verification_urls`,
      json: {
        device_uuid: this.deviceUuid,
        email: options.email,
        locale: options.locale,
        intent: options.intent,
      },
      requireAuth: false,
    });
  };

  public getFileUploadPresignedUrls = async (options: { filenames: string[] }): Promise<PresignedUrlsResponse> => {
    return await this.base.request({
      method: 'GET',
      route: `v1/buckets/presigned_urls`,
      params: { 'file_names[]': options.filenames },
      requireAuth: false,
    });
  };

  public getOldFileUploadPresignedUrl = async (options: { videoFilename: string }): Promise<PresignedUrlResponse> => {
    return await this.base.request({
      method: 'GET',
      route: `v1/users/presigned_url`,
      params: { video_file_name: options.videoFilename },
      requireAuth: false,
    });
  };

  public getPolicyAgreements = async (): Promise<PolicyAgreementsResponse> => {
    return await this.base.request({
      method: 'GET',
      route: `v1/users/policy_agreements`,
      requireAuth: false,
    });
  };

  public getPromotions = async (options: { page: number; number?: number }): Promise<PromotionsResponse> => {
    return await this.base.request({
      method: 'GET',
      route: `v1/promotions`,
      params: { page: options.page, number: options.number },
      requireAuth: false,
    });
  };

  public getVipGameRewardUrl = async (options: { deviceType: string }): Promise<VipGameRewardUrlResponse> => {
    return await this.base.request({
      method: 'GET',
      route: `v1/skyfall/url`,
      params: { device_type: options.deviceType },
      requireAuth: false,
    });
  };

  public getWebSocketToken = async (): Promise<WebSocketTokenResponse> => {
    return await this.base.request({
      method: 'GET',
      route: `v1/users/ws_token`,
      requireAuth: false,
    });
  };

  public svc = async (options: { email: string; locale: string }) => {
    return await this.base.request({
      method: 'POST',
      route: (await this.getEmailVerificationPresignedUrl({ email: options.email, locale: options.locale })).url,
      json: { email: options.email },
      requireAuth: false,
      baseURL: '',
    });
  };

  public verifyDevice = async (options: {
    platform: string;
    verificationString: string;
  }): Promise<VerifyDeviceResponse> => {
    return await this.base.request({
      method: 'POST',
      route: `v1/genuine_devices/verify`,
      json: {
        app_version: API_VERSION_NAME,
        platform: options.platform,
        device_uuid: this.deviceUuid,
        verification_string: options.verificationString,
      },
      requireAuth: false,
    });
  };

  // public uploadImage = async (options: { imagePaths: string[]; uploadImageType: string }) => {
  // 	const type: string = options.uploadImageType;

  // 	if (!ImageType[type]) {
  // 		throw new Error("'uploadImageType'が不正です。");
  // 	}

  // 	let _files: Attachment[] = [];

  // 	await Promise.all(
  // 		options.imagePaths.map(async (imagePath, key) => {
  // 			const { filename, extension } = getFilenameAndExtension(imagePath);

  // 			if (!isValidImageFormat(extension)) {
  // 				throw new Error(`画像のフォーマットが不正です。[${filename}]`);
  // 			}

  // 			sharp(imagePath).toBuffer(async (error, file, info) => {
  // 				if (error) {
  // 					throw new Error(error.message);
  // 				} else {
  // 					const resizedImage = info.format === 'gif' ? file : await sharp(file).resize(450).toBuffer();

  // 					const originalAttachment: Attachment = {
  // 						file: file,
  // 						fileName: '',
  // 						originalFileName: filename,
  // 						originalExtension: extension,
  // 						naturalWidth: info.width,
  // 						naturalHeight: info.height,
  // 						isThumb: false,
  // 					};

  // 					const thumbnailAttachment: Attachment = {
  // 						...originalAttachment,
  // 						file: resizedImage,
  // 						isThumb: true,
  // 					};

  // 					const shortUuid: string = uuid().replace(/-/g, '').slice(0, 16);

  // 					originalAttachment.fileName = getHashedFilename(originalAttachment, type, key, shortUuid);
  // 					thumbnailAttachment.fileName = getHashedFilename(thumbnailAttachment, type, key, shortUuid);
  // 				}
  // 			});
  // 		}),
  // 	);
  // };

  /** @ignore */
  private get uuid(): string {
    return this.base.uuid;
  }

  /** @ignore */
  private get deviceUuid(): string {
    return this.base.deviceUuid;
  }
}
