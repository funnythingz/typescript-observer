var TEST;
(function (TEST) {
    chai.should();

    describe("Observer", function () {
        var omawariObserver = new Omawari();

        it("create instance", function () {
            omawariObserver.should.be.instanceof(Omawari);
        });
    });
})(TEST || (TEST = {}));
