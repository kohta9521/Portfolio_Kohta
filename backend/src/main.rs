use warp::Filter;

#[tokio::main]
async fn main() {
    // 単純なGETリクエストを処理するルートを作成します。
    let hello_route = warp::path!("hello" / "world")
        .map(|| warp::reply::html("Hello, World!"));

    // サーバーを起動し、ポート8080でリクエストを待ち受けます。
    warp::serve(hello_route)
        .run(([127, 0, 0, 1], 8080))
        .await;
}