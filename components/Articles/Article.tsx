import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import Link from "next/link";

interface ArticleProps {
  label: string;
  author: string;
  imgSource: any;
  info: string;
}

const Article: React.FC<ArticleProps> = ({
  label,
  author,
  imgSource,
  info,
}) => {
  return (
    <div className={styles.article_wrapper}>
      <Image src={imgSource} alt={label} />
      <article>
        <div>
          By <span itemProp="author">{author}</span>
        </div>
        <Link className={styles.article_label} href="#" aria-label={label}>
          {label}
        </Link>
        <p>{info}</p>
      </article>
    </div>
  );
};

export default Article;
