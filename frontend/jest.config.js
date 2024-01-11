module.exports = {
    roots: ['<rootDir>/frontend'], // テストのルートディレクトリ
    transform: {
        '^.+\\.tsx?$': 'ts-jest', // TypeScriptファイルの変換
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$', // テストファイルの検出
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // モジュールファイルの拡張子
};
