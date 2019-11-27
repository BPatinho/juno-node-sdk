import { JunoEntity } from './JunoEntity';
declare type JunoEntityWithoutId<T extends JunoEntity> = Omit<T, 'id'>;
declare type TypeLike<T> = {
    [K in keyof T]: string | T[K];
};
export interface Notification<T extends JunoEntity> {
    entityId: string;
    entityType: string;
    attributes: TypeLike<JunoEntityWithoutId<T>>;
}
export {};
