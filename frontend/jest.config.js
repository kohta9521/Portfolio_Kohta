module.exports = {
    roots: ['<rootDir>/src'], // テストのルートディレクトリ
    transform: {
        '^.+\\.tsx?$': 'ts-jest', // TypeScriptファイルの変換
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$', // テストファイルの検出
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // モジュールファイルの拡張子
};
