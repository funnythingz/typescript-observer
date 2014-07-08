/// <reference path="observer-interface.ts" />

class Omawari implements IObserver {

    update() {
    }

}

class JK implements ISubject {

    observers: Array<Omawari> = [];

    attach(observer: Omawari) {
        this.observers.push(observer);
    }

    detach(targetObserver: Omawari) {
        var remapObservers: Array<Omawari> = this.observers.filter(function(observer, i) {
            return (observer !== targetObserver);
        });

        this.observers = remapObservers;
    }

    notify() {
    }

}
