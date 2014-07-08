/// <reference path="observer-interface.ts" />

class Omawari<T> implements IObserver<T> {

    update(t: T): T {
        return t;
    }

}
