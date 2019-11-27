import { BaseResource } from './BaseResource';
import { GetListResponse } from '../responses';
import { EventType, Webhook } from '../entities';
import { CreateWebhookInput, UpdateWebhookInput } from '../inputs';
export declare class NotificationsResource extends BaseResource {
    protected readonly baseUri = "/notifications";
    getWebhooks(token?: string): Promise<GetListResponse<{
        webhooks: NotificationsResource;
    }>>;
    getWebHookById(id: string, token: string): Promise<NotificationsResource>;
    createWebhook({ token, ...payload }: CreateWebhookInput): Promise<Webhook>;
    updateWebhook({ token, id, ...payload }: UpdateWebhookInput): Promise<Webhook>;
    removeWebhook({ token, id }: UpdateWebhookInput): Promise<Webhook>;
    getEventTypes(): Promise<GetListResponse<{
        eventTypes: EventType[];
    }>>;
}
