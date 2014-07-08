/// <reference path="observer-interface.ts" />

interface ISubject<T> {
    observers: Array<IObserver<T>>;
    attach(observer: IObserver<T>): void;
    detach(observer: IObserver<T>): void;
    notify(t: T): void;
}
