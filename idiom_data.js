const idiomData = [
    {
        "id": 1,
        "q_num": "1",
        "word": "go on Ving",
        "meaning": "～し続ける",
        "phonetic": "",
        "example": "He went on reading in the living room till late at night.",
        "example_translation": "彼は夜遅くまでずっとリビングで読書をし続けた。",
        "unit": "1"
    },
    {
        "id": 2,
        "q_num": "1",
        "word": "keep on Ving",
        "meaning": "～し続ける",
        "phonetic": "",
        "example": "We kept on walking for over two hours.",
        "example_translation": "私たちは２時間以上歩き続けた。",
        "unit": "1"
    },
    {
        "id": 3,
        "q_num": "2",
        "word": "（all）at once",
        "meaning": "① 一度に いっせいに ② すぐに",
        "phonetic": "",
        "example": "When the teacher came, they all stood up at once.",
        "example_translation": "先生が入ってきたとき、彼らはいっせいに起立した。",
        "unit": "1"
    },
    {
        "id": 4,
        "q_num": "3",
        "word": "stand by ～",
        "meaning": "（苦しんでいる人）～の力になる ～の味方になる",
        "phonetic": "",
        "example": "I will always stand by you whenever you need help.",
        "example_translation": "助けが必要なときはいつでもあなたの力になります。",
        "unit": "1"
    },
    {
        "id": 5,
        "q_num": "3",
        "word": "stand by",
        "meaning": "① 傍観する ② 待機する スタンバイする",
        "phonetic": "",
        "example": "While his brother was attacked, he was just standing by.",
        "example_translation": "兄が襲われている間、彼はただ傍観しているだけだった。",
        "unit": "1"
    },
    {
        "id": 6,
        "q_num": "4",
        "word": "in spite of ～",
        "meaning": "～にもかかわらず ～だけれども",
        "phonetic": "",
        "example": "They went on a hike in spite of the heavy rain.",
        "example_translation": "大雨にもかかわらず、彼らはハイキングにでかけた。",
        "unit": "1"
    },
    {
        "id": 7,
        "q_num": "5",
        "word": "be aware of ～",
        "meaning": "～に気づいている ～を意識している",
        "phonetic": "",
        "example": "The teacher was not aware of the problem among the children.",
        "example_translation": "その先生は児童のなかにある問題を意識していなかった。",
        "unit": "1"
    },
    {
        "id": 8,
        "q_num": "5",
        "word": "be conscious of ～",
        "meaning": "～を意識している",
        "phonetic": "",
        "example": "Some athletes are conscious of the spectators.",
        "example_translation": "一部のスポーツ選手は観客のことを意識している。",
        "unit": "1"
    },
    {
        "id": 9,
        "q_num": "6",
        "word": "wear out",
        "meaning": "①（長期の使用で）すり減る ②（長期の使用で）ボロボロになる 駄目になる",
        "phonetic": "",
        "example": "Your shoes are worn out.",
        "example_translation": "靴がすり減ってしまっているよ。",
        "unit": "1"
    },
    {
        "id": 10,
        "q_num": "7",
        "word": "not so much as V ～",
        "meaning": "～さえしない",
        "phonetic": "",
        "example": "Those children cannot so much as write their own names.",
        "example_translation": "その子供たちは自分の名前さえ書けない。",
        "unit": "1"
    },
    {
        "id": 11,
        "q_num": "7",
        "word": "without so much as Ving ～",
        "meaning": "～さえせずに",
        "phonetic": "",
        "example": "He left the room without so much as saying good-bye.",
        "example_translation": "彼はさよならさえ言わずに部屋を出た。",
        "unit": "1"
    },
    {
        "id": 12,
        "q_num": "8",
        "word": "happen to V",
        "meaning": "たまたまV する もしかしたらV する",
        "phonetic": "",
        "example": "Do you happen to know where she lives?",
        "example_translation": "もしかしたら彼女がどこに住んでいるか知っていますか。",
        "unit": "1"
    },
    {
        "id": 13,
        "q_num": "9",
        "word": "take place",
        "meaning": "①（出来事）が開催される・行われる ② (事故や出来事)が起きる・起こる",
        "phonetic": "",
        "example": "A wedding ceremony will take place at this temple next month.",
        "example_translation": "結婚式が来月この神社で行われます。",
        "unit": "1"
    },
    {
        "id": 14,
        "q_num": "10",
        "word": "fail in ～",
        "meaning": "～に失敗する",
        "phonetic": "",
        "example": "He failed in his attempt to swim across the river.",
        "example_translation": "彼はその川に泳いで渡ろうとして失敗した。",
        "unit": "1"
    },
    {
        "id": 15,
        "q_num": "11",
        "word": "know better than to V ～",
        "meaning": "～するほど愚かではない",
        "phonetic": "",
        "example": "She knows better than to do such a thing in class.",
        "example_translation": "彼女は授業中そのようなことをするほど愚かではない。",
        "unit": "1"
    },
    {
        "id": 16,
        "q_num": "12",
        "word": "there is no Ving",
        "meaning": "～することができない",
        "phonetic": "",
        "example": "There is no telling what will happen tomorrow.",
        "example_translation": "明日何が起きるかはわからない。",
        "unit": "1"
    },
    {
        "id": 17,
        "q_num": "13",
        "word": "be at odds with ～",
        "meaning": "～と争っている",
        "phonetic": "",
        "example": "Since childhood my brother and I have continually been at odds with each other.",
        "example_translation": "兄と私は子どもの頃から, 絶えずお互いに争っている。",
        "unit": "1"
    },
    {
        "id": 18,
        "q_num": "14",
        "word": "far from ～",
        "meaning": "① 決して～ではない ② ～どころか",
        "phonetic": "",
        "example": "The attempt was far from being a success.",
        "example_translation": "その試みは決して成功ではなかった。",
        "unit": "1"
    },
    {
        "id": 19,
        "q_num": "15",
        "word": "fill ～out",
        "meaning": "～を記入する",
        "phonetic": "",
        "example": "Could you fill out the form with the ncecessary information?",
        "example_translation": "必要事項を用紙に記入していただけますか。",
        "unit": "1"
    },
    {
        "id": 20,
        "q_num": "16",
        "word": "refer to ～",
        "meaning": "① ～について述べる ～を参考にする ② ～を表す ～を示す",
        "phonetic": "",
        "example": "He referred to the data during his speech.",
        "example_translation": "スピーチの最中, 彼はそのデータを参考にした。",
        "unit": "1"
    },
    {
        "id": 21,
        "q_num": "17",
        "word": "up to 人",
        "meaning": "～次第である ～に決定権がある",
        "phonetic": "",
        "example": "You can go if you like ― it’s up to you.",
        "example_translation": "行きたければ, 行ってもいいですよ。あなた次第です。",
        "unit": "1"
    },
    {
        "id": 22,
        "q_num": "18",
        "word": "lead a 形容詞 life",
        "meaning": "～な生活を送る",
        "phonetic": "",
        "example": "My father led a happy life and died a peaceful death.",
        "example_translation": "私の父は幸せな生活を送り, 安らかに亡くなった。",
        "unit": "1"
    },
    {
        "id": 23,
        "q_num": "19",
        "word": "it is no use Ving",
        "meaning": "～しても無駄である",
        "phonetic": "",
        "example": "It is no use arguing with him.",
        "example_translation": "彼と議論をしても無駄だ。",
        "unit": "1"
    },
    {
        "id": 24,
        "q_num": "20",
        "word": "be capable of ～",
        "meaning": "～ができる",
        "phonetic": "",
        "example": "This bus is capable of carrying up to 40 people.",
        "example_translation": "このバスは最大40人を乗せることができる。",
        "unit": "1"
    },
    {
        "id": 25,
        "q_num": "21",
        "word": "all of a sudden",
        "meaning": "全く突然に",
        "phonetic": "",
        "example": "All of a sudden, all the lights in the room went out.",
        "example_translation": "全くの突然に, 部屋の明かりが全て消えた。",
        "unit": "1"
    },
    {
        "id": 26,
        "q_num": "22",
        "word": "bear ～ in mind / keep ～ in mind",
        "meaning": "～を心に留めておく ～を覚えておく",
        "phonetic": "",
        "example": "You should keep this advice in mind.",
        "example_translation": "この助言を忘れないようにね。",
        "unit": "1"
    },
    {
        "id": 27,
        "q_num": "23",
        "word": "before long",
        "meaning": "まもなく",
        "phonetic": "",
        "example": "I think he will get home before long.",
        "example_translation": "彼はまもなく帰宅すると思う。",
        "unit": "1"
    },
    {
        "id": 28,
        "q_num": "24",
        "word": "be pleased with ～",
        "meaning": "～に喜んでいる",
        "phonetic": "",
        "example": "She is pleased with her new job.",
        "example_translation": "彼女は新しい仕事に喜んでいる。",
        "unit": "1"
    },
    {
        "id": 29,
        "q_num": "25",
        "word": "call ～ off",
        "meaning": "～を中止する",
        "phonetic": "",
        "example": "The soccer game was called off because of the heavy rain.",
        "example_translation": "大雨のために, サッカーの試合が中止された。",
        "unit": "1"
    },
    {
        "id": 30,
        "q_num": "26",
        "word": "after all（文頭）",
        "meaning": "（そもそも）～だから",
        "phonetic": "",
        "example": "Don’t be so angry with her. After all, she is only a child.",
        "example_translation": "彼女のことをそんなに怒らないで。 そもそも, まだ子供なんだから。",
        "unit": "1"
    },
    {
        "id": 31,
        "q_num": "27",
        "word": "catch up with ～",
        "meaning": "～に追いつく",
        "phonetic": "",
        "example": "I ran fast, so I was able to catch up with him.",
        "example_translation": "私は速く走ったので, 彼に追いつくことができた。",
        "unit": "1"
    },
    {
        "id": 32,
        "q_num": "28",
        "word": "keep up with ～",
        "meaning": "～に遅れないようにする",
        "phonetic": "",
        "example": "I ran fast, but I found it difficult to keep up with him.",
        "example_translation": "私は速く走ったが,彼に遅れないようにすることがなかなかできなかった。",
        "unit": "1"
    },
    {
        "id": 33,
        "q_num": "29",
        "word": "do away with ～",
        "meaning": "～を廃止する",
        "phonetic": "",
        "example": "We should do away with such a law.",
        "example_translation": "そのような法律は廃止するべきだ。",
        "unit": "1"
    },
    {
        "id": 34,
        "q_num": "30",
        "word": "find fault with ～",
        "meaning": "～を非難する ～のあら捜しをする",
        "phonetic": "",
        "example": "She is always finding fault with her husband.",
        "example_translation": "彼女はいつも夫のあら捜しばかりしている。",
        "unit": "1"
    },
    {
        "id": 35,
        "q_num": "31",
        "word": "get ～over",
        "meaning": "～を克服する",
        "phonetic": "",
        "example": "I don’t know how to get over the problem.",
        "example_translation": "その問題をどのように克服すべきか分からない。",
        "unit": "1"
    },
    {
        "id": 36,
        "q_num": "31",
        "word": "get around ～",
        "meaning": "～を避ける",
        "phonetic": "",
        "example": "When a problem arises, he always gets around it.",
        "example_translation": "問題が生じたとき, 彼はいつもそれを避けようとする。",
        "unit": "1"
    },
    {
        "id": 37,
        "q_num": "32",
        "word": "give in （to ～）",
        "meaning": "（～に）屈する 降参する",
        "phonetic": "",
        "example": "We had a heated argument, but eventually I gave in and accepted his suggestion.",
        "example_translation": "私たちは白熱した議論を行ったが, 最終的に私が折れて, 彼の提案を受け入れた。",
        "unit": "1"
    },
    {
        "id": 38,
        "q_num": "33",
        "word": "have respect for ～",
        "meaning": "～を尊重する have regard for ～: ～を尊重する",
        "phonetic": "",
        "example": "The British have a lot of respect for law and order.",
        "example_translation": "英国人は法律と秩序をおおいに尊重する。",
        "unit": "1"
    },
    {
        "id": 39,
        "q_num": "34",
        "word": "in addition to ～",
        "meaning": "～に加えて in addition: さらに",
        "phonetic": "",
        "example": "I have some other income in addition to regular salary.",
        "example_translation": "通常の給料に加えて私には他の収入がある。",
        "unit": "1"
    },
    {
        "id": 40,
        "q_num": "35",
        "word": "in advance",
        "meaning": "前もって",
        "phonetic": "",
        "example": "The restaurant is really popular, so you should reserve a table in advance.",
        "example_translation": "そのレストランは本当に人気なので, 前もって予約しておいたほうがいいですよ。",
        "unit": "1"
    },
    {
        "id": 41,
        "q_num": "36",
        "word": "as good as one’s word",
        "meaning": "約束を守る",
        "phonetic": "",
        "example": "He is always as good as his word.",
        "example_translation": "彼はいつも約束を守る。",
        "unit": "1"
    },
    {
        "id": 42,
        "q_num": "37",
        "word": "be indifferent to ～",
        "meaning": "～に無関心である ～に無頓着である",
        "phonetic": "",
        "example": "Most Japanese people are indifferent to middle eastern countries.",
        "example_translation": "大部分の日本人は中東の国々に無関心である。",
        "unit": "1"
    },
    {
        "id": 43,
        "q_num": "38",
        "word": "at will",
        "meaning": "思いのままに",
        "phonetic": "",
        "example": "You are not allowed to act at will once you join this company.",
        "example_translation": "ひとたび我が社に入社したからには, 思いのままに行動することは許されないよ。",
        "unit": "1"
    },
    {
        "id": 44,
        "q_num": "39",
        "word": "on duty",
        "meaning": "勤務中で",
        "phonetic": "",
        "example": "At the bank there are three guards on duty around the clock.",
        "example_translation": "その銀行では, 四六時中3人の守衛が勤務している。",
        "unit": "1"
    },
    {
        "id": 45,
        "q_num": "40",
        "word": "serve as ～",
        "meaning": "～として役立つ",
        "phonetic": "",
        "example": "This sofa serves as a bed.",
        "example_translation": "このソファはベッドとして役立つ。",
        "unit": "1"
    },
    {
        "id": 46,
        "q_num": "41",
        "word": "come by ～",
        "meaning": "～を手に入れる",
        "phonetic": "",
        "example": "How did he come by such an expensive car?",
        "example_translation": "彼はどうやってそんなに高い車を手に入れたのですか。",
        "unit": "1"
    },
    {
        "id": 47,
        "q_num": "42",
        "word": "come of age",
        "meaning": "成人になる 大人の年齢に達する",
        "phonetic": "",
        "example": "In the Jewish tradition, boys come of age when they are 13.",
        "example_translation": "ユダヤ教のしきたりでは, 男子は13歳のときに成人になる。",
        "unit": "1"
    },
    {
        "id": 48,
        "q_num": "43",
        "word": "blame A for B",
        "meaning": "B の原因はA にあると考えている B の原因はA にあると言う",
        "phonetic": "",
        "example": "The report blames poor safety standards for the accident.",
        "example_translation": "その報告書は事故の原因はずさんな安全基準にあると書かれている。",
        "unit": "1"
    },
    {
        "id": 49,
        "q_num": "44",
        "word": "across from ～",
        "meaning": "～の前に ～の向かい側に",
        "phonetic": "",
        "example": "A convenience store is across from the station.",
        "example_translation": "コンビニが駅の前にある。",
        "unit": "1"
    },
    {
        "id": 50,
        "q_num": "45",
        "word": "in time",
        "meaning": "時間内に 間に合って",
        "phonetic": "",
        "example": "I was able to answer all the questions in time.",
        "example_translation": "私は時間内に全ての問題に答えることができた。",
        "unit": "1"
    },
    {
        "id": 51,
        "q_num": "45",
        "word": "in time for ～",
        "meaning": "～に間に合って",
        "phonetic": "",
        "example": "You will be in time for the last train if you leave here right now.",
        "example_translation": "今すぐにここを出たら, 最終電車に間に合いますよ。",
        "unit": "1"
    },
    {
        "id": 52,
        "q_num": "46",
        "word": "on time",
        "meaning": "時間どおりに",
        "phonetic": "",
        "example": "I managed to get to the destination on time.",
        "example_translation": "どうにか時間ピッタリに目的地にたどり着いた。",
        "unit": "1"
    },
    {
        "id": 53,
        "q_num": "47",
        "word": "behind time",
        "meaning": "時間に遅れて",
        "phonetic": "",
        "example": "The train got to the station one minute behind time.",
        "example_translation": "その電車は1分遅れで駅に到着した。",
        "unit": "1"
    },
    {
        "id": 54,
        "q_num": "47",
        "word": "behind schedule",
        "meaning": "予定より遅れて",
        "phonetic": "",
        "example": "The ceremony began about an hour behind schedule.",
        "example_translation": "その儀式は予定よりも約1時間遅れで始まった。",
        "unit": "1"
    },
    {
        "id": 55,
        "q_num": "48",
        "word": "come to light",
        "meaning": "～が明るみに出る",
        "phonetic": "",
        "example": "All the scandals came to light, and the politician was arrested after all.",
        "example_translation": "全ての不祥事が明るみになり, その政治家は結局逮捕された。",
        "unit": "1"
    },
    {
        "id": 56,
        "q_num": "49",
        "word": "get nowhere",
        "meaning": "どうにもならない 成果が得られない",
        "phonetic": "",
        "example": "I thought the negotiation would get nowhere, so I decided to leave.",
        "example_translation": "私は交渉してもどうにもならないと思ったので, 出ていくことにした。",
        "unit": "1"
    },
    {
        "id": 57,
        "q_num": "50",
        "word": "cure A of B",
        "meaning": "A のB を治療する",
        "phonetic": "",
        "example": "The doctor cured him of his disease.",
        "example_translation": "その医者は彼の病気を治療した。",
        "unit": "1"
    },
    {
        "id": 58,
        "q_num": "51",
        "word": "clear A of B",
        "meaning": "A からB を取り除く",
        "phonetic": "",
        "example": "She is trying hard to clear her mind of doubts.",
        "example_translation": "彼女は心から猜疑心を一掃しようとしている。",
        "unit": "1"
    },
    {
        "id": 59,
        "q_num": "52",
        "word": "What do you say?",
        "meaning": "あなたはどうですか",
        "phonetic": "",
        "example": "Let’s eat out tonight. What do you say?",
        "example_translation": "今晩, 外食しましょう。どうですか。",
        "unit": "1"
    },
    {
        "id": 60,
        "q_num": "53",
        "word": "be supposed to V",
        "meaning": "① V すると思われている ② V することになっている",
        "phonetic": "",
        "example": "She is supposed to be good at cooking.",
        "example_translation": "彼女は料理が得意だと思われている。",
        "unit": "1"
    },
    {
        "id": 61,
        "q_num": "54",
        "word": "carry ～ out",
        "meaning": "～を実行する",
        "phonetic": "",
        "example": "It is easy to make a plan, but it is difficult to carry it out.",
        "example_translation": "計画を立てることは簡単だが, それを実行することは難しい。",
        "unit": "1"
    },
    {
        "id": 62,
        "q_num": "55",
        "word": "in general",
        "meaning": "概して 一般に",
        "phonetic": "",
        "example": "In general, Northern Europeans are taller than Asians.",
        "example_translation": "一般に, 北欧人はアジア人よりも背が高い。",
        "unit": "1"
    },
    {
        "id": 63,
        "q_num": "56",
        "word": "manage to V",
        "meaning": "どうにかV する",
        "phonetic": "",
        "example": "I managed to answer all the questions in time.",
        "example_translation": "どうにか時間内に問題を全て解いた。",
        "unit": "1"
    },
    {
        "id": 64,
        "q_num": "57",
        "word": "point ～ out",
        "meaning": "～を指摘する",
        "phonetic": "",
        "example": "During the meeting he pointed out a serious mistake.",
        "example_translation": "会議中に彼は深刻な間違いを指摘した。",
        "unit": "1"
    },
    {
        "id": 65,
        "q_num": "58",
        "word": "look after ～",
        "meaning": "～の面倒をみる",
        "phonetic": "",
        "example": "Lucy looked after our dog while we were traveling to Europe.",
        "example_translation": "私たちがヨーロッパ旅行に行っている間, ルーシーが犬の面倒を見てくれた。",
        "unit": "1"
    },
    {
        "id": 66,
        "q_num": "59",
        "word": "take over ～",
        "meaning": "～を引き受ける",
        "phonetic": "",
        "example": "I don’t want to take over any more work.",
        "example_translation": "これ以上の仕事を引き受けたくない。",
        "unit": "1"
    },
    {
        "id": 67,
        "q_num": "60",
        "word": "put ～ on",
        "meaning": "① ～を身につける ② ～を塗る",
        "phonetic": "",
        "example": "The boy put on a sweater.",
        "example_translation": "その少年はセーターを着た。",
        "unit": "1"
    },
    {
        "id": 68,
        "q_num": "60",
        "word": "wear ～",
        "meaning": "① ～を身につけている ② ～を塗っている",
        "phonetic": "",
        "example": "The boy wears a sweater and a trouser.",
        "example_translation": "その少年はセーターとズボンを着用している。",
        "unit": "1"
    },
    {
        "id": 69,
        "q_num": "61",
        "word": "take ～ off",
        "meaning": "①～を脱ぐ ～を取る ② （飛行機が）離陸する",
        "phonetic": "",
        "example": "He took his hat off and said hello to me.",
        "example_translation": "彼は帽子を取って, 私に挨拶をした。",
        "unit": "1"
    },
    {
        "id": 70,
        "q_num": "62",
        "word": "bring ～ up",
        "meaning": "～を育てる",
        "phonetic": "",
        "example": "I was born and brought up in Osaka.",
        "example_translation": "私は大阪で生まれ育った。",
        "unit": "1"
    },
    {
        "id": 71,
        "q_num": "63",
        "word": "contrary to ～",
        "meaning": "～とは逆に ～とは違って",
        "phonetic": "",
        "example": "Contrary to popular belief, elephants are not so gentle.",
        "example_translation": "一般的に信じられていること違って, 象はそんなに大人しくない。",
        "unit": "1"
    },
    {
        "id": 72,
        "q_num": "64",
        "word": "in contrast",
        "meaning": "これに対して 反対に",
        "phonetic": "",
        "example": "We harvested 50 tomatoes last year. In contrast, we harvested only 30 this year.",
        "example_translation": "昨年はトマトを50個収穫できた。これに対して今年は30個しか収穫していない。",
        "unit": "1"
    },
    {
        "id": 73,
        "q_num": "65",
        "word": "on the contrary",
        "meaning": "それどころか",
        "phonetic": "",
        "example": "I don’t hate the job. On the contrary, I love it.",
        "example_translation": "その仕事が嫌いなのではない。それどころか, 大好きだ。",
        "unit": "1"
    },
    {
        "id": 74,
        "q_num": "66",
        "word": "keep ～ waiting",
        "meaning": "～を待たせる",
        "phonetic": "",
        "example": "I’m sorry to have kept you waiting so long.",
        "example_translation": "こんなに長い間待たせてしまって申し訳ありません。",
        "unit": "1"
    },
    {
        "id": 75,
        "q_num": "67",
        "word": "be at a loss",
        "meaning": "困っている 途方に暮れている",
        "phonetic": "",
        "example": "I came to an intersection, but since I had no map, I was at a loss.",
        "example_translation": "交差点にやってきたが、地図を持っていなかったので、途方に暮れていた。",
        "unit": "1"
    },
    {
        "id": 76,
        "q_num": "68",
        "word": "add A to B",
        "meaning": "A をB に加える",
        "phonetic": "",
        "example": "Will you add sugar to the coffee ?",
        "example_translation": "コーヒーに砂糖を入れてくれませんか。",
        "unit": "1"
    },
    {
        "id": 77,
        "q_num": "69",
        "word": "have something to do with ～",
        "meaning": "～と何か関係がある",
        "phonetic": "",
        "example": "I have nothing to do with this project.",
        "example_translation": "私はこのプロジェクトと何の関係もない。",
        "unit": "1"
    },
    {
        "id": 78,
        "q_num": "70",
        "word": "as far as ～",
        "meaning": "～まで",
        "phonetic": "",
        "example": "It was a sunny day, so I walked as far as the post office.",
        "example_translation": "天気のよい日だったので , 郵便局まで歩いた。",
        "unit": "1"
    },
    {
        "id": 79,
        "q_num": "71",
        "word": "learn ～ by heart",
        "meaning": "～を暗記する",
        "phonetic": "",
        "example": "I learned the poem by heart when I was in elementary school.",
        "example_translation": "小学校のころ , その詩を暗記した。",
        "unit": "1"
    },
    {
        "id": 80,
        "q_num": "72",
        "word": "engage in ～",
        "meaning": "～に従事する ～に携わる",
        "phonetic": "",
        "example": "A lot of people engaged in this project.",
        "example_translation": "たくさんの人がこのプロジェクトに携わった。",
        "unit": "1"
    },
    {
        "id": 81,
        "q_num": "72",
        "word": "be engaged in ～",
        "meaning": "～に従事している ～に携わっている oneself が脱落したもの",
        "phonetic": "",
        "example": "He was engaged in various sporting activities in high school.",
        "example_translation": "高校時代 , 彼は様々なスポーツ活動に携わっていた。",
        "unit": "1"
    },
    {
        "id": 82,
        "q_num": "73",
        "word": "compare A with B",
        "meaning": "A をB と比較する",
        "phonetic": "",
        "example": "I compared the new computer with the old one.",
        "example_translation": "その新しいコンピュータを古いコンピュータと比較した。",
        "unit": "1"
    },
    {
        "id": 83,
        "q_num": "74",
        "word": "compare A to B",
        "meaning": "① A をB と比較する ② A をB に例える",
        "phonetic": "",
        "example": "Life is often compared to a voyage.",
        "example_translation": "人生はよく航海に例えられる。",
        "unit": "1"
    },
    {
        "id": 84,
        "q_num": "75",
        "word": "compared with ～",
        "meaning": "～と比較すると",
        "phonetic": "",
        "example": "Compared with his father, he is not so sociable.",
        "example_translation": "父親と比較すると , 彼はそんなに社交的ではない。",
        "unit": "1"
    },
    {
        "id": 85,
        "q_num": "76",
        "word": "in comparison with ～",
        "meaning": "～と比較すると",
        "phonetic": "",
        "example": "In comparison with Osaka, our city is really small.",
        "example_translation": "大阪と比較すると , 私たちの都市 は本当に小さい。",
        "unit": "1"
    },
    {
        "id": 86,
        "q_num": "77",
        "word": "play a trick on ～",
        "meaning": "～にいたずらをする",
        "phonetic": "",
        "example": "The boy is always playing a trick on people around him.",
        "example_translation": "その少年はいつも周囲の人のいたずらばかりしている。",
        "unit": "1"
    },
    {
        "id": 87,
        "q_num": "78",
        "word": "in particular",
        "meaning": "特に 中でも",
        "phonetic": "",
        "example": "In general, Asian people work hard. In particular, most Japanese people are workaholics.",
        "example_translation": "一般にアジア人は勤勉だ。 特に日本人の大半は仕事中毒だ。",
        "unit": "1"
    },
    {
        "id": 88,
        "q_num": "79",
        "word": "in vain",
        "meaning": "むだに",
        "phonetic": "",
        "example": "I tried to give up smoking last year, but in vain.",
        "example_translation": "私は昨年禁煙を試みたが無駄だった。",
        "unit": "1"
    },
    {
        "id": 89,
        "q_num": "80",
        "word": "look up to ～",
        "meaning": "～を尊敬する",
        "phonetic": "",
        "example": "He is looked up to by all as their leader.",
        "example_translation": "彼はリーダーとしてみんなから尊敬されている。",
        "unit": "1"
    },
    {
        "id": 90,
        "q_num": "81",
        "word": "look down on ～",
        "meaning": "～を見下す on",
        "phonetic": "",
        "example": "Don't look down on people just because they are poor.",
        "example_translation": "貧しいというだけで人を見下してはならない。",
        "unit": "1"
    },
    {
        "id": 91,
        "q_num": "82",
        "word": "look into ～",
        "meaning": "～(綿密に)を調査する",
        "phonetic": "",
        "example": "The police are looking into the cause of the accident.",
        "example_translation": "警察官がその事故の原因を調査中である。",
        "unit": "1"
    },
    {
        "id": 92,
        "q_num": "83",
        "word": "look over ～",
        "meaning": "（ざっと）～に目を通す",
        "phonetic": "",
        "example": "She looked over the menu and ordered steak.",
        "example_translation": "彼女はメニューに目を通して , ステーキを注文した 。",
        "unit": "1"
    },
    {
        "id": 93,
        "q_num": "84",
        "word": "once in a while",
        "meaning": "時折 たまに",
        "phonetic": "",
        "example": "Once in a while, I go to gym for a workout.",
        "example_translation": "時折 , 私はトレーニングをしにジムへ行く。",
        "unit": "1"
    },
    {
        "id": 94,
        "q_num": "85",
        "word": "on purpose",
        "meaning": "わざと",
        "phonetic": "",
        "example": "I think that he made that mistake on purpose.",
        "example_translation": "彼はわざとその間違いをしたと思う。",
        "unit": "1"
    },
    {
        "id": 95,
        "q_num": "86",
        "word": "pass away",
        "meaning": "（人が）亡くなる",
        "phonetic": "",
        "example": "Last night my grandmother passed away at the age of 79.",
        "example_translation": "昨夜私の祖母 が 79 歳で逝去した。",
        "unit": "1"
    },
    {
        "id": 96,
        "q_num": "87",
        "word": "out of the question",
        "meaning": "問題外 ありえない",
        "phonetic": "",
        "example": "His behavior at the party was out of the question.",
        "example_translation": "彼のそのパーティでの振舞いはありえないものだった。",
        "unit": "1"
    },
    {
        "id": 97,
        "q_num": "88",
        "word": "pick ～ out",
        "meaning": "～を選ぶ",
        "phonetic": "",
        "example": "My girlfriend picked out a tie to go with this suit.",
        "example_translation": "ガールフレンドがこのスーツに似合うネクタイを選んだ 。",
        "unit": "1"
    },
    {
        "id": 98,
        "q_num": "89",
        "word": "lay off ～",
        "meaning": "～を解雇する",
        "phonetic": "",
        "example": "Because of the depression, the company laid off 250 workers last December.",
        "example_translation": "不況のせいで , その企業は昨年の 12 月に 250 人の労働者を解雇した。",
        "unit": "1"
    },
    {
        "id": 99,
        "q_num": "90",
        "word": "show up",
        "meaning": "現れる",
        "phonetic": "",
        "example": "He showed up at the party with his girlfriend.",
        "example_translation": "彼はガールフレンドと一緒にそのパーティに現れた。",
        "unit": "1"
    },
    {
        "id": 100,
        "q_num": "91",
        "word": "in person",
        "meaning": "直接 実際に",
        "phonetic": "",
        "example": "I met him in person.",
        "example_translation": "私は直接彼に会った 。",
        "unit": "1"
    },
    {
        "id": 101,
        "q_num": "91",
        "word": "in the flesh",
        "meaning": "生で 実際に",
        "phonetic": "",
        "example": "He looked much shorter in the flesh than on television.",
        "example_translation": "彼はテレビよりも実際にはるかに背が低く見えた。",
        "unit": "1"
    },
    {
        "id": 102,
        "q_num": "92",
        "word": "lie on one’s back",
        "meaning": "あおむけに寝る",
        "phonetic": "",
        "example": "I like lying on my back on the grass and look ing up at the sky.",
        "example_translation": "草の上に寝転がって , 空を眺めるのが好きだ。",
        "unit": "1"
    },
    {
        "id": 103,
        "q_num": "93",
        "word": "lie on one’s stomach",
        "meaning": "うつぶせになる",
        "phonetic": "",
        "example": "She often lies on her stomach and checks her smart phone.",
        "example_translation": "彼女はうつぶせになって , スマホをチェックすることが多い。",
        "unit": "1"
    },
    {
        "id": 104,
        "q_num": "94",
        "word": "lie on one’s side",
        "meaning": "横向きになって寝る",
        "phonetic": "",
        "example": "She was lying on her side.",
        "example_translation": "彼女は 横向き になって寝ていた。",
        "unit": "1"
    },
    {
        "id": 105,
        "q_num": "95",
        "word": "hand ～ out",
        "meaning": "～を配布する",
        "phonetic": "",
        "example": "I have to hand it in by the end of this month.",
        "example_translation": "月末までにそれを提出しなければならない。",
        "unit": "1"
    },
    {
        "id": 106,
        "q_num": "96",
        "word": "名詞 near by",
        "meaning": "近くの～ / 名詞 close by: 近くの～",
        "phonetic": "",
        "example": "We played catch in a park near by.",
        "example_translation": "私たちは近くの公園でキャッチボールをした。",
        "unit": "1"
    },
    {
        "id": 107,
        "q_num": "97",
        "word": "（close） at hand",
        "meaning": "すぐ近くに",
        "phonetic": "",
        "example": "The mid term exam is close at hand.",
        "example_translation": "中間テストはもうすぐだ。",
        "unit": "1"
    },
    {
        "id": 108,
        "q_num": "98",
        "word": "look a word up in the dictionary",
        "meaning": "辞書で単語を調べる",
        "phonetic": "",
        "example": "Look the word up in the dictionary.",
        "example_translation": "辞書でその単語を調べなさい。",
        "unit": "1"
    },
    {
        "id": 109,
        "q_num": "99",
        "word": "make (both) ends meet",
        "meaning": "収入内でやりくりする",
        "phonetic": "",
        "example": "We have to make ends meet this month.",
        "example_translation": "今月は収入内でやりくりしなければならない。",
        "unit": "1"
    },
    {
        "id": 110,
        "q_num": "100",
        "word": "on a large scale",
        "meaning": "大規模に",
        "phonetic": "",
        "example": "He is doing business on a large scale.",
        "example_translation": "彼は事業を大規模に営んでいる。",
        "unit": "1"
    },
    {
        "id": 111,
        "q_num": "101",
        "word": "persist in ～",
        "meaning": "～に固執する",
        "phonetic": "",
        "example": "He is always persisting in his own views.",
        "example_translation": "彼はいつも自分の意見に固執してばかりいる。",
        "unit": "1"
    },
    {
        "id": 112,
        "q_num": "102",
        "word": "get along with ～",
        "meaning": "～と問題なくやっていく",
        "phonetic": "",
        "example": "He is really hard to please, so it is difficult to get along with him.",
        "example_translation": "本当に気難しい人だから, 彼と問題なくやっていくのは難しいですよ。",
        "unit": "1"
    },
    {
        "id": 113,
        "q_num": "103",
        "word": "run a risk",
        "meaning": "危険を冒す",
        "phonetic": "",
        "example": "I don’t want to run a risk of infection, so I won’t go out today.",
        "example_translation": "私は感染症の危険を冒したくないので,今日は外出しません。",
        "unit": "1"
    },
    {
        "id": 114,
        "q_num": "104",
        "word": "see the sights of ～",
        "meaning": "～を観光する",
        "phonetic": "",
        "example": "I will see the sights of the city this afternoon.",
        "example_translation": "今日の午後 , その都市を観光します。",
        "unit": "1"
    },
    {
        "id": 115,
        "q_num": "105",
        "word": "show ～ off",
        "meaning": "～を見せびらかす ～をひけらかす",
        "phonetic": "",
        "example": "She just visited us to show off her ring.",
        "example_translation": "彼女は自分の指輪を見せびらかすために私たちのところを訪問しただけだ。",
        "unit": "1"
    },
    {
        "id": 116,
        "q_num": "106",
        "word": "hand ～ down",
        "meaning": "① ～を伝える ② ～を受け継がせる",
        "phonetic": "",
        "example": "This watch was handed down to me from my grandfather.",
        "example_translation": "この腕時計は祖父から引き継いだものだ。",
        "unit": "1"
    },
    {
        "id": 117,
        "q_num": "106",
        "word": "pass A down to B",
        "meaning": "A をB に伝える",
        "phonetic": "",
        "example": "This song was passed down from generation to generation.",
        "example_translation": "この歌は世代から世代へと伝えられた。",
        "unit": "1"
    },
    {
        "id": 118,
        "q_num": "107",
        "word": "make use of ～",
        "meaning": "～を利用する",
        "phonetic": "",
        "example": "When you study English, you should make constant use of this dictionary.",
        "example_translation": "英語を勉強するときは , 常にこの辞書利用するべきですよ。",
        "unit": "1"
    },
    {
        "id": 119,
        "q_num": "108",
        "word": "close to ～",
        "meaning": "～に近い",
        "phonetic": "",
        "example": "You should avoid getting too close to the TV screen.",
        "example_translation": "テレビの画面にあまり近づきすぎないようにしたほうがいいですよ。",
        "unit": "1"
    },
    {
        "id": 120,
        "q_num": "109",
        "word": "take the trouble to V",
        "meaning": "わざわざ～する",
        "phonetic": "",
        "example": "Mike, who is always busy, took the trouble to come and see me.",
        "example_translation": "いつも忙しいマイクがわざわざ私に会いにきてくれた。",
        "unit": "1"
    },
    {
        "id": 121,
        "q_num": "110",
        "word": "second to none",
        "meaning": "誰にも負けない 右に出るものはいない",
        "phonetic": "",
        "example": "Bob is second to none in swimming.",
        "example_translation": "水泳でボブの右に出るものはいない。",
        "unit": "1"
    },
    {
        "id": 122,
        "q_num": "111",
        "word": "a great deal of ～/ a good deal of ～",
        "meaning": "大量の～ かなりの～",
        "phonetic": "",
        "example": "This task requires a great deal of concentration.",
        "example_translation": "この仕事にはかなりの集中力を要する。",
        "unit": "1"
    },
    {
        "id": 123,
        "q_num": "112",
        "word": "differ from ～",
        "meaning": "～と異なる",
        "phonetic": "",
        "example": "Let's check why your answers differ from mine.",
        "example_translation": "なぜあなたの答えが私の答えと違うのかを検討してみよう。",
        "unit": "1"
    },
    {
        "id": 124,
        "q_num": "113",
        "word": "by means of ～",
        "meaning": "～を用いて・～によって",
        "phonetic": "",
        "example": "We entered the information by means of the keyboard.",
        "example_translation": "私たちはキーボードを用いてその情報を入力した。",
        "unit": "1"
    },
    {
        "id": 125,
        "q_num": "114",
        "word": "by no means",
        "meaning": "決して～ない",
        "phonetic": "",
        "example": "Your essay is by no means satisfactory.",
        "example_translation": "君の作文は決して満足のいくものではない。",
        "unit": "1"
    },
    {
        "id": 126,
        "q_num": "115",
        "word": "more or less",
        "meaning": "① ほとんど ② およそ",
        "phonetic": "",
        "example": "The road was more or less flat.",
        "example_translation": "道路はほとんど平らだった。",
        "unit": "1"
    },
    {
        "id": 127,
        "q_num": "116",
        "word": "get to one’s feet",
        "meaning": "立ち上がる",
        "phonetic": "",
        "example": "The old man got to his feet with difficulty.",
        "example_translation": "その男性はどうにか立ち上がった。",
        "unit": "1"
    },
    {
        "id": 128,
        "q_num": "117",
        "word": "distinguish A from B",
        "meaning": "A をB と区別する",
        "phonetic": "",
        "example": "What distinguishes human beings from animals?",
        "example_translation": "人間を動物と区別しているものは何ですか。",
        "unit": "1"
    },
    {
        "id": 129,
        "q_num": "118",
        "word": "above all (things)",
        "meaning": "何よりもまず",
        "phonetic": "",
        "example": "Of course I have a lot of things to learn, but above all, I should improve my English skills.",
        "example_translation": "確かに学ぶ べきことはたくさんあるが何よりもまず英語力を上げるべきだ",
        "unit": "1"
    },
    {
        "id": 130,
        "q_num": "119",
        "word": "call for ～",
        "meaning": "～を要求する",
        "phonetic": "",
        "example": "They called for a ban on nuclear tests.",
        "example_translation": "彼らは核実験の禁止を要求した 。",
        "unit": "1"
    },
    {
        "id": 131,
        "q_num": "120",
        "word": "mind your own business",
        "meaning": "余計なお世話だ",
        "phonetic": "",
        "example": "Mind your own business. This has nothing to do with you.",
        "example_translation": "余計なお世話だ。このことはあなたと何の関係もない。",
        "unit": "1"
    },
    {
        "id": 132,
        "q_num": "121",
        "word": "go through ～",
        "meaning": "（困難）を経験する",
        "phonetic": "",
        "example": "People in those days went through a long period of hardships.",
        "example_translation": "その当時の人々は長い苦難の時代を送った。",
        "unit": "1"
    },
    {
        "id": 133,
        "q_num": "121",
        "word": "get through ～",
        "meaning": "（困難）を切り抜ける",
        "phonetic": "",
        "example": "We got through a long period of hardships.",
        "example_translation": "私たちは長い苦難の時代を切り抜けた。",
        "unit": "1"
    },
    {
        "id": 134,
        "q_num": "122",
        "word": "for the sake of ～",
        "meaning": "～のために",
        "phonetic": "",
        "example": "She moved to a warmer place for the sake of her health.",
        "example_translation": "彼女は健康のためにもっと暖かい場所に引越しした。",
        "unit": "1"
    },
    {
        "id": 135,
        "q_num": "123",
        "word": "turn ～ down",
        "meaning": "～を断る・～を却下する",
        "phonetic": "",
        "example": "I was surprised to hear that she had turned down the attractive offer.",
        "example_translation": "彼女がその魅力的な申し出を断ったのを聞いて私は驚いた。",
        "unit": "1"
    },
    {
        "id": 136,
        "q_num": "124",
        "word": "what you call / what is called",
        "meaning": "いわゆる",
        "phonetic": "",
        "example": "This is a picture of what is called a caveman.",
        "example_translation": "これはいわゆる穴居人の絵である。",
        "unit": "1"
    },
    {
        "id": 137,
        "q_num": "125",
        "word": "have ～ in common (with ～)",
        "meaning": "(～と)共通点がある",
        "phonetic": "",
        "example": "The culture of this country has a lot in common with that of ours.",
        "example_translation": "この国の文化は私たちの国の文化と共通点がたくさんある。",
        "unit": "1"
    },
    {
        "id": 138,
        "q_num": "126",
        "word": "agree to ～",
        "meaning": "～に同意する",
        "phonetic": "",
        "example": "Our boss will surely agree to your proposal.",
        "example_translation": "上司はきっと君の提案に同意してくれますよ。",
        "unit": "1"
    },
    {
        "id": 139,
        "q_num": "126",
        "word": "agree with ～",
        "meaning": "～に同意する",
        "phonetic": "",
        "example": "I m afraid I can t agree with you.",
        "example_translation": "残念ながらあなたの考えには同意できません。",
        "unit": "1"
    },
    {
        "id": 140,
        "q_num": "127",
        "word": "at the wheel",
        "meaning": "運転中",
        "phonetic": "",
        "example": "The truck driver must have been asleep at the wheel.",
        "example_translation": "そのトラック運転手は運転中に居眠りしていたにちがいない。",
        "unit": "1"
    },
    {
        "id": 141,
        "q_num": "128",
        "word": "put up with ～",
        "meaning": "（嫌なこと）を我慢する",
        "phonetic": "",
        "example": "I had to put up with the situation.",
        "example_translation": "私はその状況に我慢しなければならなかった。",
        "unit": "1"
    },
    {
        "id": 142,
        "q_num": "129",
        "word": "get caught (up) in a shower",
        "meaning": "通り雨にあう",
        "phonetic": "",
        "example": "I got caught up i n a shower on my way home from school.",
        "example_translation": "学校から帰る途中に通り雨にあった。",
        "unit": "1"
    },
    {
        "id": 143,
        "q_num": "129",
        "word": "get caught (up) in a traffic jam",
        "meaning": "交通渋滞にあう",
        "phonetic": "",
        "example": "I got caught up in a traffic jam on my way to work.",
        "example_translation": "職場へ行く途中に交通渋滞にあった。",
        "unit": "1"
    },
    {
        "id": 144,
        "q_num": "130",
        "word": "pay attention to ～",
        "meaning": "～を注意して見る ～を注意して聞く",
        "phonetic": "",
        "example": "You should pay more attention to what he says.",
        "example_translation": "彼の発言にもっと注意して聞くべきだ。",
        "unit": "1"
    },
    {
        "id": 145,
        "q_num": "131",
        "word": "feel like Ving",
        "meaning": "～したい気がする",
        "phonetic": "",
        "example": "I don't feel like going out today.",
        "example_translation": "今日は外出したい気がしない 。",
        "unit": "1"
    },
    {
        "id": 146,
        "q_num": "132",
        "word": "fall short of ～",
        "meaning": "～に達しない",
        "phonetic": "",
        "example": "His profits fell short of his expectations.",
        "example_translation": "彼の 収益は予想に達しなかった。",
        "unit": "1"
    },
    {
        "id": 147,
        "q_num": "133",
        "word": "make ～ out",
        "meaning": "～がわかる",
        "phonetic": "",
        "example": "I can't make out what the words on that sign say.",
        "example_translation": "その看板に書いてあることが判読できない。",
        "unit": "1"
    },
    {
        "id": 148,
        "q_num": "134",
        "word": "(all) by oneself",
        "meaning": "（他人から離れて）ひとりぼっちで",
        "phonetic": "",
        "example": "The girl is not used to playing all by herself.",
        "example_translation": "その女の子は一人ぼっちで遊ぶのに慣れていない。",
        "unit": "1"
    },
    {
        "id": 149,
        "q_num": "135",
        "word": "insist on Ving",
        "meaning": "～することを言い張る ～するようにしつこく言う",
        "phonetic": "",
        "example": "My daughter insisted on being taken to the amusement park.",
        "example_translation": "私の娘は遊園地に連れて行ってほしいとせがんだ。",
        "unit": "1"
    },
    {
        "id": 150,
        "q_num": "136",
        "word": "in the end",
        "meaning": "最後に ついに",
        "phonetic": "",
        "example": "His hard work paid off in the end.",
        "example_translation": "彼の努力はついに実を結んだ。",
        "unit": "1"
    },
    {
        "id": 151,
        "q_num": "137",
        "word": "stand out",
        "meaning": "① 突き出る ② 目立つ",
        "phonetic": "",
        "example": "A red dress made her stand out.",
        "example_translation": "赤いドレスのため彼女は目立った。",
        "unit": "1"
    },
    {
        "id": 152,
        "q_num": "138",
        "word": "sum up ～",
        "meaning": "～を要約する ～を合計する",
        "phonetic": "",
        "example": "To sum up today's lecture, I will mention these three points.",
        "example_translation": "今日の講義をまとめるために, この 3 つの要点を述べます。",
        "unit": "1"
    },
    {
        "id": 153,
        "q_num": "139",
        "word": "take pains",
        "meaning": "苦労する",
        "phonetic": "",
        "example": "I took great pains to prepare this dinner for you.",
        "example_translation": "君のためにこの夕食を作るのにとても苦労した。",
        "unit": "1"
    },
    {
        "id": 154,
        "q_num": "140",
        "word": "take turns",
        "meaning": "交代する",
        "phonetic": "",
        "example": "We took turns driving our car on our way home.",
        "example_translation": "家に帰る途中 , 私たちは交代で車を運転した。",
        "unit": "1"
    },
    {
        "id": 155,
        "q_num": "141",
        "word": "make up for ～",
        "meaning": "～を償う ～の埋め合わせをする",
        "phonetic": "",
        "example": "I have to make up for the loss right away.",
        "example_translation": "私はすぐに損失の埋め合わせをしなければならない 。",
        "unit": "1"
    },
    {
        "id": 156,
        "q_num": "142",
        "word": "under way",
        "meaning": "進行中で",
        "phonetic": "",
        "example": "The construction of the new subway is under way.",
        "example_translation": "新しい地下鉄の建設が進行中である。",
        "unit": "1"
    },
    {
        "id": 157,
        "q_num": "143",
        "word": "watch one’s step",
        "meaning": "足元に注意する",
        "phonetic": "",
        "example": "Watch your step. The floor is slippery.",
        "example_translation": "足元に注意してください。床が滑りやすくなっています。",
        "unit": "1"
    },
    {
        "id": 158,
        "q_num": "144",
        "word": "What ... for?",
        "meaning": "何のために",
        "phonetic": "",
        "example": "What did they come here for?",
        "example_translation": "彼らは何のためにここへ来たのですか。",
        "unit": "1"
    },
    {
        "id": 159,
        "q_num": "145",
        "word": "cannot V too ～",
        "meaning": "～してV するに越したことはない",
        "phonetic": "",
        "example": "You cannot be too careful in choosing a doctor.",
        "example_translation": "医者を選ぶ際 は,注意するに越したことはない。",
        "unit": "1"
    },
    {
        "id": 160,
        "q_num": "146",
        "word": "at heart",
        "meaning": "心の底では・根は",
        "phonetic": "",
        "example": "He looks so mean and arrogant, but at heart, he’s a good guy.",
        "example_translation": "彼 はとても意地悪で傲慢に見えるがでも根はいいやつなんだ。",
        "unit": "1"
    },
    {
        "id": 161,
        "q_num": "147",
        "word": "peculiar to ～",
        "meaning": "～特有の",
        "phonetic": "",
        "example": "This is a custom peculiar to Japan.",
        "example_translation": "これは日本特有の習慣である。",
        "unit": "1"
    },
    {
        "id": 162,
        "q_num": "148",
        "word": "between you and me",
        "meaning": "ここだけの話だが",
        "phonetic": "",
        "example": "Between you and me, I am going to quit my present job soon.",
        "example_translation": "ここだけの話だが,私はもうすぐ今の仕事を辞めます。",
        "unit": "1"
    },
    {
        "id": 163,
        "q_num": "149",
        "word": "burst into laughter",
        "meaning": "急に笑い出す",
        "phonetic": "",
        "example": "All the people in the hall burst into laughter at the joke.",
        "example_translation": "会場の人が全員,その冗談で急に笑い出した。",
        "unit": "1"
    },
    {
        "id": 164,
        "q_num": "149",
        "word": "burst into tears",
        "meaning": "急に泣き出す",
        "phonetic": "",
        "example": "When the fireworks display began, the baby burst into tears.",
        "example_translation": "花火大会 が始まったとき , その赤ん坊は急に泣き出した。",
        "unit": "1"
    },
    {
        "id": 165,
        "q_num": "150",
        "word": "come up with ～",
        "meaning": "～(考え)を思いつく",
        "phonetic": "",
        "example": "He came up with a good idea after a long discussion.",
        "example_translation": "長い議論の後, 彼は良い考えが思いついた。",
        "unit": "1"
    },
    {
        "id": 166,
        "q_num": "151",
        "word": "考え occur to 人",
        "meaning": "考えが思いつく 考えが心に浮かぶ",
        "phonetic": "",
        "example": "It never occurred to us that he was pretending to know everything.",
        "example_translation": "彼が何もかも知っているふりをしているとは思わなかった。",
        "unit": "1"
    },
    {
        "id": 167,
        "q_num": "152",
        "word": "year by year",
        "meaning": "年ごとに 【注】 変化や成長を表すとき",
        "phonetic": "",
        "example": "My income increased year by year.",
        "example_translation": "私の収入は年ごとに増えた。",
        "unit": "1"
    },
    {
        "id": 168,
        "q_num": "152",
        "word": "year after year",
        "meaning": "くる年もくる年も 毎年毎年 【注】 不変であることを表すとき",
        "phonetic": "",
        "example": "They work at the same factory year after year.",
        "example_translation": "彼らはくる年もくる年も同じ工場で働いている。",
        "unit": "1"
    },
    {
        "id": 169,
        "q_num": "153",
        "word": "set out",
        "meaning": "① 出発する ② ～を始める",
        "phonetic": "",
        "example": "He set out for Mexico over two weeks ago.",
        "example_translation": "彼は 2 週間以上前にメキシコへ行った。",
        "unit": "1"
    },
    {
        "id": 170,
        "q_num": "154",
        "word": "so far",
        "meaning": "今までのところ",
        "phonetic": "",
        "example": "I haven t seen any bears around here so far.",
        "example_translation": "今までにこの辺りで熊を見かけたことはない。",
        "unit": "1"
    },
    {
        "id": 171,
        "q_num": "155",
        "word": "share A with B",
        "meaning": "① A をB と共有する ② A をB に与える ③ A をB に教える",
        "phonetic": "",
        "example": "Thank you for sharing the umbrella with me.",
        "example_translation": "傘に入れてくれてありがとう。",
        "unit": "1"
    },
    {
        "id": 172,
        "q_num": "156",
        "word": "on the whole",
        "meaning": "概して・全体から見れば",
        "phonetic": "",
        "example": "On the whole, the project looks all right now, but in fact, there are some problems.",
        "example_translation": "全体から見れば, その企画は現在順調に進行しているように見えるが, 実際は問題がいくつかある。",
        "unit": "1"
    },
    {
        "id": 173,
        "q_num": "157",
        "word": "① run on ～",
        "meaning": "「～で走る / ～で動く」",
        "phonetic": "",
        "example": "Children depend heavily on their parents for food, clothing, and shelter.",
        "example_translation": "子供は衣食住を親に大きく依存している。",
        "unit": "1"
    },
    {
        "id": 174,
        "q_num": "158",
        "word": "remind 人 of ～",
        "meaning": "人に～を思い出させる",
        "phonetic": "",
        "example": "This picture always reminds me of my grandfather.",
        "example_translation": "この写真を見るといつも私は祖父のことを思い出す。",
        "unit": "1"
    },
    {
        "id": 175,
        "q_num": "159",
        "word": "suffer from ～",
        "meaning": "～で苦しむ・～で悩む",
        "phonetic": "",
        "example": "People in this town are suffering from a severe shortage of water.",
        "example_translation": "この町の人々はひどい水不足に苦しんでいる。",
        "unit": "1"
    },
    {
        "id": 176,
        "q_num": "160",
        "word": "get rid of ～",
        "meaning": "～を処分する・～を取り除く",
        "phonetic": "",
        "example": "We are going to get rid of this motorcycle, because no one in my family uses it any more.",
        "example_translation": "家族の誰もがもはや使っていないので , このバイクを処分するつもりだ。",
        "unit": "1"
    },
    {
        "id": 177,
        "q_num": "161",
        "word": "provide A with B",
        "meaning": "A にB を供給する",
        "phonetic": "",
        "example": "The government provided the victims of the earthquake with food.",
        "example_translation": "政府は地震の被害者に食料を供給した。",
        "unit": "1"
    },
    {
        "id": 178,
        "q_num": "161",
        "word": "supply A with B",
        "meaning": "A にB を供給する",
        "phonetic": "",
        "example": "It has not rained at all for months, so water is in short supply now.",
        "example_translation": "数か月間全く雨が降っていないので , 今では水が供給不足になっている。",
        "unit": "1"
    },
    {
        "id": 179,
        "q_num": "162",
        "word": "do with ～",
        "meaning": "～を処理する",
        "phonetic": "",
        "example": "What have you done with my pencil? It was here a moment ago.",
        "example_translation": "私の鉛筆をどこへやったの。さっきここにあったのに。",
        "unit": "1"
    },
    {
        "id": 180,
        "q_num": "163",
        "word": "put ～ off",
        "meaning": "① ～を延期する・～を先延ばしにする",
        "phonetic": "",
        "example": "We decided to put off the meeting until May 31st.",
        "example_translation": "私たちは 5 月 31 日 までその会議を延期することに決めた。",
        "unit": "1"
    },
    {
        "id": 181,
        "q_num": "164",
        "word": "connect A with B",
        "meaning": "A をB と結びつける・A をB と関連させる",
        "phonetic": "",
        "example": "The city has always been closely connected with art and music.",
        "example_translation": "その都市は昔からずっと芸術や音楽と密接に関係している。",
        "unit": "1"
    },
    {
        "id": 182,
        "q_num": "165",
        "word": "take part in ～",
        "meaning": "～に参加する",
        "phonetic": "",
        "example": "I took part in the soccer game last Sunday.",
        "example_translation": "私はこの前の日曜日サッカーの試合に参加した。",
        "unit": "1"
    },
    {
        "id": 183,
        "q_num": "166",
        "word": "sign up for ～",
        "meaning": "～に参加する ～に加入する ～に申し込む",
        "phonetic": "",
        "example": "I want to sign up for the yoga class.",
        "example_translation": "私はヨガのクラスに参加したい。",
        "unit": "1"
    },
    {
        "id": 184,
        "q_num": "167",
        "word": "be used to Ving",
        "meaning": "～するのに慣れている",
        "phonetic": "",
        "example": "He is not used to speaking in public places.",
        "example_translation": "彼は公共の場で話すことに慣れていない。",
        "unit": "1"
    },
    {
        "id": 185,
        "q_num": "168",
        "word": "on a 形容詞 basis",
        "meaning": "～的に 【注】on a 形容詞 basis: = 副詞",
        "phonetic": "",
        "example": "I’m saving money on a regular basis.",
        "example_translation": "私は定期的に貯金をしている。",
        "unit": "1"
    },
    {
        "id": 186,
        "q_num": "169",
        "word": "make up one’s mind to V",
        "meaning": "V することに決める",
        "phonetic": "",
        "example": "I made up my mind to go to the United States to study English.",
        "example_translation": "私は英語の勉強をするためにアメリカに留学することに決めた。",
        "unit": "1"
    },
    {
        "id": 187,
        "q_num": "170",
        "word": "be familiar with ～",
        "meaning": "～をよく知っている ～になじみがある",
        "phonetic": "",
        "example": "You have to be familiar with technical terms to do medial translations.",
        "example_translation": "医学の翻訳をするためには専門用語をよく知っていなければならない。",
        "unit": "1"
    },
    {
        "id": 188,
        "q_num": "171",
        "word": "be inclined to V",
        "meaning": "① ～したい気がする ② ～する傾向がある",
        "phonetic": "",
        "example": "We were inclined to go drinking.",
        "example_translation": "私たちは飲みに行きたい気持ちだった。",
        "unit": "1"
    },
    {
        "id": 189,
        "q_num": "171",
        "word": "feel inclined to V",
        "meaning": "① ～したい気がする ② ～する傾向がある",
        "phonetic": "",
        "example": "Get in contact with me if you feel inclined.",
        "example_translation": "気が向いたら連絡してください。",
        "unit": "1"
    },
    {
        "id": 190,
        "q_num": "172",
        "word": "keep ～ to oneself",
        "meaning": "～を秘密にしておく",
        "phonetic": "",
        "example": "Can you keep it to yourself?",
        "example_translation": "そのことは秘密にしておいてくれませんか。",
        "unit": "1"
    },
    {
        "id": 191,
        "q_num": "173",
        "word": "get on one’s nerves",
        "meaning": "～の神経に触れる ～をイライラさせる",
        "phonetic": "",
        "example": "The noise from the apartment upstairs got on my nerves.",
        "example_translation": "上のアパートの物音が私をイライラさせた。",
        "unit": "1"
    },
    {
        "id": 192,
        "q_num": "174",
        "word": "as it were",
        "meaning": "いわば",
        "phonetic": "",
        "example": "He is, as it were, a walking dictionary.",
        "example_translation": "彼はいわば生き字引だ。",
        "unit": "1"
    },
    {
        "id": 193,
        "q_num": "175",
        "word": "in itself",
        "meaning": "それ自体",
        "phonetic": "",
        "example": "Studying is not an end in itself.",
        "example_translation": "勉強はそれ自体が目的ではない。",
        "unit": "1"
    },
    {
        "id": 194,
        "q_num": "176",
        "word": "on one’s part",
        "meaning": "～の側での",
        "phonetic": "",
        "example": "Due to a misunderstanding on my part, Tom had to work till late at night.",
        "example_translation": "私の誤解が原因で, トムは夜遅くまで仕事をしなければならなかった。",
        "unit": "1"
    },
    {
        "id": 195,
        "q_num": "177",
        "word": "be anxious about ～",
        "meaning": "～を心配している",
        "phonetic": "",
        "example": "I’m anxious about the results of the exam.",
        "example_translation": "私は試験の結果を心配している。",
        "unit": "1"
    },
    {
        "id": 196,
        "q_num": "177",
        "word": "be anxious for ～",
        "meaning": "～を切望している ～をしきりに求めている",
        "phonetic": "",
        "example": "He’s anxious for the new game.",
        "example_translation": "彼はその新しいゲームをしきりに欲しがっている。",
        "unit": "1"
    },
    {
        "id": 197,
        "q_num": "178",
        "word": "get hold of ～",
        "meaning": "① ～と連絡を取る ② （入手困難なもの）を手に入れる",
        "phonetic": "",
        "example": "I’ve been trying to get hold of you all week.",
        "example_translation": "一週間ずっとあなたと連絡を取ろうとしていたんだ。",
        "unit": "1"
    },
    {
        "id": 198,
        "q_num": "179",
        "word": "be free from ～",
        "meaning": "① ～に囚われていない ～から解放されている ② ～がない",
        "phonetic": "",
        "example": "Social scientists should be free from bias.",
        "example_translation": "社会科学者は偏見に囚われてはいけない。",
        "unit": "1"
    },
    {
        "id": 199,
        "q_num": "180",
        "word": "be tired of ～",
        "meaning": "～にうんざりしている・～に飽き飽きしている",
        "phonetic": "",
        "example": "I’m tired of working in this factory.",
        "example_translation": "私はこの工場で仕事をするのにうんざりしている。",
        "unit": "1"
    },
    {
        "id": 200,
        "q_num": "181",
        "word": "be the case with ～",
        "meaning": "～に当てはまる",
        "phonetic": "",
        "example": "The same is also the case with Japanese people.",
        "example_translation": "同じことが日本人についてもあてはまる。",
        "unit": "1"
    },
    {
        "id": 201,
        "q_num": "181",
        "word": "be true of ～/ be true for ～",
        "meaning": "～に当てはまる",
        "phonetic": "",
        "example": "The same is also true of Japanese people.",
        "example_translation": "同じことが日本人についてもあてはまる。",
        "unit": "1"
    },
    {
        "id": 202,
        "q_num": "182",
        "word": "be bound to V",
        "meaning": "①必ず～する ②～しなければならない",
        "phonetic": "",
        "example": "After signing the contract, he was bound to fulfill its conditions.",
        "example_translation": "契約にサインをしたので, 彼はその条件を満たさなければならなかった。",
        "unit": "1"
    },
    {
        "id": 203,
        "q_num": "183",
        "word": "be carried away",
        "meaning": "夢中になっている 舞い上がっている",
        "phonetic": "",
        "example": "Bob was carried away by gambling.",
        "example_translation": "ボブはギャンブルに夢中になっていた。",
        "unit": "1"
    },
    {
        "id": 204,
        "q_num": "184",
        "word": "in the way of ～",
        "meaning": "～の邪魔になって",
        "phonetic": "",
        "example": "The big obstacle gets in the way of our progress.",
        "example_translation": "その大きな障害が私たちの進行の邪魔になっている。",
        "unit": "1"
    },
    {
        "id": 205,
        "q_num": "185",
        "word": "together with ～",
        "meaning": "～と一緒に",
        "phonetic": "",
        "example": "Please send your photos together with your comments.",
        "example_translation": "コメントを添えて, あなたの写真を送ってください。",
        "unit": "1"
    },
    {
        "id": 206,
        "q_num": "186",
        "word": "get ～ across",
        "meaning": "～を理解させる ～を伝える",
        "phonetic": "",
        "example": "I can’t seem to get my point across to him.",
        "example_translation": "私の言いたいことを彼に理解させることはできないようだ。",
        "unit": "1"
    },
    {
        "id": 207,
        "q_num": "187",
        "word": "make oneself understood in 外国語",
        "meaning": "外国語で自分の言うことをわかってもらう",
        "phonetic": "",
        "example": "I couldn’t make myself understood in English.",
        "example_translation": "私は英語で自分の言うことを理解してもらうことができなかった。",
        "unit": "1"
    },
    {
        "id": 208,
        "q_num": "188",
        "word": "make oneself heard",
        "meaning": "自分の声を届かせる",
        "phonetic": "",
        "example": "I used a microphone to make myself heard.",
        "example_translation": "私は自分の声を届かせるためにマイクを使った。",
        "unit": "1"
    },
    {
        "id": 209,
        "q_num": "189",
        "word": "correspond to ～",
        "meaning": "～に一致する",
        "phonetic": "",
        "example": "The broad lines on the map correspond to roads.",
        "example_translation": "地図上の太線は道路である。",
        "unit": "1"
    },
    {
        "id": 210,
        "q_num": "190",
        "word": "keep an eye on ～",
        "meaning": "～から目を離さない",
        "phonetic": "",
        "example": "Be sure to keep an eye on the suspect.",
        "example_translation": "その容疑者から絶対に目を離すな。",
        "unit": "1"
    },
    {
        "id": 211,
        "q_num": "191",
        "word": "let 人 down",
        "meaning": "人をがっかりさせる",
        "phonetic": "",
        "example": "Don’t let me down as you did the other day.",
        "example_translation": "この前のように私をがっかりさせないでね。",
        "unit": "1"
    },
    {
        "id": 212,
        "q_num": "192",
        "word": "the other way around",
        "meaning": "（前後）逆さまに",
        "phonetic": "",
        "example": "He said that a dog attacked him, but in fact it was the other way around.",
        "example_translation": "彼は犬が自分を襲ったと言ったが, 実は逆だった。",
        "unit": "1"
    },
    {
        "id": 213,
        "q_num": "192",
        "word": "inside out",
        "meaning": "（表裏）逆さまに",
        "phonetic": "",
        "example": "I got my umbrella blown inside out by the wind.",
        "example_translation": "強風で傘が逆さまになった。",
        "unit": "1"
    },
    {
        "id": 214,
        "q_num": "192",
        "word": "upside down",
        "meaning": "（上下）逆さまに",
        "phonetic": "",
        "example": "He put the cup upside down on the kitchen counter to dry.",
        "example_translation": "彼は乾かすためにコップをキッチンカウンターに逆さまに置いた。",
        "unit": "1"
    },
    {
        "id": 215,
        "q_num": "193",
        "word": "vice versa",
        "meaning": "その逆もまた同様である",
        "phonetic": "",
        "example": "Dogs dislike cats and vice versa.",
        "example_translation": "犬は猫が嫌いで, その逆もまた同様だ。",
        "unit": "1"
    },
    {
        "id": 216,
        "q_num": "194",
        "word": "end up Ving",
        "meaning": "結局～する羽目になる・最後には～してしまう",
        "phonetic": "",
        "example": "At first I thought I would finish this job by myself, but I ended up asking other people for help.",
        "example_translation": "初めは1人でこの仕事を終わらせると思っていたが, 結局他人の援助を求めた。",
        "unit": "1"
    },
    {
        "id": 217,
        "q_num": "195",
        "word": "on (the) average",
        "meaning": "平均して",
        "phonetic": "",
        "example": "One person possesses 2.9 credit cards on average.",
        "example_translation": "平均して１人当たり2.9枚のクレジットカードを持っている。",
        "unit": "1"
    },
    {
        "id": 218,
        "q_num": "196",
        "word": "have second thoughts",
        "meaning": "考え直す 再考する",
        "phonetic": "",
        "example": "I had second thoughts about my trip to Vietnam and decided not to go.",
        "example_translation": "私はベトナム旅行を考え直して, 行かないことにした。",
        "unit": "1"
    },
    {
        "id": 219,
        "q_num": "197",
        "word": "pass for ～",
        "meaning": "～として通用する",
        "phonetic": "",
        "example": "You could pass for a famous actress when you get dressed up.",
        "example_translation": "あなたはドレスアップしたら, 有名な女優と言っても通用するだろう。",
        "unit": "1"
    },
    {
        "id": 220,
        "q_num": "198",
        "word": "operate on ～",
        "meaning": "～に手術をする",
        "phonetic": "",
        "example": "My grandmother was operated on last week.",
        "example_translation": "先週, 私の祖母は手術を受けた。",
        "unit": "1"
    },
    {
        "id": 221,
        "q_num": "199",
        "word": "dawn on 人",
        "meaning": "（真相がだんだんと）人に分かってくる",
        "phonetic": "",
        "example": "It dawned on me that nobody trusted me.",
        "example_translation": "誰も私のことを信頼していないということが分かってきた。",
        "unit": "1"
    },
    {
        "id": 222,
        "q_num": "200",
        "word": "by and large",
        "meaning": "概して 概ね",
        "phonetic": "",
        "example": "By and large, high school students these days have a smartphone.",
        "example_translation": "概ね, 最近の高校生はスマートフォン\nを持っている。",
        "unit": "1"
    },
    {
        "id": 223,
        "q_num": "201",
        "word": "out of date",
        "meaning": "時代遅れの 【注】🍎 87 p.17 参照",
        "phonetic": "",
        "example": "This kind of cell phone is ten years out of date.",
        "example_translation": "このタイプの携帯電話は 10 年古い。",
        "unit": "1"
    },
    {
        "id": 224,
        "q_num": "202",
        "word": "on the increase",
        "meaning": "増加している",
        "phonetic": "",
        "example": "The sales of computers is on the increase this year.",
        "example_translation": "コンピュータの売り上げが今年は増加している。",
        "unit": "1"
    },
    {
        "id": 225,
        "q_num": "203",
        "word": "on a diet",
        "meaning": "ダイエット中で",
        "phonetic": "",
        "example": "She has been on a diet for more than three weeks.",
        "example_translation": "彼女は 3 週間前からダイエット中だ。",
        "unit": "1"
    },
    {
        "id": 226,
        "q_num": "204",
        "word": "stand for ～",
        "meaning": "① ～を表す ② ～の略字である",
        "phonetic": "",
        "example": "G.D.P. stands for Gross Domestic Product.",
        "example_translation": "G.D.P.は国民総生産を意味する。",
        "unit": "1"
    },
    {
        "id": 227,
        "q_num": "205",
        "word": "pay a visit to ～",
        "meaning": "～を訪問する",
        "phonetic": "",
        "example": "In Japan, people customarily pay their first visit to a shrine during the New Year holidays.",
        "example_translation": "日本では, 正月休暇中に, 神社に初詣をする習慣があります。",
        "unit": "1"
    },
    {
        "id": 228,
        "q_num": "206",
        "word": "break through ～",
        "meaning": "① ～を突破する ② （強引に）～の突破口を切り開く",
        "phonetic": "",
        "example": "He broke through the difficulty in the end.",
        "example_translation": "彼は最終的にその困難を突破した。",
        "unit": "1"
    },
    {
        "id": 229,
        "q_num": "207",
        "word": "break into ～",
        "meaning": "～に押し入る ～に侵入する",
        "phonetic": "",
        "example": "Someone broke into our house while we were away.",
        "example_translation": "私たちの留守中に誰かが家に侵入した。",
        "unit": "1"
    },
    {
        "id": 230,
        "q_num": "208",
        "word": "break down",
        "meaning": "故障する",
        "phonetic": "",
        "example": "The copy machine has broken down. It needs repairing.",
        "example_translation": "そのコピー機は故障してしまった。\n修理が必要だ。",
        "unit": "1"
    },
    {
        "id": 231,
        "q_num": "209",
        "word": "come across ～",
        "meaning": "① ～に偶然出会う ② ～を偶然見つける",
        "phonetic": "",
        "example": "I came across my grandfather on the street.",
        "example_translation": "私はその通りで祖父に偶然出会った。",
        "unit": "1"
    },
    {
        "id": 232,
        "q_num": "210",
        "word": "in the first place",
        "meaning": "① まず第一に ② そもそも",
        "phonetic": "",
        "example": "You shouldn’t have done that in the first place.",
        "example_translation": "そもそもそんなことをするべきではなかったよ。",
        "unit": "1"
    },
    {
        "id": 233,
        "q_num": "211",
        "word": "a couple of ～",
        "meaning": "① 2 つの～ ② 2, 3 の～",
        "phonetic": "",
        "example": "I have been to New Zealand a couple of times.",
        "example_translation": "私は 2, 3 回ニュージーランドに行ったことがあります。",
        "unit": "1"
    },
    {
        "id": 234,
        "q_num": "212",
        "word": "have ～ at one’s disposal",
        "meaning": "～を人が自由に使える",
        "phonetic": "",
        "example": "Sam has an enormous amount of money at his disposal.",
        "example_translation": "サムは莫大なお金を自由に使うことができる。",
        "unit": "1"
    },
    {
        "id": 235,
        "q_num": "213",
        "word": "prepare for ～",
        "meaning": "～の準備をする",
        "phonetic": "",
        "example": "I prepared for dinner for my family.",
        "example_translation": "私は家族のために夕食の下準備をした。",
        "unit": "1"
    },
    {
        "id": 236,
        "q_num": "213",
        "word": "prepare ～",
        "meaning": "① ～の準備をする",
        "phonetic": "",
        "example": "I prepared dinner for my family.",
        "example_translation": "私は家族のために夕食を作った。",
        "unit": "1"
    },
    {
        "id": 237,
        "q_num": "213",
        "word": "be prepared for ～",
        "meaning": "① ～の準備が整っている",
        "phonetic": "",
        "example": "We are prepared for the worst.",
        "example_translation": "私たちは最悪の事態に備えている。",
        "unit": "1"
    },
    {
        "id": 238,
        "q_num": "214",
        "word": "amount to ～",
        "meaning": "① （総計で）～になる ～に達する ② （結局）～ということになる",
        "phonetic": "",
        "example": "The total expenses of the project amounted to more than one million yen.",
        "example_translation": "その企画の費用総額が100 万円以上になった。",
        "unit": "1"
    },
    {
        "id": 239,
        "q_num": "215",
        "word": "in any case",
        "meaning": "いずれにしても とにかく",
        "phonetic": "",
        "example": "In any case, I am supposed to go there tomorrow.",
        "example_translation": "いずれにしても, 私は明日そこへ行くことになっている。",
        "unit": "1"
    },
    {
        "id": 240,
        "q_num": "216",
        "word": "be subject to ～",
        "meaning": "① ～を受けやすい ② ～に服従している",
        "phonetic": "",
        "example": "Japan is subject to typhoons.",
        "example_translation": "日本は台風を受けやすい。",
        "unit": "1"
    },
    {
        "id": 241,
        "q_num": "217",
        "word": "to ○○○ extent",
        "meaning": "○○○の程度まで",
        "phonetic": "",
        "example": "What he says is true to some extent.",
        "example_translation": "彼の発言はある程度までは真実だ。",
        "unit": "1"
    },
    {
        "id": 242,
        "q_num": "218",
        "word": "in short",
        "meaning": "つまり 要するに",
        "phonetic": "",
        "example": "My boss has handed a pink slip to me. In short, I was fired.",
        "example_translation": "上司は私に解雇通知を手渡した。\n つまり, 私はクビになったのだ。",
        "unit": "1"
    },
    {
        "id": 243,
        "q_num": "219",
        "word": "all night long",
        "meaning": "一晩中",
        "phonetic": "",
        "example": "It was snowing heavily all night long.",
        "example_translation": "一晩中激しく雪が降っていた。",
        "unit": "1"
    },
    {
        "id": 244,
        "q_num": "220",
        "word": "on one’s own",
        "meaning": "①独力で ②自分ひとりで",
        "phonetic": "",
        "example": "Do you think he did the job on his own?",
        "example_translation": "あなたは彼が独力でその仕事をやったと思いますか。",
        "unit": "1"
    },
    {
        "id": 245,
        "q_num": "221",
        "word": "take advantage of ～",
        "meaning": "①～を利用する ②～につけこむ",
        "phonetic": "",
        "example": "I took advantage of every opportunity I had.",
        "example_translation": "私は自分にある全ての機会を利用した。",
        "unit": "1"
    },
    {
        "id": 246,
        "q_num": "222",
        "word": "in case S V～",
        "meaning": "S V する場合に備えて",
        "phonetic": "",
        "example": "You should make a spare of this key in case you lose it.",
        "example_translation": "なくしてはいけないから（なくす場合に備えて）スペアキーを作っておきなさい。",
        "unit": "1"
    },
    {
        "id": 247,
        "q_num": "223",
        "word": "at present",
        "meaning": "現在は",
        "phonetic": "",
        "example": "Generally she lives in New York, but at present she is living in Boston.",
        "example_translation": "普段彼女はニューヨークに住んでいるが, 現在はボストンに暮らしている。",
        "unit": "1"
    },
    {
        "id": 248,
        "q_num": "224",
        "word": "hear from ～",
        "meaning": "～から連絡がある ～から便りがある",
        "phonetic": "",
        "example": "We have not heard from him since he left Japan.",
        "example_translation": "彼が日本を去ってから, 連絡がない。",
        "unit": "1"
    },
    {
        "id": 249,
        "q_num": "225",
        "word": "at the expense of ～",
        "meaning": "～を犠牲にして",
        "phonetic": "",
        "example": "Such an economic program will help the rich at the expense of the poor.",
        "example_translation": "そのような経済計画は貧しい人を犠牲にして, 裕福な人を助けることになる。",
        "unit": "1"
    },
    {
        "id": 250,
        "q_num": "226",
        "word": "be about to V",
        "meaning": "まさに～しようとしている",
        "phonetic": "",
        "example": "I was about to leave home when it began to rain.",
        "example_translation": "家を出ようとしたら, そのとき雨が降り出した。",
        "unit": "1"
    },
    {
        "id": 251,
        "q_num": "227",
        "word": "apart from ～",
        "meaning": "① ～はさておき ～は別として ② ～と切り離して",
        "phonetic": "",
        "example": "Apart from jokes, I’m going to say something serious.",
        "example_translation": "冗談はさておき, 真面目なことを言います。",
        "unit": "1"
    },
    {
        "id": 252,
        "q_num": "227",
        "word": "aside from ～",
        "meaning": "～はさておき ～は別として",
        "phonetic": "",
        "example": "All joking aside, let’s get started now.",
        "example_translation": "冗談はさておいて, もう始めましょう。",
        "unit": "1"
    },
    {
        "id": 253,
        "q_num": "228",
        "word": "be equal to ～",
        "meaning": "① ～と等しい ② ～をする能力がある",
        "phonetic": "",
        "example": "She has recovered quickly. I’m sure she is equal to the job now.",
        "example_translation": "彼女はすぐに回復した。 きっと今その仕事をする力があると思う。",
        "unit": "1"
    },
    {
        "id": 254,
        "q_num": "229",
        "word": "be absorbed in ～",
        "meaning": "～に夢中になっている",
        "phonetic": "",
        "example": "I was absorbed in YouTube last night.",
        "example_translation": "私は昨夜ユーチューブに夢中になっていた。",
        "unit": "1"
    },
    {
        "id": 255,
        "q_num": "229",
        "word": "be (totally) into ～",
        "meaning": "～に(完全に)夢中になっている",
        "phonetic": "",
        "example": "I am totally into YouTube these days.",
        "example_translation": "私は最近ユーチューブに完全に夢中になっている。",
        "unit": "1"
    },
    {
        "id": 256,
        "q_num": "230",
        "word": "date back to ～",
        "meaning": "～までさかのぼる",
        "phonetic": "",
        "example": "Its history is believed to date back to Roman times.",
        "example_translation": "その歴史はローマ時代までさかのぼると信じられている。",
        "unit": "1"
    },
    {
        "id": 257,
        "q_num": "231",
        "word": "do 人a favor",
        "meaning": "人の頼み事をきく",
        "phonetic": "",
        "example": "Can you do me a favor?",
        "example_translation": "私のお願いを聞いてくれますか。",
        "unit": "1"
    },
    {
        "id": 258,
        "q_num": "232",
        "word": "do 人 harm / do 人 damage",
        "meaning": "人に害を与える",
        "phonetic": "",
        "example": "Smoking does people around you a lot of harm.",
        "example_translation": "喫煙は周囲の人に多大な害を与える。",
        "unit": "1"
    },
    {
        "id": 259,
        "q_num": "233",
        "word": "do 人 good",
        "meaning": "人に利益を与える・人のためになる",
        "phonetic": "",
        "example": "Reading a wide variety of books will do you good.",
        "example_translation": "様々な本を読むことはあなたのためになる。",
        "unit": "1"
    },
    {
        "id": 260,
        "q_num": "234",
        "word": "apply A to B",
        "meaning": "A をB に合わせる A をB に適用する",
        "phonetic": "",
        "example": "It is impossible to apply this rule to all the cases.",
        "example_translation": "この規則を全ての事例に当てはめるのは不可能だ。",
        "unit": "1"
    },
    {
        "id": 261,
        "q_num": "234",
        "word": "apply for ～",
        "meaning": "～に申し込む",
        "phonetic": "",
        "example": "A lot of people applied for the job interview.",
        "example_translation": "多くの人がその仕事の面接に申し込んだ。",
        "unit": "1"
    },
    {
        "id": 262,
        "q_num": "235",
        "word": "pull up",
        "meaning": "① (乗り物)が止まる ② (乗り物)を止める",
        "phonetic": "",
        "example": "A car pulled up in front of the hotel.",
        "example_translation": "ホテルの前に車が止まった。",
        "unit": "1"
    },
    {
        "id": 263,
        "q_num": "236",
        "word": "tear ～ up",
        "meaning": "～を引き裂く",
        "phonetic": "",
        "example": "He got angry and tore up the letter from her.",
        "example_translation": "彼は怒って, 彼女からの手紙を引き裂いた。",
        "unit": "1"
    },
    {
        "id": 264,
        "q_num": "237",
        "word": "with a view to Ving",
        "meaning": "～するために",
        "phonetic": "",
        "example": "Andrew came to Japan with a view to learning Japanese literature.",
        "example_translation": "本文学を勉強するために日本にやってきた。",
        "unit": "1"
    },
    {
        "id": 265,
        "q_num": "238",
        "word": "be located in ～",
        "meaning": "～に位置する ～にある",
        "phonetic": "",
        "example": "Our school is located in the center of the city.",
        "example_translation": "私たちの学校は市の中心にある。",
        "unit": "1"
    },
    {
        "id": 266,
        "q_num": "239",
        "word": "expose A to B",
        "meaning": "A をB にさらす A をB に触れさせる",
        "phonetic": "",
        "example": "It can be dangerous to expose your skin to strong sunshine.",
        "example_translation": "肌を強い日光にさらすことは場合によっては危険だ。",
        "unit": "1"
    },
    {
        "id": 267,
        "q_num": "240",
        "word": "at first sight",
        "meaning": "一見したところ",
        "phonetic": "",
        "example": "At first sight this game may sound exciting, but you will find it boring.",
        "example_translation": "一見したところ, このゲームは面白そうだが, つまらないものだと分かりますよ。",
        "unit": "1"
    },
    {
        "id": 268,
        "q_num": "241",
        "word": "to one’s taste",
        "meaning": "～の好みに合っている",
        "phonetic": "",
        "example": "She gave me a necktie which was completely to my taste.",
        "example_translation": "彼女は私の好みにピッタリ合っているネクタイをくれた。",
        "unit": "1"
    },
    {
        "id": 269,
        "q_num": "242",
        "word": "to the effect that S V ～",
        "meaning": "～という趣旨の ～という内容の",
        "phonetic": "",
        "example": "I got a letter to the effect that he would resign.",
        "example_translation": "私は彼が辞職するという内容の手紙を受け取った。",
        "unit": "1"
    },
    {
        "id": 270,
        "q_num": "243",
        "word": "as of ～",
        "meaning": "～現在",
        "phonetic": "",
        "example": "The ruling party has secured 50 seats as of 5 o’clock.",
        "example_translation": "与党は 5 時現在で 50 議席確保している。",
        "unit": "1"
    },
    {
        "id": 271,
        "q_num": "244",
        "word": "blow ～ up",
        "meaning": "① ～を爆破させる ② ～が爆破する",
        "phonetic": "",
        "example": "They blew up the bridge because it was about to collapse.",
        "example_translation": "崩壊しかけていたので, 彼らはその橋を爆破した。",
        "unit": "1"
    },
    {
        "id": 272,
        "q_num": "245",
        "word": "bring ～ home to 人",
        "meaning": "～を人に痛感させる",
        "phonetic": "",
        "example": "The movie brought home to me the realities of the war.",
        "example_translation": "その映画は私に戦争の現実を痛感させた。",
        "unit": "1"
    },
    {
        "id": 273,
        "q_num": "246",
        "word": "S come home to 人",
        "meaning": "S が人に痛感する",
        "phonetic": "",
        "example": "The realities of the war came home to me when I saw the movie.",
        "example_translation": "その映画を見たとき, 戦争の現実が私に痛感した。",
        "unit": "1"
    },
    {
        "id": 274,
        "q_num": "247",
        "word": "come near to Ving / come close to Ving",
        "meaning": "もう少しで～しそうになる",
        "phonetic": "",
        "example": "I came close to being hit by the car.",
        "example_translation": "私はもう少しで車に轢かれるところだった。",
        "unit": "1"
    },
    {
        "id": 275,
        "q_num": "248",
        "word": "come to terms with ～",
        "meaning": "① （不快なことや困難なこと）を受け入れる",
        "phonetic": "",
        "example": "She had to come to terms with the reality and get over the shock.",
        "example_translation": "彼女は現実を受け入れて, ショックを克服しなければならなかった",
        "unit": "1"
    },
    {
        "id": 276,
        "q_num": "249",
        "word": "dispose of ～",
        "meaning": "～を処分する",
        "phonetic": "",
        "example": "We are going to dispose of all the old furniture in our house.",
        "example_translation": "家の中にある古い家具を全て処分するつもりだ。",
        "unit": "1"
    },
    {
        "id": 277,
        "q_num": "250",
        "word": "go out of one’s way to V",
        "meaning": "わざわざV する",
        "phonetic": "",
        "example": "He went out of his way to give us some advice.",
        "example_translation": "彼はわざわざ私たちにいくつか助言をしてくれた。",
        "unit": "1"
    },
    {
        "id": 278,
        "q_num": "251",
        "word": "allow for ～",
        "meaning": "～を考慮する ～を見越す",
        "phonetic": "",
        "example": "We should allow for the possibility of heavy traffic when we estimate travel time.",
        "example_translation": "移動時間を推定するには, 渋滞の可能性を考慮するべきだ。",
        "unit": "1"
    },
    {
        "id": 279,
        "q_num": "252",
        "word": "in proportion to ～",
        "meaning": "～に比例して 【注】 proportion は「比率」「割合」の意味。",
        "phonetic": "",
        "example": "The wages should be paid in proportion to the work done.",
        "example_translation": "賃金はやった仕事に比例して支払われるべきだ。",
        "unit": "1"
    },
    {
        "id": 280,
        "q_num": "253",
        "word": "in return for ～",
        "meaning": "～のお返しに ～と引き換えに",
        "phonetic": "",
        "example": "He received a ticket in return for the money.",
        "example_translation": "彼はお金と引き換えにチケットを受け取った。",
        "unit": "1"
    },
    {
        "id": 281,
        "q_num": "254",
        "word": "needless to say",
        "meaning": "言うまでもなく",
        "phonetic": "",
        "example": "Needless to say, I don’t want to work here any more.",
        "example_translation": "言うまでもなく, もはやここでは働きたくない。",
        "unit": "1"
    },
    {
        "id": 282,
        "q_num": "255",
        "word": "it goes without saying that S V",
        "meaning": "S V なのは言うまでもない",
        "phonetic": "",
        "example": "It goes without saying that honesty is the best policy.",
        "example_translation": "正直が最善の策であることは言うまでもない。",
        "unit": "1"
    },
    {
        "id": 283,
        "q_num": "256",
        "word": "be acquainted with ～",
        "meaning": "～と知り合いである",
        "phonetic": "",
        "example": "I have been acquainted with him for more than twenty years.",
        "example_translation": "彼とは 20 年以上の知り合いだ。",
        "unit": "1"
    },
    {
        "id": 284,
        "q_num": "257",
        "word": "make progress",
        "meaning": "進歩する",
        "phonetic": "",
        "example": "She has recently made great progress in German.",
        "example_translation": "彼女は最近ドイツ語がすごく進歩した。",
        "unit": "1"
    },
    {
        "id": 285,
        "q_num": "258",
        "word": "on top of that",
        "meaning": "さらに ← on top of that",
        "phonetic": "",
        "example": "I was really tired. On top of that, I was drunk.",
        "example_translation": "私は本当に疲れていた。 さらに酔っぱらっていた",
        "unit": "1"
    },
    {
        "id": 286,
        "q_num": "259",
        "word": "in the long run",
        "meaning": "長い目で見ると 結局",
        "phonetic": "",
        "example": "I believe that your effort will pay in the long run.",
        "example_translation": "あなたの努力は長い目で見ると報われると思います。",
        "unit": "1"
    },
    {
        "id": 287,
        "q_num": "260",
        "word": "now (that) S V",
        "meaning": "今はもう～なので",
        "phonetic": "",
        "example": "Now that you are a high school student, you must stop this childish behavior.",
        "example_translation": "もう高校生なので, このような子供じみたふるまいを止めなさい。",
        "unit": "1"
    },
    {
        "id": 288,
        "q_num": "261",
        "word": "be suitable for ～",
        "meaning": "～に適している ～にふさわしい",
        "phonetic": "",
        "example": "His speech was suitable for the occasion.",
        "example_translation": "彼のスピーチはその場にふさわしいものだった。",
        "unit": "1"
    },
    {
        "id": 289,
        "q_num": "262",
        "word": "by accident",
        "meaning": "偶然に",
        "phonetic": "",
        "example": "We didn’t plan it. We met by accident.",
        "example_translation": "私たちは計画していたのではない。偶然出会ったのだ。",
        "unit": "1"
    },
    {
        "id": 290,
        "q_num": "263",
        "word": "give way (to～)",
        "meaning": "（～に）譲る （～に）屈する",
        "phonetic": "",
        "example": "I had to give way to a big truck in front of me.",
        "example_translation": "私は前にいた大型トラックに譲歩しなければならなかった。",
        "unit": "1"
    },
    {
        "id": 291,
        "q_num": "264",
        "word": "go to sleep",
        "meaning": "眠りにつく",
        "phonetic": "",
        "example": "I went to sleep at nine o’clock, and woke up at six.",
        "example_translation": "私は 9 時に就寝し, 6 時に目が覚めた。",
        "unit": "1"
    },
    {
        "id": 292,
        "q_num": "264",
        "word": "fall asleep",
        "meaning": "（うっかり）眠る",
        "phonetic": "",
        "example": "The class was so boring that I fell asleep.",
        "example_translation": "授業がとても退屈だったので, 寝てしまった。",
        "unit": "1"
    },
    {
        "id": 293,
        "q_num": "265",
        "word": "live from hand to mouth",
        "meaning": "その日暮らしをする",
        "phonetic": "",
        "example": "In those days we lived from hand to mouth.",
        "example_translation": "その当時, 私たちはその日暮らしをしていた。",
        "unit": "1"
    },
    {
        "id": 294,
        "q_num": "266",
        "word": "watch out",
        "meaning": "気をつける",
        "phonetic": "",
        "example": "Watch out. There is a car coming.",
        "example_translation": "気をつけろ。 車が来ているぞ。",
        "unit": "1"
    },
    {
        "id": 295,
        "q_num": "267",
        "word": "in haste",
        "meaning": "急いで",
        "phonetic": "",
        "example": "Written in haste, this essay is full of mistakes.",
        "example_translation": "急いで書かれたので, この作文は間違いだらけだ。",
        "unit": "1"
    },
    {
        "id": 296,
        "q_num": "268",
        "word": "in the company of ～",
        "meaning": "～と一緒にいる",
        "phonetic": "",
        "example": "I feel relaxed in the company of him.",
        "example_translation": "彼と一緒にいると落ち着く。",
        "unit": "1"
    },
    {
        "id": 297,
        "q_num": "269",
        "word": "hold ～ back",
        "meaning": "（前に出ようとするもの）を抑える・阻止する",
        "phonetic": "",
        "example": "We found it difficult to hold back our tears at the funeral.",
        "example_translation": "葬式ではなかなか涙をこらえることができなかった。",
        "unit": "1"
    },
    {
        "id": 298,
        "q_num": "270",
        "word": "hold one’s tongue",
        "meaning": "黙る",
        "phonetic": "",
        "example": "Hold your tongue and listen to me.",
        "example_translation": "黙って, 私の言うことを聞きなさい。",
        "unit": "1"
    },
    {
        "id": 299,
        "q_num": "271",
        "word": "keep track of ～",
        "meaning": "～を追跡する ～の動向を把握する ～を見失わない",
        "phonetic": "",
        "example": "Be sure to keep track of his movements.",
        "example_translation": "彼の動きを見失わないように。",
        "unit": "1"
    },
    {
        "id": 300,
        "q_num": "271",
        "word": "lose track of ～",
        "meaning": "～を見失う",
        "phonetic": "",
        "example": "I lost track of the man in the woods.",
        "example_translation": "林の中でその男を見失った。",
        "unit": "1"
    },
    {
        "id": 301,
        "q_num": "272",
        "word": "take one’s time",
        "meaning": "（急がず時間をかけて）ゆっくりやる",
        "phonetic": "",
        "example": "Take your time. I’m not in a hurry.",
        "example_translation": "ゆっくりやって下さい。 私は急いでいません。",
        "unit": "1"
    },
    {
        "id": 302,
        "q_num": "273",
        "word": "in the absence of ～",
        "meaning": "～がなければ",
        "phonetic": "",
        "example": "In the absence of air and water, no living thing could live on this planet.",
        "example_translation": "空気と水がなければ, どんな生き物もこの星で生きられないだろう。",
        "unit": "1"
    },
    {
        "id": 303,
        "q_num": "274",
        "word": "be particular about ～",
        "meaning": "（嗜好や好み）にうるさい",
        "phonetic": "",
        "example": "My father is particular about what he wears.",
        "example_translation": "私の父は着るものにうるさい。",
        "unit": "1"
    },
    {
        "id": 304,
        "q_num": "275",
        "word": "be superior to ～",
        "meaning": "～よりも優れている",
        "phonetic": "",
        "example": "I think this car is superior to that one in quality.",
        "example_translation": "私はこの車のほうがあの車よりも質が良いと思う。",
        "unit": "1"
    },
    {
        "id": 305,
        "q_num": "276",
        "word": "be willing to V",
        "meaning": "① 嫌がらずに～する ② 進んで～する",
        "phonetic": "",
        "example": "Scientists are willing to discard their theories if someone disproves them.",
        "example_translation": "科学者は誰かが反証したら, 自分の理論を捨てるのを厭わない。",
        "unit": "1"
    },
    {
        "id": 306,
        "q_num": "277",
        "word": "be reluctant to V",
        "meaning": "～したがらない",
        "phonetic": "",
        "example": "They are reluctant to do business with Japanese people.",
        "example_translation": "彼らは日本人とビジネスをしたがらない。",
        "unit": "1"
    },
    {
        "id": 307,
        "q_num": "278",
        "word": "in mind",
        "meaning": "考えがあって",
        "phonetic": "",
        "example": "I have something in mind.",
        "example_translation": "私には考えがある。",
        "unit": "1"
    },
    {
        "id": 308,
        "q_num": "279",
        "word": "What has become of ～?",
        "meaning": "～はどうなったのか?",
        "phonetic": "",
        "example": "What has become of that singer?",
        "example_translation": "あの歌手はどうなったの?",
        "unit": "1"
    },
    {
        "id": 309,
        "q_num": "280",
        "word": "specialize in ～",
        "meaning": "① (お店などが)～を専門に扱う ② ～を専攻する",
        "phonetic": "",
        "example": "This shop specializes in books on history.",
        "example_translation": "このお店は歴史の本を専門に扱っている。",
        "unit": "1"
    },
    {
        "id": 310,
        "q_num": "281",
        "word": "be sensitive to ～",
        "meaning": "～に敏感である",
        "phonetic": "",
        "example": "Parents are required to be sensitive to the needs of their children.",
        "example_translation": "親は子供の必要に敏感であることが求められる。",
        "unit": "1"
    },
    {
        "id": 311,
        "q_num": "282",
        "word": "take ～ into account",
        "meaning": "～を考慮に入れる",
        "phonetic": "",
        "example": "He never takes into account the fact that I am really busy.",
        "example_translation": "彼は私が本当に忙しいということを全く考慮に入れていない。",
        "unit": "1"
    },
    {
        "id": 312,
        "q_num": "283",
        "word": "～ come about",
        "meaning": "～が生じる ～が起こる",
        "phonetic": "",
        "example": "How did this change come about?",
        "example_translation": "どうしてこのような変化が起こったのですか。",
        "unit": "1"
    },
    {
        "id": 313,
        "q_num": "284",
        "word": "How come S V ～?",
        "meaning": "どうして～?",
        "phonetic": "",
        "example": "How did it come about that summer in Tokyo is hotter than it used to be?",
        "example_translation": "どうして東京の夏は昔よりも暑くなったのですか。",
        "unit": "1"
    },
    {
        "id": 314,
        "q_num": "285",
        "word": "refrain from Ving ～",
        "meaning": "～することを慎む",
        "phonetic": "",
        "example": "Refrain from smoking here.",
        "example_translation": "ここでの喫煙はご遠慮下さい。",
        "unit": "1"
    },
    {
        "id": 315,
        "q_num": "286",
        "word": "lose sight of ～",
        "meaning": "～を見失う",
        "phonetic": "",
        "example": "We lost sight of the yacht in the ocean.",
        "example_translation": "私たちは海の中でそのヨットを見失った。",
        "unit": "1"
    },
    {
        "id": 316,
        "q_num": "287",
        "word": "in practice",
        "meaning": "実際には",
        "phonetic": "",
        "example": "In theory this plan seems possible, but in practice it is very difficult.",
        "example_translation": "理論上は, この企画は可能なように思えるが, 実際はとても難しい。",
        "unit": "1"
    },
    {
        "id": 317,
        "q_num": "288",
        "word": "these days",
        "meaning": "最近",
        "phonetic": "",
        "example": "These days more and more people are traveling abroad.",
        "example_translation": "今日ますます多くの人が海外旅行をしている。",
        "unit": "1"
    },
    {
        "id": 318,
        "q_num": "288",
        "word": "in those days",
        "meaning": "その当時 ← in those days",
        "phonetic": "",
        "example": "I was born in the 1950s. In those days, very few people traveled abroad.",
        "example_translation": "私は 1950 年代に生まれた。 その当時, 海外旅行をする人々はとても少なかった。",
        "unit": "1"
    },
    {
        "id": 319,
        "q_num": "289",
        "word": "run out of ～",
        "meaning": "～がなくなる ～を使い果たす",
        "phonetic": "",
        "example": "I ran out of money, so I asked my parents for help.",
        "example_translation": "私はお金を使い果たしてしまったので, 両親に助けを求めた",
        "unit": "1"
    },
    {
        "id": 320,
        "q_num": "290",
        "word": "be short of ～",
        "meaning": "～が不足している 必要金額 今の所持金",
        "phonetic": "",
        "example": "I am short of money now. Can you lend me some?",
        "example_translation": "今金欠なんです。少しお金を貸してくれませんか。",
        "unit": "1"
    },
    {
        "id": 321,
        "q_num": "291",
        "word": "turn ～ off",
        "meaning": "（電気やガス）をけす",
        "phonetic": "",
        "example": "Be sure to turn off the light before going to bed.",
        "example_translation": "就寝前に必ず電気を消してください。",
        "unit": "1"
    },
    {
        "id": 322,
        "q_num": "292",
        "word": "to the point",
        "meaning": "的を射た",
        "phonetic": "",
        "example": "What he said at the meeting was to the point.",
        "example_translation": "彼の会議での発言は的を射たものだった。",
        "unit": "1"
    },
    {
        "id": 323,
        "q_num": "292",
        "word": "beside the point",
        "meaning": "的はずれな",
        "phonetic": "",
        "example": "What he said at the meeting was beside the point.",
        "example_translation": "彼の会議での発言は的はずれだった。",
        "unit": "1"
    },
    {
        "id": 324,
        "q_num": "293",
        "word": "once (and)for all",
        "meaning": "きっぱりと",
        "phonetic": "",
        "example": "He told me once and for all that he would give up smoking.",
        "example_translation": "彼はきっぱりとタバコを止めると私に言った。",
        "unit": "1"
    },
    {
        "id": 325,
        "q_num": "294",
        "word": "rule ～ out",
        "meaning": "～を除外する ～を排除する",
        "phonetic": "",
        "example": "We cannot rule out the possibility of a riot.",
        "example_translation": "暴動の可能性は排除できない。",
        "unit": "1"
    },
    {
        "id": 326,
        "q_num": "295",
        "word": "by nature",
        "meaning": "①生まれつき ② 根は",
        "phonetic": "",
        "example": "He is emotional and aggressive by nature.",
        "example_translation": "彼は生まれつき感情が激しく, 積極的だ。",
        "unit": "1"
    },
    {
        "id": 327,
        "q_num": "296",
        "word": "for the time being",
        "meaning": "当分の間",
        "phonetic": "",
        "example": "We are going to stay at this hotel for the time being.",
        "example_translation": "当分の間, 我々はこのホテルに泊まるつもりだ。",
        "unit": "1"
    },
    {
        "id": 328,
        "q_num": "297",
        "word": "back and forth",
        "meaning": "前後に あちこちに",
        "phonetic": "",
        "example": "I saw the man walking back and forth on the street.",
        "example_translation": "私はその男性が通りをあちこちに歩いているのを目にした。",
        "unit": "1"
    },
    {
        "id": 329,
        "q_num": "297",
        "word": "here and there",
        "meaning": "ところどころ ちらほら",
        "phonetic": "",
        "example": "You can find convenience stores here and there in this town.",
        "example_translation": "この町ではコンビニがところどころにあります。",
        "unit": "1"
    },
    {
        "id": 330,
        "q_num": "298",
        "word": "sooner or later",
        "meaning": "遅かれ早かれ いずれ",
        "phonetic": "",
        "example": "We’ll have to tackle the problem sooner or later.",
        "example_translation": "遅かれ早かれその問題に取り組まなければならなくなる。",
        "unit": "1"
    },
    {
        "id": 331,
        "q_num": "299",
        "word": "behind one’s back",
        "meaning": "影で 人のいないところで",
        "phonetic": "",
        "example": "You should not say bad things about others behind their back.",
        "example_translation": "影で人の悪口を言うべきではない。",
        "unit": "1"
    },
    {
        "id": 332,
        "q_num": "300",
        "word": "make a living",
        "meaning": "生活費を稼ぐ",
        "phonetic": "",
        "example": "It’s hard to make a decent living as a musician.",
        "example_translation": "ミュージシャンとしてまともに生活費を稼ぐことは難しい。",
        "unit": "1"
    },
    {
        "id": 333,
        "q_num": "301",
        "word": "under construction",
        "meaning": "建設中",
        "phonetic": "",
        "example": "A new building is under construction.",
        "example_translation": "新しい建物が建設中だ",
        "unit": "1"
    },
    {
        "id": 334,
        "q_num": "302",
        "word": "under pressure",
        "meaning": "プレッシャーを受けて 重圧を受けて",
        "phonetic": "",
        "example": "Many people try to avoid working under pressure.",
        "example_translation": "多くの人は, プレッシャーを受けて仕事をするのを避けようとする。",
        "unit": "1"
    },
    {
        "id": 335,
        "q_num": "302",
        "word": "under stress",
        "meaning": "ストレスを受けて ストレスを感じて",
        "phonetic": "",
        "example": "Many people in this workplace are under a lot of stress every day.",
        "example_translation": "この職場の多くの人は毎日大きなストレスを受けている。",
        "unit": "1"
    },
    {
        "id": 336,
        "q_num": "303",
        "word": "deal with ～",
        "meaning": "（困難なこと）に対処する",
        "phonetic": "",
        "example": "His job is to deal with customer complaints.",
        "example_translation": "彼の仕事は顧客の苦情に対処することだ。",
        "unit": "1"
    },
    {
        "id": 337,
        "q_num": "303",
        "word": "cope with ～",
        "meaning": "～にうまく対処する",
        "phonetic": "",
        "example": "He will cope with difficult situations.",
        "example_translation": "彼は困難な状況にうまく対処できるだろう。",
        "unit": "1"
    },
    {
        "id": 338,
        "q_num": "304",
        "word": "on behalf of ～",
        "meaning": "～を代表して",
        "phonetic": "",
        "example": "Linda gave a thank-you speech to the teachers and parents on behalf of all the graduating students.",
        "example_translation": "リンダは全卒業生を代表して, 教員と父母に感謝の辞を述べた。",
        "unit": "1"
    },
    {
        "id": 339,
        "q_num": "305",
        "word": "go from bad to worse",
        "meaning": "ますます悪化する",
        "phonetic": "",
        "example": "Things went from bad to worse.",
        "example_translation": "事態はますます悪化した。",
        "unit": "1"
    },
    {
        "id": 340,
        "q_num": "306",
        "word": "deprive O of ～",
        "meaning": "O から～を奪う",
        "phonetic": "",
        "example": "The disaster deprived us of our happiness.",
        "example_translation": "その災害で我々は幸福を奪われた。",
        "unit": "1"
    },
    {
        "id": 341,
        "q_num": "307",
        "word": "see 人 off",
        "meaning": "人を見送る",
        "phonetic": "",
        "example": "We saw him off at the airport.",
        "example_translation": "私たちは空港で彼を見送った。",
        "unit": "1"
    },
    {
        "id": 342,
        "q_num": "308",
        "word": "hang up",
        "meaning": "電話を切る",
        "phonetic": "",
        "example": "Don’t hang up. Hold on, please.",
        "example_translation": "電話を切らないで。 そのままお待ちください。",
        "unit": "1"
    },
    {
        "id": 343,
        "q_num": "308",
        "word": "hold the line",
        "meaning": "電話を切らずに待つ",
        "phonetic": "",
        "example": "Would you please hold the line for a few seconds? I’ll transfer your call.",
        "example_translation": "しばらくの間切らずにお待ちいただけますか。電話をおつなぎいたします。",
        "unit": "1"
    },
    {
        "id": 344,
        "q_num": "309",
        "word": "on end",
        "meaning": "続けて たて続けに 連続して",
        "phonetic": "",
        "example": "I worked for three days on end.",
        "example_translation": "私は 3 日間続けて仕事をした。",
        "unit": "1"
    },
    {
        "id": 345,
        "q_num": "310",
        "word": "in danger",
        "meaning": "危険な状態で",
        "phonetic": "",
        "example": "This motorbike rider is dangerous. The man is in danger.",
        "example_translation": "このバイク走者は危険だ。 その男性の身が危ない。",
        "unit": "1"
    },
    {
        "id": 346,
        "q_num": "311",
        "word": "painful",
        "meaning": "痛い 苦しい",
        "phonetic": "",
        "example": "This injection was very painful to the child.",
        "example_translation": "この注射はその子供にはとても痛かった。",
        "unit": "1"
    },
    {
        "id": 347,
        "q_num": "311",
        "word": "in pain",
        "meaning": "痛い 苦しい",
        "phonetic": "",
        "example": "The child was in a lot of pain after the injection.",
        "example_translation": "注射の後, その子供はとても痛がっていた。",
        "unit": "1"
    },
    {
        "id": 348,
        "q_num": "312",
        "word": "in need of ～",
        "meaning": "～を必要としている",
        "phonetic": "",
        "example": "A wheelchair is necessary for him.",
        "example_translation": "彼には車椅子が必要だ。",
        "unit": "1"
    },
    {
        "id": 349,
        "q_num": "313",
        "word": "from ～ point of view",
        "meaning": "～の観点から",
        "phonetic": "",
        "example": "He cannot see the matter from our point of view.",
        "example_translation": "彼は我々の観点からその問題を見ることができない。",
        "unit": "1"
    },
    {
        "id": 350,
        "q_num": "314",
        "word": "break up",
        "meaning": "① 解散する ② （パーティなどが）終わる ③ 〈夫婦や恋人などが〉別れる",
        "phonetic": "",
        "example": "The meeting finally broke up at ten.",
        "example_translation": "会議がようやく 10 時に終わった。",
        "unit": "1"
    },
    {
        "id": 351,
        "q_num": "315",
        "word": "break out",
        "meaning": "（戦争や火事などが）勃発する",
        "phonetic": "",
        "example": "The war broke out when I was in England.",
        "example_translation": "私がイギリスにいたときに, その戦争が勃発した。",
        "unit": "1"
    },
    {
        "id": 352,
        "q_num": "316",
        "word": "call on 人",
        "meaning": "人を訪ねる",
        "phonetic": "",
        "example": "I called on my grandparents last Sunday, but they were not at home.",
        "example_translation": "この前の日曜日に祖父母を訪ねたが,彼らは家にいなかった。",
        "unit": "1"
    },
    {
        "id": 353,
        "q_num": "317",
        "word": "scary",
        "meaning": "怖い 恐ろしい",
        "phonetic": "",
        "example": "The robber was very scary. I was very scared of the robber.",
        "example_translation": "その強盗はとても怖かった。",
        "unit": "1"
    },
    {
        "id": 354,
        "q_num": "317",
        "word": "be scared of ～",
        "meaning": "～に怖がる ～に怖える",
        "phonetic": "",
        "example": "I was very scared of the robber.",
        "example_translation": "私はその強盗がとても怖かった。",
        "unit": "1"
    },
    {
        "id": 355,
        "q_num": "318",
        "word": "advantageous",
        "meaning": "有利な disadvantageous:不利な",
        "phonetic": "",
        "example": "The condition is advantageous for me.",
        "example_translation": "その条件は私にとって有利だ。",
        "unit": "1"
    },
    {
        "id": 356,
        "q_num": "318",
        "word": "at an advantage",
        "meaning": "有利な状態（立場）にある at a disadvantage:不利な状態（立場）にある",
        "phonetic": "",
        "example": "I am at an advantage compared to others.",
        "example_translation": "私は他の人と比べると有利な状態にある。",
        "unit": "1"
    },
    {
        "id": 357,
        "q_num": "319",
        "word": "keep ～ off",
        "meaning": "～に近寄らない ～から離れている",
        "phonetic": "",
        "example": "There was a sign saying “Keep off the grass.”",
        "example_translation": "「芝生への立ち入り禁止」と書かれた札があった。",
        "unit": "1"
    },
    {
        "id": 358,
        "q_num": "320",
        "word": "die out",
        "meaning": "絶滅する",
        "phonetic": "",
        "example": "Dinosaurs died out millions of years ago.",
        "example_translation": "恐竜は何百万年も前に絶滅した。",
        "unit": "1"
    },
    {
        "id": 359,
        "q_num": "320",
        "word": "become extinct",
        "meaning": "絶滅する",
        "phonetic": "",
        "example": "A lot of plants and animals in this area are becoming extinct.",
        "example_translation": "この地域の多くの動植物は絶滅しつつある。",
        "unit": "1"
    },
    {
        "id": 360,
        "q_num": "321",
        "word": "take to 人",
        "meaning": "～を（すぐに）好きになる",
        "phonetic": "",
        "example": "When I introduced Bob to Nancy, they seemed to take to each other immediately.",
        "example_translation": "ボブをナンシーに紹介したとき, 彼らはすぐにお互いを気に入ったようだった。",
        "unit": "1"
    },
    {
        "id": 361,
        "q_num": "322",
        "word": "make do with ～",
        "meaning": "～で済ます ～で我慢する",
        "phonetic": "",
        "example": "I usually make do with a glass of vegetable juice for breakfast.",
        "example_translation": "普段, 朝食にはコップ一杯の野菜ジュースで済ませている。",
        "unit": "1"
    },
    {
        "id": 362,
        "q_num": "323",
        "word": "do without ～",
        "meaning": "～なしでやっていく ～なしで済ます ～なしで我慢する",
        "phonetic": "",
        "example": "It is difficult to do without a car in this business.",
        "example_translation": "この仕事は車なしでやっていくことは難しい。",
        "unit": "1"
    },
    {
        "id": 363,
        "q_num": "324",
        "word": "believe in ～",
        "meaning": "～の（存在・人格・価値・能力）を信じている",
        "phonetic": "",
        "example": "My daughter still believes in Santa Claus.",
        "example_translation": "娘はまだサンタクロースの存在を信じている。",
        "unit": "1"
    },
    {
        "id": 364,
        "q_num": "325",
        "word": "tell on 人",
        "meaning": "人の体に悪影響を及ぼす 人の体にこたえる",
        "phonetic": "",
        "example": "Hard work was beginning to tell on him.",
        "example_translation": "激務が彼の体に悪影響を及ぼし始めていた。",
        "unit": "1"
    },
    {
        "id": 365,
        "q_num": "326",
        "word": "tell 人 off",
        "meaning": "～を叱りつける",
        "phonetic": "",
        "example": "The teacher told me off for coming to school late.",
        "example_translation": "先生は遅刻してきたことに対して私を叱りつけた。",
        "unit": "1"
    },
    {
        "id": 366,
        "q_num": "327",
        "word": "fall victim to ～",
        "meaning": "～の犠牲になる fall",
        "phonetic": "",
        "example": "She fell victim to the disaster.",
        "example_translation": "彼女は災害の犠牲になった。",
        "unit": "1"
    },
    {
        "id": 367,
        "q_num": "328",
        "word": "put ～ out",
        "meaning": "（火やタバコなど）を消化する 消す",
        "phonetic": "",
        "example": "The firefighters put out the fire in an hour.",
        "example_translation": "消防隊員は一時間で消火した。",
        "unit": "1"
    },
    {
        "id": 368,
        "q_num": "329",
        "word": "fall behind ～",
        "meaning": "～に遅れをとる",
        "phonetic": "",
        "example": "Tom began to fall behind the rest of the students in his studies.",
        "example_translation": "トムは他の生徒よりも勉強が遅れ始めた。",
        "unit": "1"
    },
    {
        "id": 369,
        "q_num": "330",
        "word": "come to",
        "meaning": "意識が回復する",
        "phonetic": "",
        "example": "I was hit by a motorbike on the street, and when I came to, I was on the hospital bed.",
        "example_translation": "私はその通りでバイクに轢かれ, 意識が回復したときは, 病院のベッドの上だった。",
        "unit": "1"
    },
    {
        "id": 370,
        "q_num": "331",
        "word": "on and off",
        "meaning": "① 断続的に ② 時々",
        "phonetic": "",
        "example": "The light is flashing on and off.",
        "example_translation": "明かりが点滅している。",
        "unit": "1"
    },
    {
        "id": 371,
        "q_num": "332",
        "word": "have a flat tire",
        "meaning": "タイヤがパンクしている",
        "phonetic": "",
        "example": "We had a flat tire on our way to the destination.",
        "example_translation": "目的地に行く途中タイヤがパンクしていた。",
        "unit": "1"
    },
    {
        "id": 372,
        "q_num": "333",
        "word": "pull one’s leg",
        "meaning": "人をからかう",
        "phonetic": "",
        "example": "Tomorrow is not a holiday. Don’t believe George. He’s just pulling your leg.",
        "example_translation": "明日は休日じゃないよ。 ジョージの言うことを信じないで。 君をからかっているだけだよ。",
        "unit": "1"
    },
    {
        "id": 373,
        "q_num": "334",
        "word": "stay up",
        "meaning": "（寝ないで）起きている",
        "phonetic": "",
        "example": "My son stayed up late last night.",
        "example_translation": "息子は昨夜遅くまで起きていた。",
        "unit": "1"
    },
    {
        "id": 374,
        "q_num": "335",
        "word": "make it to ～",
        "meaning": "（どうにか）～に間に合う たどり着く",
        "phonetic": "",
        "example": "I made it to the station before the train left.",
        "example_translation": "電車が出る前に私は駅にたどり着いた。",
        "unit": "1"
    },
    {
        "id": 375,
        "q_num": "336",
        "word": "just around the corner",
        "meaning": "すぐ近くに来ている すぐ近くにある",
        "phonetic": "",
        "example": "The summer vacation is just around the corner.",
        "example_translation": "夏休みはすぐそこまで来ている。",
        "unit": "1"
    },
    {
        "id": 376,
        "q_num": "337",
        "word": "have words with ～",
        "meaning": "～と口論する",
        "phonetic": "",
        "example": "I often have words with my wife about my son.",
        "example_translation": "私はよく息子のことで妻と口論する。",
        "unit": "1"
    },
    {
        "id": 377,
        "q_num": "338",
        "word": "wait on ～",
        "meaning": "～に仕える",
        "phonetic": "",
        "example": "Have you been waited on?",
        "example_translation": "御用をお伺いしておりますか。",
        "unit": "1"
    },
    {
        "id": 378,
        "q_num": "339",
        "word": "fall on 日時や曜日",
        "meaning": "～に当たる",
        "phonetic": "",
        "example": "My birthday falls on a Sunday this year.",
        "example_translation": "今年, 私の誕生日は日曜日に当たる。",
        "unit": "1"
    },
    {
        "id": 379,
        "q_num": "340",
        "word": "fall apart",
        "meaning": "① バラバラになる ② 破綻する",
        "phonetic": "",
        "example": "I heard a dish fall apart in the distance.",
        "example_translation": "遠くでお皿が落ちて割れる音が聞こえた。",
        "unit": "1"
    },
    {
        "id": 380,
        "q_num": "341",
        "word": "take in ～",
        "meaning": "① ～を理解する ② ～を騙す ③ （子供など）を引き取る・預かる",
        "phonetic": "",
        "example": "It took me a while to take in what this book said.",
        "example_translation": "この本の内容を理解するのにしばらく時間がかかった。",
        "unit": "1"
    },
    {
        "id": 381,
        "q_num": "342",
        "word": "bring out ～",
        "meaning": "① ～を引き出す ② （新商品）を販売する ③（本）を出版する",
        "phonetic": "",
        "example": "Her new book will be brought out next spring.",
        "example_translation": "彼女の新しい本は, 来春出版されます。",
        "unit": "1"
    },
    {
        "id": 382,
        "q_num": "343",
        "word": "at the mercy of ～",
        "meaning": "① ～に翻弄されて ②～に好き放題されて",
        "phonetic": "",
        "example": "His life was at the mercy of the king.",
        "example_translation": "彼の生活は王様に翻弄されていた。",
        "unit": "1"
    },
    {
        "id": 383,
        "q_num": "344",
        "word": "work out",
        "meaning": "① 運動する （身体を）鍛える ② （考えや策）を出す ③ ～を解決する",
        "phonetic": "",
        "example": "I work out at a gym a few times a week.",
        "example_translation": "私は週に2, 3回ジムで運動している。",
        "unit": "1"
    },
    {
        "id": 384,
        "q_num": "345",
        "word": "live up to ～",
        "meaning": "（期待など）に添う ～に応える",
        "phonetic": "",
        "example": "He tries his best to live up to his parents’ expectations.",
        "example_translation": "彼は両親の期待に応えるために最善を尽くしている。",
        "unit": "1"
    },
    {
        "id": 385,
        "q_num": "346",
        "word": "by virtue of ～",
        "meaning": "～のおかげで",
        "phonetic": "",
        "example": "She believes that she was able to succeed by virtue of her effort.",
        "example_translation": "彼女は自分の努力のおかげで成功することができたと思っている。",
        "unit": "1"
    },
    {
        "id": 386,
        "q_num": "347",
        "word": "next to nothing",
        "meaning": "ほとんどない",
        "phonetic": "",
        "example": "When it comes to cars, he knows next to nothing.",
        "example_translation": "車のこととなると, 彼はほとんど何も知らない。",
        "unit": "1"
    },
    {
        "id": 387,
        "q_num": "347",
        "word": "next to impossible",
        "meaning": "ほとんど不可能な",
        "phonetic": "",
        "example": "It is next to impossible for us to finish it in a day.",
        "example_translation": "私たちが1日でそれを終わらせることはほとんど不可能だ。",
        "unit": "1"
    },
    {
        "id": 388,
        "q_num": "348",
        "word": "hang out",
        "meaning": "遊ぶ つるむ ぶらつく",
        "phonetic": "",
        "example": "I’m going to hang out with my friends today.",
        "example_translation": "今日は友達と遊びに行くつもりだ。",
        "unit": "1"
    },
    {
        "id": 389,
        "q_num": "349",
        "word": "except for ～",
        "meaning": "～以外",
        "phonetic": "",
        "example": "The room was empty except for the woman.",
        "example_translation": "その女性以外部屋には誰もいなかった。",
        "unit": "1"
    },
    {
        "id": 390,
        "q_num": "349",
        "word": "except ～",
        "meaning": "～以外",
        "phonetic": "",
        "example": "Nobody except the woman was in the room.",
        "example_translation": "その女性以外誰もその部屋にいなかった。",
        "unit": "1"
    },
    {
        "id": 391,
        "q_num": "350",
        "word": "other than ～",
        "meaning": "～以外",
        "phonetic": "",
        "example": "I don’t watch TV other than news programs.",
        "example_translation": "ニュース番組以外, 私はテレビを見ない。",
        "unit": "1"
    },
    {
        "id": 392,
        "q_num": "351",
        "word": "by word of mouth",
        "meaning": "口コミで",
        "phonetic": "",
        "example": "The reputation of the new restaurant spread by word of mouth.",
        "example_translation": "その新しいレストランの評判は口コミで広がった。",
        "unit": "1"
    },
    {
        "id": 393,
        "q_num": "352",
        "word": "get in touch with ～ / get in contact with ～",
        "meaning": "～と連絡を取る",
        "phonetic": "",
        "example": "You can get in touch with me at the office at any time.",
        "example_translation": "職場でしたら, いつでも私と連絡を取ることができます。",
        "unit": "1"
    },
    {
        "id": 394,
        "q_num": "352",
        "word": "keep in touch with ～ / stay in contact with ～",
        "meaning": "～と連絡を取り続ける",
        "phonetic": "",
        "example": "We went to different colleges, but we still stay in contact with each other.",
        "example_translation": "私たちは違う大学に進学したが, 今でもお互いに連絡を取り続けている。",
        "unit": "1"
    },
    {
        "id": 395,
        "q_num": "353",
        "word": "conduct a study of ～",
        "meaning": "～に関する研究を行う",
        "phonetic": "",
        "example": "A study was conducted of how young children perceive the world around them.",
        "example_translation": "幼い子供が周りの世界をどのように捉えているかに関する研究が行われた。",
        "unit": "1"
    },
    {
        "id": 396,
        "q_num": "354",
        "word": "over a cup of tea",
        "meaning": "お茶を飲みながら over",
        "phonetic": "",
        "example": "Let’s talk about it over a cup of tea.",
        "example_translation": "お茶を飲みながらそのことについて話し合いましょう。",
        "unit": "1"
    },
    {
        "id": 397,
        "q_num": "354",
        "word": "over dinner",
        "meaning": "夕食を食べながら",
        "phonetic": "",
        "example": "We discussed the matter over dinner.",
        "example_translation": "私たちは夕食を食べながらその件について話し合った。",
        "unit": "1"
    },
    {
        "id": 398,
        "q_num": "355",
        "word": "be committed to Ving / be committed to V",
        "meaning": "～に打ち込んでいる ～に傾倒している",
        "phonetic": "",
        "example": "They are fully committed to preparing for the Olympics.",
        "example_translation": "彼らはオリンピックの準備に完全に打ち込んでいる。",
        "unit": "1"
    },
    {
        "id": 399,
        "q_num": "356",
        "word": "within A of B",
        "meaning": "B からA 以内に",
        "phonetic": "",
        "example": "This website shows all the restaurants within ten minutes’ walk of the station.",
        "example_translation": "このウェブサイトは駅から徒歩10分以内にあるレストランをすべて表示している。",
        "unit": "1"
    },
    {
        "id": 400,
        "q_num": "357",
        "word": "beyond one’s understanding",
        "meaning": "～の理解を越えている ～には全く分からない",
        "phonetic": "",
        "example": "This math class is beyond my understanding.",
        "example_translation": "この数学の授業は私には全く分からない。",
        "unit": "1"
    },
    {
        "id": 401,
        "q_num": "358",
        "word": "have one’s（own）way",
        "meaning": "わがままを通す 自分の思いどおりにする",
        "phonetic": "",
        "example": "Tom always tries to have his own way, so I don’t like him.",
        "example_translation": "トムはいつもわがままを通そうとするので, 私は彼のことが好きではない。",
        "unit": "1"
    },
    {
        "id": 402,
        "q_num": "359",
        "word": "accuse A of B",
        "meaning": "① A をB のことで非難する",
        "phonetic": "",
        "example": "Peter accused her of stealing his money.",
        "example_translation": "ピーターはお金を盗んだことで彼女を非難した。",
        "unit": "1"
    },
    {
        "id": 403,
        "q_num": "359",
        "word": "criticize A for B",
        "meaning": "A をB のことで批判する",
        "phonetic": "",
        "example": "Peter criticizes me for everything I do.",
        "example_translation": "ピーターは私のすること全てに批判する。",
        "unit": "1"
    },
    {
        "id": 404,
        "q_num": "360",
        "word": "go so far as to V",
        "meaning": "V までする",
        "phonetic": "",
        "example": "She went so far as to say that all the money in the wallet should be cleaned.",
        "example_translation": "彼女は財布の中のお金を全て洗うべきとまで言った。",
        "unit": "1"
    },
    {
        "id": 405,
        "q_num": "361",
        "word": "cut in",
        "meaning": "（人の話）をさえぎる",
        "phonetic": "",
        "example": "When I was expressing my ideas, someone cut in to argue with me.",
        "example_translation": "私が自分の考えを述べていた時, 誰かが私と議論しようとして話を遮った。",
        "unit": "1"
    },
    {
        "id": 406,
        "q_num": "362",
        "word": "take back 発言",
        "meaning": "（発言や失言）を撤回する",
        "phonetic": "",
        "example": "I’m sorry. I will take back what I have just said.",
        "example_translation": "すいません。 たった今申し上げたことを撤回します。",
        "unit": "1"
    },
    {
        "id": 407,
        "q_num": "363",
        "word": "run for ～",
        "meaning": "～に立候補する ～に出馬する",
        "phonetic": "",
        "example": "He will run for president in the next election.",
        "example_translation": "彼は次の選挙で大統領に立候補するだろう。",
        "unit": "1"
    },
    {
        "id": 408,
        "q_num": "364",
        "word": "put A through to B",
        "meaning": "（電話で）A の電話をB につなぐ",
        "phonetic": "",
        "example": "Excuse me, but could you put me through to Mr. David?",
        "example_translation": "すいませんが, 私の電話をディビッドさんにつないでいただけますか。",
        "unit": "1"
    },
    {
        "id": 409,
        "q_num": "365",
        "word": "in an effort to V",
        "meaning": "～しようとして",
        "phonetic": "",
        "example": "He jumped out of a window in an effort to escape.",
        "example_translation": "彼は逃げようとして, 窓から飛び出た。",
        "unit": "1"
    },
    {
        "id": 410,
        "q_num": "366",
        "word": "keep one’s temper",
        "meaning": "冷静さを保つ",
        "phonetic": "",
        "example": "John tried to keep his temper, but he lost his temper and left the room.",
        "example_translation": "ジョンは冷静さと保とうとしたが, 急に怒って部屋を出て行った。",
        "unit": "1"
    },
    {
        "id": 411,
        "q_num": "367",
        "word": "line up",
        "meaning": "並ぶ",
        "phonetic": "",
        "example": "I saw four men lining up there.",
        "example_translation": "私は4人の男性がそこで並んでいるのを見た。",
        "unit": "1"
    },
    {
        "id": 412,
        "q_num": "367",
        "word": "in line",
        "meaning": "並んで",
        "phonetic": "",
        "example": "I saw four men standing in line there.",
        "example_translation": "私は4人の男性がそこで並んでいるのを見た。",
        "unit": "1"
    },
    {
        "id": 413,
        "q_num": "368",
        "word": "show 人 around 場所",
        "meaning": "人に場所を案内する",
        "phonetic": "",
        "example": "She showed me around the house.",
        "example_translation": "彼女は私に家の中を案内してくれた。",
        "unit": "1"
    },
    {
        "id": 414,
        "q_num": "369",
        "word": "(at) second hand",
        "meaning": "①間接的に ②中古で",
        "phonetic": "",
        "example": "We bought this house second hand.",
        "example_translation": "私たちは中古でこの家を買った。",
        "unit": "1"
    },
    {
        "id": 415,
        "q_num": "370",
        "word": "put ～ to use",
        "meaning": "～を活用する",
        "phonetic": "",
        "example": "It is difficult to put this theory into practice.",
        "example_translation": "この理論を実践することは難しい。",
        "unit": "1"
    },
    {
        "id": 416,
        "q_num": "371",
        "word": "change trains",
        "meaning": "電車を乗り換える",
        "phonetic": "",
        "example": "You need to change trains at the next stop.",
        "example_translation": "次の駅で電車を乗り換える必要があります。",
        "unit": "1"
    },
    {
        "id": 417,
        "q_num": "372",
        "word": "close down",
        "meaning": "（お店などが）閉店する 廃業する",
        "phonetic": "",
        "example": "I hear that the bakery closed down last month.",
        "example_translation": "そのパン屋は先月廃業したようだ。",
        "unit": "1"
    },
    {
        "id": 418,
        "q_num": "373",
        "word": "can afford to V",
        "meaning": "～する余裕がある",
        "phonetic": "",
        "example": "We cannot afford to buy a new car.",
        "example_translation": "私たちは新車を買う余裕がない。",
        "unit": "1"
    },
    {
        "id": 419,
        "q_num": "374",
        "word": "run over ～",
        "meaning": "（乗り物が）～を轢く",
        "phonetic": "",
        "example": "He was run over by the truck and taken to the hospital.",
        "example_translation": "彼はトラックに轢かれて, 病院に運ばれた。",
        "unit": "1"
    },
    {
        "id": 420,
        "q_num": "375",
        "word": "in honor of ～",
        "meaning": "～に敬意を表して ～を称えて ～を記念して",
        "phonetic": "",
        "example": "This movie was made in honor of the soldiers of World War Ⅱ.",
        "example_translation": "この映画は第2次世界大戦の兵士たちに敬意を表して作られた。",
        "unit": "1"
    },
    {
        "id": 421,
        "q_num": "376",
        "word": "give ～ off",
        "meaning": "（光・音・臭い・蒸気・オーラなど）を発する 放つ",
        "phonetic": "",
        "example": "That factory gives off harmful substances.",
        "example_translation": "あの工場は有害な物質を出している。",
        "unit": "1"
    },
    {
        "id": 422,
        "q_num": "377",
        "word": "比較級 than X combined",
        "meaning": "X を合わせたよりも～",
        "phonetic": "",
        "example": "England has produced more great poets than all other countries combined.",
        "example_translation": "英国は他のすべての国を合わせたよりも多くの偉大な詩人を輩出してきた。",
        "unit": "1"
    },
    {
        "id": 423,
        "q_num": "377",
        "word": "比較級 than X put together",
        "meaning": "X を合わせたよりも～",
        "phonetic": "",
        "example": "England has produced more great poets than all other countries put together.",
        "example_translation": "英国は他のすべての国を合わせたよりも多くの偉大な詩人を輩出してきた。",
        "unit": "1"
    },
    {
        "id": 424,
        "q_num": "378",
        "word": "long for ～",
        "meaning": "～を切望する ～を待ちわびる ～に憧れる",
        "phonetic": "",
        "example": "I’m longing for a long vacation.",
        "example_translation": "私は長期休暇を待ちわびている。",
        "unit": "1"
    },
    {
        "id": 425,
        "q_num": "378",
        "word": "long to V",
        "meaning": "～することを切望する ～したくてたまらない",
        "phonetic": "",
        "example": "She is longing to go to Paris to learn cooking.",
        "example_translation": "彼女は料理を学ぶためにパリに行きたがっている。",
        "unit": "1"
    },
    {
        "id": 426,
        "q_num": "379",
        "word": "come up",
        "meaning": "①（特定の行事が）やってくる 近づいてくる",
        "phonetic": "",
        "example": "Our wedding ceremony is coming up.",
        "example_translation": "私たちの結婚式が近づいている。",
        "unit": "1"
    },
    {
        "id": 427,
        "q_num": "379",
        "word": "come around",
        "meaning": "（周期的に行われる行事や季節が）やってくる 巡ってくる",
        "phonetic": "",
        "example": "A summer vacation is coming around.",
        "example_translation": "春休みが近づいている。",
        "unit": "1"
    },
    {
        "id": 428,
        "q_num": "380",
        "word": "come into being",
        "meaning": "（国, 組織, 生命, 法律が）誕生する",
        "phonetic": "",
        "example": "Do you know when the law came into being?",
        "example_translation": "その法律がいつ誕生したのか知っていますか。",
        "unit": "1"
    },
    {
        "id": 429,
        "q_num": "381",
        "word": "stir up",
        "meaning": "①～をかき回す ②（感情）をひっかき回す かき立てる ③（騒ぎ）を巻き起こす",
        "phonetic": "",
        "example": "What he said to me stirred up my anger.",
        "example_translation": "彼が私に言ったことは私の怒りをかき起てた。",
        "unit": "1"
    },
    {
        "id": 430,
        "q_num": "382",
        "word": "at best",
        "meaning": "良くても～くらい 最高でも～くらい",
        "phonetic": "",
        "example": "I will get an average mark at best on the exam.",
        "example_translation": "テストでは良くても平均点しか取れないだろう。",
        "unit": "1"
    },
    {
        "id": 431,
        "q_num": "382",
        "word": "at worst",
        "meaning": "悪くても～くらい 最悪でも～くらい",
        "phonetic": "",
        "example": "I will get an average mark at worst on the exam.",
        "example_translation": "テストでは悪くても平均点は取れるだろう。",
        "unit": "1"
    },
    {
        "id": 432,
        "q_num": "383",
        "word": "at one’s best",
        "meaning": "最高の状態で 絶好調で",
        "phonetic": "",
        "example": "The cherry blossoms are at their best now.",
        "example_translation": "その桜の花は今が最高の状態だ。",
        "unit": "1"
    },
    {
        "id": 433,
        "q_num": "384",
        "word": "be fed up with ～",
        "meaning": "～にうんざりしている",
        "phonetic": "",
        "example": "I’m fed up with the same practice every day.",
        "example_translation": "毎日同じ練習にうんざりしている。",
        "unit": "1"
    },
    {
        "id": 434,
        "q_num": "385",
        "word": "on board",
        "meaning": "乗っている",
        "phonetic": "",
        "example": "Look! A man is on board.",
        "example_translation": "見てごらん。 男性が1人乗っているよ。",
        "unit": "1"
    },
    {
        "id": 435,
        "q_num": "386",
        "word": "to one’s surprise",
        "meaning": "驚いたことだが 驚いたことに",
        "phonetic": "",
        "example": "Tim won the first prize at the contest to our surprise.",
        "example_translation": "ティムはコンテストで一等賞を獲得し, 私たちは驚いた。",
        "unit": "1"
    },
    {
        "id": 436,
        "q_num": "387",
        "word": "gain weight",
        "meaning": "体重が増える 太る 🍎 388. lose weight: 体重が減る 痩せる",
        "phonetic": "",
        "example": "My father has gained a lot of weight.",
        "example_translation": "父は非常に太った。",
        "unit": "1"
    },
    {
        "id": 437,
        "q_num": "387",
        "word": "put on weight",
        "meaning": "体重が増える 太る take off weight: 体重が減る 痩せる",
        "phonetic": "",
        "example": "My father has put on a lot of weight.",
        "example_translation": "父は非常に太った。",
        "unit": "1"
    },
    {
        "id": 438,
        "q_num": "388",
        "word": "lose weight",
        "meaning": "体重が減る 痩せる",
        "phonetic": "",
        "example": "My father has lost a lot of weight.",
        "example_translation": "父は非常に痩せた。",
        "unit": "1"
    },
    {
        "id": 439,
        "q_num": "388",
        "word": "take off weight",
        "meaning": "体重が減る 痩せる",
        "phonetic": "",
        "example": "My father has taken off a lot of weight.",
        "example_translation": "父は非常に痩せた。",
        "unit": "1"
    },
    {
        "id": 440,
        "q_num": "389",
        "word": "all the way",
        "meaning": "① （道中）ずっと ② はるばる わざわざ",
        "phonetic": "",
        "example": "I had to all the way to the station.",
        "example_translation": "私は駅までずっと走らなければならなかった。",
        "unit": "1"
    },
    {
        "id": 441,
        "q_num": "390",
        "word": "reflect on ～",
        "meaning": "（過去の言動など）をじっくり考える",
        "phonetic": "",
        "example": "Take time to reflect on your successes and failures.",
        "example_translation": "時間をかけて, うまくいったことといかなかったことをよく考えて下さい。",
        "unit": "1"
    },
    {
        "id": 442,
        "q_num": "391",
        "word": "rich in ～",
        "meaning": "～が豊富にある",
        "phonetic": "",
        "example": "Australia is rich in natural resources.",
        "example_translation": "オーストラリアは天然資源が豊富だ。",
        "unit": "1"
    },
    {
        "id": 443,
        "q_num": "391",
        "word": "poor in ～",
        "meaning": "～が乏しい",
        "phonetic": "",
        "example": "Japan is poor in natural resources.",
        "example_translation": "日本は天然資源が乏しい。",
        "unit": "1"
    },
    {
        "id": 444,
        "q_num": "392",
        "word": "trial and error",
        "meaning": "試行錯誤",
        "phonetic": "",
        "example": "I learned about gardening through trial and error.",
        "example_translation": "私は試行錯誤を通じてガーデニングを学んだ。",
        "unit": "1"
    },
    {
        "id": 445,
        "q_num": "393",
        "word": "in the corner of ～",
        "meaning": "～の隅に",
        "phonetic": "",
        "example": "There is a bench in the corner of the park.",
        "example_translation": "その公園の隅にベンチがある。",
        "unit": "1"
    },
    {
        "id": 446,
        "q_num": "393",
        "word": "on the corner of ～",
        "meaning": "～の角に in the corner → on the corner",
        "phonetic": "",
        "example": "There is a post on the corner of the street.",
        "example_translation": "その通りの角に電柱がある。",
        "unit": "1"
    },
    {
        "id": 447,
        "q_num": "394",
        "word": "attend to ～",
        "meaning": "①（お客など）に応対する ← flight attendant は機内の「接客係」",
        "phonetic": "",
        "example": "Please take a seat. I’ll attend to you shortly.",
        "example_translation": "おかけになって下さい。 まもなく応対させて頂きます。",
        "unit": "1"
    },
    {
        "id": 448,
        "q_num": "395",
        "word": "as it turned out ～",
        "meaning": "実際にどうだったかというと～だった 実際には～だった",
        "phonetic": "",
        "example": "We thought Tom was cold-hearted, but as it turned out, he was very kind.",
        "example_translation": "私たちはトムが心の冷たい人だと思っていたが, 実際はとても優しかった。",
        "unit": "1"
    },
    {
        "id": 449,
        "q_num": "395",
        "word": "it turned out that S V ～",
        "meaning": "実際にどうだったかというと～だった 実際には～だった",
        "phonetic": "",
        "example": "We thought Tom was cold-hearted, but it turned out that he was very kind.",
        "example_translation": "私たちはトムが心の冷たい人だと思っていたが, 実際はとても優しかった。",
        "unit": "1"
    },
    {
        "id": 450,
        "q_num": "396",
        "word": "aim to V",
        "meaning": "～することを目指す ～することを心がける",
        "phonetic": "",
        "example": "Education should aim to develop potential abilities.",
        "example_translation": "教育は潜在能力を磨くことを目指すべきだ。",
        "unit": "1"
    },
    {
        "id": 451,
        "q_num": "396",
        "word": "aim at Ving",
        "meaning": "～することを目指す ～することを心がける",
        "phonetic": "",
        "example": "Softdrink commercials are aimed mainly at teenagers.",
        "example_translation": "清涼飲料のコマーシャルは主に10代の若者を対象としている。",
        "unit": "1"
    },
    {
        "id": 452,
        "q_num": "397",
        "word": "for all ～",
        "meaning": "～があるにも関わらず あれだけの～にも関わらず",
        "phonetic": "",
        "example": "For all his wealth, he lives very frugally.",
        "example_translation": "財産があるにも関わらず, 彼は非常に質素な暮らしをしている。",
        "unit": "1"
    },
    {
        "id": 453,
        "q_num": "398",
        "word": "mean to V",
        "meaning": "～するつもりである",
        "phonetic": "",
        "example": "I didn’t mean to hurt you.",
        "example_translation": "あなたを傷つけるつもりはなかった。",
        "unit": "1"
    },
    {
        "id": 454,
        "q_num": "399",
        "word": "owe X Y",
        "meaning": "① X にY を借りている ② X にY の恩を感じている",
        "phonetic": "",
        "example": "I owe my parents a lot of money.",
        "example_translation": "私は両親に多額のお金を借りている。",
        "unit": "1"
    },
    {
        "id": 455,
        "q_num": "400",
        "word": "give ～ away",
        "meaning": "① （無料で）～をあげる ～を配る ② （秘密）を暴露する もらす",
        "phonetic": "",
        "example": "The restaurant owner gave away food to children in need.",
        "example_translation": "そのレストランのオーナーは困窮している子供に食べ物を無料で提供した。",
        "unit": "1"
    },
    {
        "id": 456,
        "q_num": "401",
        "word": "come under attack",
        "meaning": "攻撃を受ける 非難される",
        "phonetic": "",
        "example": "The city has come under attack, so everyone is in a panic now.",
        "example_translation": "その都市は攻撃を受けたので, 今すべての人がパニックだ。",
        "unit": "1"
    },
    {
        "id": 457,
        "q_num": "402",
        "word": "at risk",
        "meaning": "危ない",
        "phonetic": "",
        "example": "Removing the bomb is very risky. The man is at risk.",
        "example_translation": "その爆弾を処理することはとても危険だ。 その男性の身が危ない。",
        "unit": "1"
    },
    {
        "id": 458,
        "q_num": "403",
        "word": "go bankrupt",
        "meaning": "破産する",
        "phonetic": "",
        "example": "The company went bankrupt last week.",
        "example_translation": "その会社は先週破産した。",
        "unit": "1"
    },
    {
        "id": 459,
        "q_num": "403",
        "word": "go out of business",
        "meaning": "廃業する",
        "phonetic": "",
        "example": "The shop went out of business last week.",
        "example_translation": "そのお店は先週廃業した。",
        "unit": "1"
    },
    {
        "id": 460,
        "q_num": "404",
        "word": "figure ～ out",
        "meaning": "～がわかる ～を把握する",
        "phonetic": "",
        "example": "I can’t figure out what it is.",
        "example_translation": "それが何なのか分からない。",
        "unit": "1"
    },
    {
        "id": 461,
        "q_num": "405",
        "word": "be better off",
        "meaning": "良い生活をしている 暮らし向きがよい",
        "phonetic": "",
        "example": "Taro is better off than he was ten years ago, but Jiro is worse off.",
        "example_translation": "太郎は10年前よりも良い生活をしているが, 次郎は辛い生活をしている。",
        "unit": "1"
    },
    {
        "id": 462,
        "q_num": "406",
        "word": "in (the) light of ～",
        "meaning": "～の観点から ～を考慮して",
        "phonetic": "",
        "example": "We decided to cancel the outdoor event in light of the weather forecast.",
        "example_translation": "天気予報を考慮して, 私たちは野外イベントを中止することに決めた。",
        "unit": "1"
    },
    {
        "id": 463,
        "q_num": "407",
        "word": "get into ～",
        "meaning": "～に乗る get out of ～：～から降りる",
        "phonetic": "",
        "example": "I got into a taxi at Osaka Station and got out of it near the post office.",
        "example_translation": "私は大阪駅でタクシーに乗り, 郵便局の近くで降りた。",
        "unit": "1"
    },
    {
        "id": 464,
        "q_num": "407",
        "word": "get on ～",
        "meaning": "～に乗る get off ～：～から降りる",
        "phonetic": "",
        "example": "I got on a bus at Osaka Station and got off at the post office.",
        "example_translation": "私は大阪駅でバスに乗り, 郵便局の近くで降りた。",
        "unit": "1"
    },
    {
        "id": 465,
        "q_num": "408",
        "word": "be on the point of Ving",
        "meaning": "（まさに）～しようとしている",
        "phonetic": "",
        "example": "I was on the point of diving into the river, but I didn’t.",
        "example_translation": "私は川に飛び込もうとしていたが, しなかった。",
        "unit": "1"
    },
    {
        "id": 466,
        "q_num": "409",
        "word": "weigh A against B",
        "meaning": "A をB と比較検討する A をB と天秤にかける",
        "phonetic": "",
        "example": "Be sure to weigh the positive aspects against the negative ones.",
        "example_translation": "必ずプラス面をマイナス面と比較して検討するように。",
        "unit": "1"
    },
    {
        "id": 467,
        "q_num": "410",
        "word": "be lost in thought",
        "meaning": "もの思いにふけいっている 考え事をしている",
        "phonetic": "",
        "example": "I was lost in Hokkaido.",
        "example_translation": "私は北海道で道に迷った。",
        "unit": "1"
    },
    {
        "id": 468,
        "q_num": "411",
        "word": "go off",
        "meaning": "（セットした爆弾が）爆発する",
        "phonetic": "",
        "example": "A bomb went off in a crowded street.",
        "example_translation": "混雑した通りで, 爆弾が爆発した。",
        "unit": "1"
    },
    {
        "id": 469,
        "q_num": "412",
        "word": "beat around the bush",
        "meaning": "遠回しに言う",
        "phonetic": "",
        "example": "Don't beat around the bush. Get to the point.",
        "example_translation": "遠回しに言わないで。要点を言って下さい。",
        "unit": "1"
    },
    {
        "id": 470,
        "q_num": "413",
        "word": "get the better of ～",
        "meaning": "～を負かす・～に打ち勝つ",
        "phonetic": "",
        "example": "No one can get the better of him in an argument.",
        "example_translation": "誰も議論で彼に勝てない。",
        "unit": "1"
    },
    {
        "id": 471,
        "q_num": "414",
        "word": "on the brink of ～",
        "meaning": "①～の寸前である　②（まさに）～しそうである",
        "phonetic": "",
        "example": "The glass is on the brink of overflowing.",
        "example_translation": "そのグラスは今にも中身がこぼれそうである。",
        "unit": "1"
    },
    {
        "id": 472,
        "q_num": "415",
        "word": "via ～",
        "meaning": "①～経由で　②～を通じて",
        "phonetic": "",
        "example": "My father flew to New York via Hawaii.",
        "example_translation": "父はハワイ経由でニューヨークに行った。",
        "unit": "1"
    },
    {
        "id": 473,
        "q_num": "415",
        "word": "by way of ～",
        "meaning": "①～経由で　②～を通じて",
        "phonetic": "",
        "example": "My father flew to New York by way of Hawaii.",
        "example_translation": "父はハワイ経由でニューヨークに行った。",
        "unit": "1"
    },
    {
        "id": 474,
        "q_num": "416",
        "word": "be ashamed of ～",
        "meaning": "～を恥ずかしく思っている",
        "phonetic": "",
        "example": "I am ashamed of my past behavior.",
        "example_translation": "私は過去の行動を恥ずかしく思っている。",
        "unit": "1"
    }
];