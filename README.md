# typescript-observer

Observer pattern for TypeScript

## Example

```TypeScript
/// <reference path="observer.ts" />
/// <reference path="subject.ts" />
/// <reference path="event.ts" />

class App {

    // とあるJKがいました
    jk: JK<HentaiEvent> = new JK<HentaiEvent>();

    constructor() {

        // 変態事件が起きた！
        var kyahEvent: HentaiEvent = new HentaiEvent('キャー！');

        // おまわりさんがタイミングよくあらわれた！
        var omawari1: Omawari<HentaiEvent> = new Omawari<HentaiEvent>();

        // JKはおまわりさんに助けを求めた！
        this.jk.attach(omawari1);
        this.jk.notify(kyahEvent);

        // JKは落ち着いた！JKはおまわりさんを解放した！
        this.jk.detach(omawari1);
        this.jk.notify(kyahEvent);

    }

}

new App();
```

&copy; funnythingz
