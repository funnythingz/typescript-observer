interface IObserver {
    update(): void;
}

interface ISubject {
    observers: Array<Observer>;
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    done(): void;
}

class Observer implements IObserver {

    state: any;

    update(subject: Subject) {
    }
}

class ConcreateObserver extends Observer {
}

class Subject implements ISubject {

    observers: Array<Observer> = [];

    attach(observer: Observer) {
        this.observers.push(observer);
    }

    detach(targetObserver: Observer) {
        var remapObservers: Array<Observer> = this.observers.filter(function(observer, i) {
            return (observer !== targetObserver);
        });

        this.observer = remapObservers;
    }

    notify() {
    }

}

class ConcreateSubject extends Subject {

    subjectState: any;

    getState(): any {
        return this.state;
    }

}
