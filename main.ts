abstract class DataTable {
    public abstract createTable(): AbstarctTable
    private table: AbstarctTable;

    public open(): void {
        this.table = this.createTable();
        
        this.table.open();
    }

    public read(): void {
        console.log(this.table.read());
    }

    public close(): void {
        this.table.close();
    }
}

class ExcelCreator extends DataTable {
    public createTable(): AbstarctTable {
        return new Excel();
    }
}

class GoogleSheetsCreator extends DataTable {
    public createTable(): AbstarctTable {
        return new GoogleShets();
    }
}

interface AbstarctTable {
    open(): void,
    read(): String,
    close(): void
}

class Excel implements AbstarctTable {
    open(): void {
        console.log('Excel opened!')
    }
    read(): String {
        return 'Reading data from Excel...';
    }
    close(): void {
        console.log('Excel collapsed.');
    }
}

class GoogleShets implements AbstarctTable {
    open(): void {
        console.log('Google Sheets... open new opportunities.');
    }
    read(): String {
        return `[row1, column1], [row2, column1], ...`;
    }
    close(): void {
        console.log('See you soon!')
    }
}

let creator: DataTable = new GoogleSheetsCreator();
creator.open();
creator.read();
creator.close();

creator = new ExcelCreator();
creator.open();
creator.read();
creator.close();