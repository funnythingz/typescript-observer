/// <reference path="observer-interface.ts" />

interface ISubject {
    observers: Array<IObserver>;
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(): void;
}
