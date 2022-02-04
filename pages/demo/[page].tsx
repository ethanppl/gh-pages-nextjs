import { useRouter } from 'next/router';
import Footer from '../../components/footer';
import styles from '../../styles/Home.module.css';

const Page = () => {
  const router = useRouter();
  const { page } = router.query;

  let imgPath = undefined;
  switch (page) {
    case 'cat':
      imgPath = '/cat.jpg';
      break;
    case 'dog':
      imgPath = '/dog.jpeg';
      break;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{page?.toString()}</h1>
        {imgPath ? <img src={imgPath} alt={imgPath} width={'40%'}></img> : null}
        <br />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
