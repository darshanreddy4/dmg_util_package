export const excelOperation = (column: string, row: string): string => {
    const input = `in excel file ${column} and ${row}`
    return input.trim().toUpperCase();
}