/// <reference path="observer.ts" />
/// <reference path="subject.ts" />
/// <reference path="event.ts" />

class App {

    constructor() {

        // create Subject
        var jk: JK<HentaiEvent> = new JK<HentaiEvent>();

        // create Observer
        var omawari: Omawari<HentaiEvent> = new Omawari<HentaiEvent>();

        // create Event
        var hentaiEvent: HentaiEvent = new HentaiEvent('キャー！');

        jk.attach(omawari);

        jk.notify(hentaiEvent);

    }

}

new App();
