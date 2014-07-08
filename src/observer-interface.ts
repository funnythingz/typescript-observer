interface IObserver<T> {
    update(t: T): T;
}
