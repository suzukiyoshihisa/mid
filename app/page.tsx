import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

import { News } from "@/app/_libs/microcms";

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "テストテキストテストテキストテストテキスト",
      category: {
        name: "更新情報"
      },
      publishedAt: "2021-01-01",
      createdAt: "2021-01-01",
    },
    {
      id: "2",
      title: "新しい更新情報があります",
      category: {
        name: "更新情報"
      },
      publishedAt: "2021-01-01",
      createdAt: "2021-01-01",
    },
    {
      id: "3",
      title: "テストテキスト",
      category: {
        name: "更新情報"
      },
      publishedAt: "2021-01-01",
      createdAt: "2021-01-01",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>Hello World</h1>
          <p className={styles.description}>テクノロジーの力で世界を変える</p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
