/// <reference path="observer-interface.ts" />

class Omawari<T> implements IObserver<T> {

    state: T;

    update(t: T) {
        this.state = t;
    }

}
