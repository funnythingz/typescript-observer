var TEST;
(function (TEST) {
    chai.should();

    describe("JK", function () {
        var jk = new JK();

        var omawari1 = new Omawari();
        var omawari2 = new Omawari();

        it("is peace", function () {
            jk.observers.should.be.empty;
        });

        describe("when encounter to kyahEvent", function () {
            var kyahEvent = new HentaiEvent('キャー！');

            it("call omawari1", function () {
                jk.attach(omawari1);
                jk.observers.should.be.contain(omawari1);
            });

            it("notify kyahEvent", function () {
                jk.notify(kyahEvent);
                omawari1.state.should.be.equal(kyahEvent);
            });

            it("release omawari1", function () {
                jk.detach(omawari1);
                jk.observers.should.be.not.contain(omawari1);
            });
        });
    });
})(TEST || (TEST = {}));
