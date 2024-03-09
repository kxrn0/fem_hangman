const categories = {
  countries: [
    "日本",
    "アメリカ合衆国",
    "カナダ",
    "イギリス",
    "フランス",
    "ドイツ",
    "イタリア",
    "スペイン",
    "オーストラリア",
    "ブラジル",
    "ロシア",
    "中国",
    "韓国",
    "北朝鮮",
    "インド",
    "メキシコ",
    "インドネシア",
    "南アフリカ",
    "エジプト",
    "ナイジェリア",
    "サウジアラビア",
    "イラン",
    "トルコ",
    "アルゼンチン",
    "カタール",
    "フィリピン",
    "モロッコ",
    "タイ",
    "ウクライナ",
    "ポーランド",
    "カンボジア",
    "カタール",
    "ベトナム",
    "ベルギー",
    "スウェーデン",
    "スイス",
    "ノルウェー",
    "デンマーク",
    "フィンランド",
    "ローマニア",
    "オランダ",
    "ポルトガル",
    "ギリシャ",
    "チリ",
    "チェコ",
    "スロバキア",
    "ハンガリー",
    "アイルランド",
    "クロアチア",
    "エストニア",
  ],
  history: [
    "奈良時代",
    "平安時代",
    "鎌倉時代",
    "室町時代",
    "安土桃山時代",
    "江戸時代",
    "明治維新",
    "大日本帝国",
    "日露戦争",
    "第一次世界大戦",
    "大正時代",
    "昭和時代",
    "日中戦争",
    "太平洋戦争",
    "ポツダム宣言",
    "戦後復興",
    "サンフランシスコ講和条約",
    "日韓基本条約",
    "沖縄返還",
    "経済バブル",
    "バブル崩壊",
    "平成時代",
    "令和時代",
    "坂本龍馬",
    "織田信長",
    "豊臣秀吉",
    "徳川家康",
    "明智光秀",
    "北条氏政",
    "上杉謙信",
    "伊達政宗",
    "毛利元就",
    "島津義弘",
    "武田信玄",
    "上杉景勝",
    "武田勝頼",
    "石田三成",
    "真田幸村",
    "大友宗麟",
    "石田三成",
    "上杉謙信",
    "足利尊氏",
    "足利義満",
    "源義経",
    "源頼朝",
    "坂上田村麻呂",
    "平清盛",
    "源義家",
    "木曽義仲",
    "北条義時",
    "北条政子",
    "源実朝",
    "後醍醐天皇",
    "足利義教",
    "北条時政",
    "後鳥羽天皇",
    "源頼朝",
    "源義朝",
    "天武天皇",
    "聖徳太子",
    "久我妻",
    "武内宿禰",
    "小野篁",
    "坂口安吾",
    "道真",
    "空海",
    "弘法大師",
    "菅原道真",
    "源頼光",
    "源義光",
    "源義家",
    "藤原秀郷",
    "坂上田村麻呂",
    "菅原道真",
    "泰澄",
    "法然",
    "法然上人",
    "親鸞",
    "日蓮",
    "源義経",
    "後白河法皇",
    "橘逸勢",
    "坂本龍馬",
    "岡田以蔵",
    "織田信長",
    "徳川家康",
    "豊臣秀吉",
    "上杉謙信",
    "武田信玄",
    "真田幸村",
    "伊達政宗",
    "島津義弘",
    "毛利元就",
    "大友宗麟",
    "北条氏政",
    "明智光秀",
    "石田三成",
  ],
  medicine: [
    "精神分裂症",
    "血液透析",
    "心臓マッサージ",
    "脳手術",
    "胃カメラ検査",
    "胃腸炎",
    "糖尿病",
    "高血圧",
    "癌治療",
    "骨折治療",
    "肺炎",
    "腹部手術",
    "感染症",
    "手術室",
    "麻酔",
    "血液検査",
    "内視鏡検査",
    "歯科治療",
    "皮膚科",
    "放射線治療",
    "腎臓移植",
    "血液凝固",
    "心臓手術",
    "眼科手術",
    "骨髄移植",
    "整形外科",
    "呼吸器治療",
    "放射線診断",
    "妊娠検査",
    "人工呼吸器",
    "心臓発作",
    "感染症対策",
    "がん検査",
    "生命維持装置",
    "血圧測定",
    "酸素供給",
    "心臓移植",
    "心臓カテーテル検査",
    "腹膜透析",
    "心肺蘇生法",
    "血栓溶解療法",
    "骨粗鬆症治療",
    "経皮的冠動脈形成術",
    "ストレス管理",
    "緊急救命処置",
  ],
  geography: [
    "関東平野",
    "富士山",
    "日本海",
    "四国山地",
    "九州",
    "北海道",
    "琵琶湖",
    "日本アルプス",
    "瀬戸内海",
    "鳥取砂丘",
    "奥尻島",
    "種子島",
    "熊野古道",
    "屋久島",
    "宮島",
    "長崎市",
    "八丈島",
    "鹿児島市",
    "小笠原諸島",
    "那覇市",
    "富士五湖",
    "佐渡島",
    "伊勢神宮",
    "桜島",
    "青森市",
    "箱根",
    "山中湖",
    "名古屋市",
    "高尾山",
    "阿蘇山",
    "福岡市",
    "野球場",
    "京都市",
    "秋田市",
    "天橋立",
    "函館市",
    "千曲川",
    "福島市",
    "日光市",
    "白川郷",
    "福井市",
    "仙台市",
    "軽井沢",
    "箱根湯本",
    "那智勝浦町",
    "北谷町",
    "沖縄市",
    "宮古島",
    "広島市",
    "横浜市",
    "東京都",
    "大阪市",
    "名古屋市",
    "神戸市",
    "札幌市",
    "仙台市",
    "長崎市",
    "金沢市",
    "青森市",
    "奈良市",
    "福岡市",
    "沖縄市",
  ],
  manga: [
    "ゴールデンカムイ",
    "少女終末旅行",
    "約束のネバーランド",
    "コウヤニケモノドウコクス",
    "魔法使いと赤のピルグリム",
    "プルートウ",
    "寄生獣",
    "アイアムアヒーロー",
    "20世紀少年",
    "ビブリオマニア",
    "アキラ",
    "トーキョーグール",
    "ブラム",
    "亜人",
    "マッドキメラワールド",
    "斑丸ケイオス",
    "異世界サムライ",
    "ルリドラゴン",
    "ムジナにの深い",
    "とんがり帽子のアトリエ",
    "ユーベルブラット",
    "FX戦士くるみちゃん",
    "虎鶫",
    "デスノート",
    "ウサギ目社畜科",
    "お兄ちゃんはおしまい!",
    "どく・どく・もり・もり",
    "戦隊大失格",
    "スーパーボールガールズ",
    "創世のタイガ",
    "チ。―地球の運動について―",
    "なぜ僕の世界を誰も覚えていないのか？",
    "影姫",
    "ニューゲーム!",
    "となりの吸血鬼さん",
    "とけだせ!みぞれちゃん",
    "魔王令嬢から始める三国志～董白伝～",
    "レッド",
    "超人X",
    "不滅のあなたへ",
    "私に天使が舞い降りた!",
    "フールナイト",
    "ガヴリールドロップアウト",
    "ジャヒー様はくじけない！",
    "高度に発達した医学は魔法と区別がつかない",
    "東方三月精",
    "ドロヘドロ",
    "黒鉄のヴァルハリアン",
    "骨ドラゴンのマナ娘",
    "魔王城でおやすみ",
    "ハクメイとミコチ",
    "峠鬼",
    "AMONデビルマン黙示録",
    "邪神ちゃんドロップキック",
    "野人転生",
    "けものじへん",
    "オーバーロード",
    "三ツ星カラーズ",
    "濁る瞳で何を願う",
    "デッドデッドデーモンズデデデデデストラクション",
    "月とライカと吸血姫",
    "ヘルク",
    "クレイモア",
    "魔法少女特殊戦あすか",
    "前线任务",
    "ローゼンガーテン・サーガ",
    "コーヒームーン",
    "幼女戦記",
    "アンダーニンジャ",
    "宝石の国",
    "大蛇に嫁いだ娘",
    "タワーダンジョン",
    "バーサス",
    "ゴブリンスレイヤー",
    "戦奏教室",
    "めんや",
    "シャドーハウス",
    "葬送のフリーレン",
    "退魔師と悪魔ちゃん",
    "シャイ",
    "メイドインアビス",
    "大ダーク",
    "任侠転生－異世界のヤクザ姫－",
    "ゲート自衛隊彼の地にて、斯く戦えり",
    "処刑少女の生きる道",
    "天国大魔境",
    "くノ一ツバキの胸の内",
    "処刑された賢者はリッチに転生して侵略戦争を始める",
    "レキヨミ",
    "星使いセレナ",
    "リバイアサン",
    "SKK〜少女たちの世界〜",
    "世界最強の魔女、始めました～私だけ『攻略サイト』を見れる世界で自由に生きます～",
    "メダリスト",
    "ワンパンマン",
    "ベルセルク",
  ],
  chemistry: [
    "ジヒドロゲノキシド",
    "デヒドロゲナーゼ",
    "光吸収分光法",
    "核磁気共鳴分光法",
    "ガスクロマトグラフィー",
    "質量分析法",
    "重合反応",
    "電気泳動",
    "分子生物学",
    "化学反応",
    "有機化学",
    "高速液体クロマトグラフィー",
    "温度制御反応",
    "析出反応",
    "蒸留",
    "加水分解",
    "酸化反応",
    "還元反応",
    "エステル化反応",
    "アミノ酸合成",
    "酸塩基中和反応",
    "カルボン酸反応",
    "ケトン合成",
    "エステル合成",
    "アルドール反応",
    "グリニャール試薬反応",
    "ハロゲン化反応",
    "ニトロ化合物合成",
    "アミン合成",
    "塩基反応",
    "酸反応",
    "触媒反応",
    "分子合成",
    "共有結合",
    "電子移動",
    "酵素反応",
    "薬物代謝",
    "ポリマー化",
    "タンパク質合成",
    "酸化還元反応",
    "複素環化合物合成",
    "配位化学",
    "配位重合反応",
    "有機合成",
    "置換反応",
    "縮合反応",
    "エステル加水分解",
    "塩化反応",
    "水素化反応",
    "加水分解反応",
    "脱水反応",
    "還元環化反応",
  ],
};

export default categories;
