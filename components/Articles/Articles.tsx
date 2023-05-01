import React from "react";
import Article from "./Article";
import { latestArticles } from "./latestArticles";

import styles from "./styles.module.scss";

const Articles: React.FC = () => {
  return (
    <div className={styles.block_wrapper}>
      <div className="container flex flex-col gap-[40px]">
        <h3>Latest Articles</h3>
        <div className={styles.articles_wrapper}>
          {latestArticles.map(({ id, img, label, author, info }) => {
            return (
              <Article
                key={id}
                label={label}
                author={author}
                imgSource={img}
                info={info}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
