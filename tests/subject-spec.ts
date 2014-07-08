/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />
/// <reference path="../definitions/should.d.ts" />

/// <reference path="../src/observer.ts" />
/// <reference path="../src/event.ts" />

module TEST {

    chai.should();

    describe("Subject", () => {

        var jkSubject: JK<HentaiEvent> = new JK<HentaiEvent>();

        it("create instance", () => {
            jkSubject.should.be.instanceof(JK);
        });

    });

}
