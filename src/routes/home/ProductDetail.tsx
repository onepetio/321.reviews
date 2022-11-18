import styles from './ProductDetail.module.scss';


export default function ProductDetail() {
  return (
    <div style={{ padding: '1rem' }} className="card">
      <div className={styles.flex}>
        <div>닥터레이 오메가 3</div>
        <div>닥터레이</div>
      </div>
      <div className={styles.grid}>
        <img width={750} src="https://choandkang.com/web/product/medium/202206/b4d7aa86f81b6e58866bdd2856ec6c15.png" />
        <div>
          <span><strong>평균 4.9</strong>/5</span>
          <span>불쾌지수 0.5</span>
          <span>최근 x일 리뷰수 27</span>
        </div>
      </div>

    </div>
  )
}
