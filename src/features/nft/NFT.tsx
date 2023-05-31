import { getIpfsAddress } from 'utils';
import { Container } from 'components';
import { ReactComponent as SearchSVG } from './assets/search.svg';
import { ReactComponent as LeftArrowSVG } from './assets/arrow-left.svg';
import styles from './NFT.module.scss';

const ITEM = {
  id: '4',
  collection: 'collection',
  name: 'name',
  owner: 'owner',
  media: 'QmcXwaEzSrhjrnXGYxqv2ce3DXz2GDnXv1Z1V7mpkcEYfE',
  description:
    'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',

  details: [
    'first lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    'second',
    'third',
    'fourth',
    'fourth',
    'fourth',
    'fourth',
    'fourth',
    'fourth',
    'fourth',
    'fourth',
    'fourth',
    'fourth',
    'fourth',
    'fourth',
    'fourth',
    'fourth',
    'fourth',
    'fourth',
  ],
};

function NFT() {
  const { collection, name, owner, media, description, details } = ITEM;
  const src = getIpfsAddress(media);

  const getDetails = () =>
    details.map((detail) => (
      <li key={detail} className={styles.detail}>
        {detail}
      </li>
    ));

  return (
    <Container className={styles.container}>
      <div>
        <div className={styles.imageWrapper}>
          <img src={src} alt="" />
        </div>

        <div className={styles.footerWrapper}>
          <footer className={styles.footer}>
            <p className={styles.owner}>
              <span className={styles.ownerHeading}>Owner:</span>
              <span className={styles.ownerText}>{owner}</span>
            </p>
          </footer>
        </div>
      </div>

      <div>
        <div>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.collection}>{collection}</p>
          <p className={styles.description}>{description}</p>

          <div>
            <header className={styles.header}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="search" className={styles.label}>
                NFT Details:
              </label>

              <div className={styles.inputWrapper}>
                <SearchSVG />
                <input type="text" placeholder="Search" id="search" />
              </div>
            </header>

            <ul className={styles.details}>{getDetails()}</ul>
          </div>
        </div>

        <button type="button" className={styles.backButton}>
          <LeftArrowSVG />
          <span>Back</span>
        </button>
      </div>
    </Container>
  );
}

export { NFT };