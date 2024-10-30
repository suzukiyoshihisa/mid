import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      iamge: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "山田太郎",
      position: "代表取締役",
      profile: "グローバル企業での運営経験とベンチャー企業での起業経験を持つ。大手IT企業で10年以上のプロジェクトマネジメント経験を積んだ後、2015年に当社を設立。顧客第一主義の理念のもと、革新的なソリューションの開発とチーム育成に注力。データ分析と人工知能技術を活用した新規事業の立ち上げを成功に導き、業界内で高い評価を得る。趣味は登山とピアノ。休日は家族との時間を大切にしている。"
    },
    {
      id: "2",
      iamge: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "佐藤花子",
      position: "取締役",
      profile: "大手広告代理店でのマーケティング経験を活かし、当社のマーケティング戦略を担当。デジタル広告の企画・運用において高い専門性を持ち、多くのクライアントから支持を受ける。また、自社プロダクトの開発にも携わり、ユーザビリティの向上に貢献。趣味は旅行と読書。特に海外の文化に興味を持ち、年に数回海外旅行に出かけている。"
    },
    {
      id: "3",
      iamge: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "鈴木一郎",
      position: "取締役",
      profile: "大手IT企業でのエンジニアリング経験を活かし、当社の技術戦略を担当。最新の技術トレンドを追い求め、データ分析と人工知能技術を駆使したソリューションの開発に従事。また、自社プロダクトの開発にも携わり、ユーザビリティの向上に貢献。趣味はサッカーと読書。特にサッカーは幼少期からの夢であり、週末はサッカーチームでプレーしている。"
    }
  ],
}

export default function Page() {
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (<p className={styles.empty}>メンバーがいません</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                className={styles.image}
                src={member.iamge.url}
                alt=""
                width={member.iamge.width}
                height={member.iamge.height}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}