/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />
/// <reference path="../definitions/should.d.ts" />

/// <reference path="../src/app.ts" />

module TEST {

    chai.should();

    describe("JK", () => {

        var jk: JK<HentaiEvent> = new JK<HentaiEvent>();

        var omawari1: Omawari<HentaiEvent> = new Omawari<HentaiEvent>();
        var omawari2: Omawari<HentaiEvent> = new Omawari<HentaiEvent>();

        it("is peace", () => {
            jk.observers.should.be.empty;
        });

        describe("when encounter to kyahEvent", () => {

            var kyahEvent: HentaiEvent = new HentaiEvent('キャー！');

            it("call omawari1", () => {
                jk.attach(omawari1);
                jk.observers.should.be.contain(omawari1);
            });

            it("notify kyahEvent", () => {
                jk.notify(kyahEvent);
                omawari1.state.should.be.equal(kyahEvent);
            });

            it("release omawari1", () => {
                jk.detach(omawari1);
                jk.observers.should.be.not.contain(omawari1);
            });

        });

    });

}
