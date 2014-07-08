# typescript-observer

Observer pattern for TypeScript

## Usage

```TypeScript
/// <reference path="observer.ts" />
/// <reference path="hentai.ts" />

class App {

    constructor() {

        // create Subject
        jk: JK = new JK();

        // create Observer
        omawari: Omawari = new Omawari();

        // create Event
        hentaiEvent: HentaiEvent = new HentaiEvent();

        jk.attach(omawari);

        jk.notify(hentaiEvent);
    }

}

new App();
```

&copy; funnythingz
