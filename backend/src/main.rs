use serde::{Deserialize, Serialize};
use warp::{http::Method, Filter};

#[derive(Deserialize, Serialize)]
struct QiitaItem {
    title: String,
    url: String,
}

async fn fetch_qiita_items() -> Result<Vec<QiitaItem>, reqwest::Error> {
    let url = "https://qiita.com/api/v2/users/kohta9521/items";
    let client = reqwest::Client::new();
    let res = client.get(url)
        .header("Authorization", "Bearer 4806320d182c11c731592d93d5812dbe66ef1d13")
        .query(&[("per_page", "5")])
        .send()
        .await?
        .json::<Vec<QiitaItem>>()
        .await?;
    Ok(res)
}

#[tokio::main]
async fn main() {

    let cors = warp::cors()
        .allow_any_origin()
        .allow_headers(vec!["Content-Type", "Authorization"])
        .allow_methods(vec![Method::GET]);


    let qiita_route = warp::path("qiita")
        .and(warp::get())
        .then(|| async {
            let items = fetch_qiita_items().await.unwrap_or_else(|_| Vec::new());
            warp::reply::json(&items)
        })
        .with(cors); // CORS設定を適用

    // サーバーを起動
    warp::serve(qiita_route)
        .run(([127, 0, 0, 1], 8080))
        .await;
}