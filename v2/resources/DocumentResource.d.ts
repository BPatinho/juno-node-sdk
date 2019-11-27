/// <reference types="node" />
import { ReadStream } from 'fs';
import { GetListResponse } from '../responses';
import { BaseResource } from './BaseResource';
import { Document } from '../entities';
export declare class DocumentResource extends BaseResource {
    protected readonly baseUri = "/documents";
    get(token: string): Promise<GetListResponse<{
        documents: Document[];
    }>>;
    getById(id: string, token: string): Promise<Document>;
    uploadDocument(id: string, readStreams: ReadStream[], token: string): Promise<Document>;
}
