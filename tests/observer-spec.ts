/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />
/// <reference path="../definitions/should.d.ts" />

/// <reference path="../src/observer-interface.ts" />
/// <reference path="../src/hentai.ts" />

module TEST {

    chai.should();

    describe("Observer", () => {

        it("create instance", () => {
            var omwariObserver: Omawari = new Omawari();
            omawariObserver.should.be.instanceof(Omawari);
        });

    });

    describe("Subject", () => {

        it("create instance", () => {
            var jkSubject: JK = new JK();
            jkSubject.should.be.instanceof(JK);
        });

    });

}
