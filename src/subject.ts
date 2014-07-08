/// <reference path="subject-interface.ts" />

class JK<T> implements ISubject<T> {

    observers: Array<Omawari<T>> = [];

    attach(observer: Omawari<T>) {
        this.observers.push(observer);
    }

    detach(targetObserver: Omawari<T>) {
        var remapObservers: Array<Omawari<T>> = this.observers.filter(function(observer, i) {
            return (observer !== targetObserver);
        });

        this.observers = remapObservers;
    }

    notify(e: T) {
        this.observers.forEach((observer, index)=> {
            observer.update(e);
        });
    }

}
