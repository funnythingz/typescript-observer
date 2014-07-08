# typescript-observer

Observer pattern for TypeScript

## Example

```TypeScript
/// <reference path="observer.ts" />
/// <reference path="subject.ts" />
/// <reference path="event.ts" />

class App {

    // create Subject
    jk: JK<HentaiEvent> = new JK<HentaiEvent>();

    constructor() {

        // create Observer
        var omawari1: Omawari<HentaiEvent> = new Omawari<HentaiEvent>();

        // create Event
        var kyahEvent: HentaiEvent = new HentaiEvent('キャー！');

        this.jk.attach(omawari1);
        this.jk.notify(kyahEvent);

        this.jk.detach(omawari1);
        this.jk.notify(kyahEvent);

    }

}

new App();
```

&copy; funnythingz
