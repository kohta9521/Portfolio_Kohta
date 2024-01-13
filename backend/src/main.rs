// 今回のサンプルが必要とする`warp.Filter` traitをimportします。
use warp::Filter;

// 今回tokioのランタイムを利用する
// 非同期ランタイムの上で実行されるためmain関数はasyncをつけて定義します
#[tokio::main]
async fn main() {
    // GET /hello/warp => 200 OK with body "Hello, warp!"
    let hello = warp::path!("hello" / String).map(|name| format!("Hello, {}!", name));

    // Serverの起動
    warp::serve(hello).run(([127, 0, 0, 1], 3030)).await;
}