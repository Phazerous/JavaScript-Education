var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DataTable = /** @class */ (function () {
    function DataTable() {
    }
    DataTable.prototype.open = function () {
        this.table = this.createTable();
        this.table.open();
    };
    DataTable.prototype.read = function () {
        console.log(this.table.read());
    };
    DataTable.prototype.close = function () {
        this.table.close();
    };
    return DataTable;
}());
var ExcelCreator = /** @class */ (function (_super) {
    __extends(ExcelCreator, _super);
    function ExcelCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExcelCreator.prototype.createTable = function () {
        return new Excel();
    };
    return ExcelCreator;
}(DataTable));
var GoogleSheetsCreator = /** @class */ (function (_super) {
    __extends(GoogleSheetsCreator, _super);
    function GoogleSheetsCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleSheetsCreator.prototype.createTable = function () {
        return new GoogleShets();
    };
    return GoogleSheetsCreator;
}(DataTable));
var Excel = /** @class */ (function () {
    function Excel() {
    }
    Excel.prototype.open = function () {
        console.log('Excel opened!');
    };
    Excel.prototype.read = function () {
        return 'Reading data from Excel...';
    };
    Excel.prototype.close = function () {
        console.log('Excel collapsed.');
    };
    return Excel;
}());
var GoogleShets = /** @class */ (function () {
    function GoogleShets() {
    }
    GoogleShets.prototype.open = function () {
        console.log('Google Sheets... open new opportunities.');
    };
    GoogleShets.prototype.read = function () {
        return "[row1, column1], [row2, column1], ...";
    };
    GoogleShets.prototype.close = function () {
        console.log('See you soon!');
    };
    return GoogleShets;
}());
var creator = new GoogleSheetsCreator();
creator.open();
creator.read();
creator.close();
creator = new ExcelCreator();
creator.open();
creator.read();
creator.close();
