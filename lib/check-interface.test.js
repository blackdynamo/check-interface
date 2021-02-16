describe("checkInterface", () => {
  let sut;

  beforeEach(async () => {
    sut = await import("./check-interface");
  });

  it("should handle classes", () => {
    class Logger {
      error() {}
      info() {}
      warn() {}
    }

    expect(sut.checkInterface(new Logger(), Logger)).toBe(true);

    expect(
      sut.checkInterface(
        { info: () => {}, warn() {}, error: function error() {} },
        Logger
      )
    ).toBe(true);
  });

  it("should handle prototype", () => {
    function Logger() {}
    Logger.prototype.error = function () {};
    Logger.prototype.info = () => {};
    Logger.prototype.warn = function warn() {};

    expect(sut.checkInterface(new Logger(), Logger)).toBe(true);

    expect(
      sut.checkInterface(
        { info: () => {}, warn() {}, error: function error() {} },
        Logger
      )
    ).toBe(true);
  });

  it("should handle string[]", () => {
    function Logger() {}
    Logger.prototype.error = function () {};
    Logger.prototype.info = () => {};
    Logger.prototype.warn = function warn() {};

    const names = ["error", "info", "warn"];

    expect(sut.checkInterface(new Logger(), names)).toBe(true);

    expect(
      sut.checkInterface(
        { info: () => {}, warn() {}, error: function error() {} },
        names
      )
    ).toBe(true);
  });
});
