/// 名前を表す型の定義
#[derive(Clone, Debug)]
struct Name(String);

impl Name {
    /// 値のチェックを行った上でNameを作成する
    /// 今回はサンプルのため作成の失敗をString型で表現している
    pub fn new(name: &str) -> Result<Self, String> {
        let size = name.chars().count();
        if size < 1 || size > 10 {
            return Err("名前は10文字以内です".to_string());
        }

        if name.chars().any(|c| !c.is_ascii_alphabetic()) {
            return Err("名前が使用できる文字種はA-Z, a-zです".to_string());
        }
        Ok(Name(name.to_string()))
    }
}

/// 文字列からの変換を表す
/// このtraitの実装をwarp::path::params()関数が要求する
impl std::str::FromStr for Name {
    type Err = String;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        Name::new(s)
    }
}

/// handlerでformatを行うために要求される
impl std::fmt::Display for Name {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)
    }
}

#[test]
fn test_name() {
    let ok_value = "Nrskt";
    assert!(Name::new(ok_value).is_ok());

    let ok_value = "N";
    assert!(Name::new(ok_value).is_ok());

    let ok_value = "NrsktNrskt";
    assert!(Name::new(ok_value).is_ok());

    let ng_value = "0";
    assert!(Name::new(ng_value).is_err());

    let ng_value = "";
    assert!(Name::new(ng_value).is_err());

    let ng_value = "NrsktNrsktN";
    assert!(Name::new(ng_value).is_err());
}
