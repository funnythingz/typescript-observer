var TEST;
(function (TEST) {
    chai.should();

    describe("Subject", function () {
        var jkSubject = new JK();

        it("create instance", function () {
            jkSubject.should.be.instanceof(JK);
        });
    });
})(TEST || (TEST = {}));
