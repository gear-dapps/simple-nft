import { useAccount } from '@gear-js/react-hooks';
import { useLayoutEffect } from 'react';
import { Welcome } from 'features/welcome';
import { NFTs, useNFTs } from 'features/nfts';
import { useContractAddress } from 'features/contract-address';

function Home() {
  const { account } = useAccount();
  const contractAddress = useContractAddress();
  const list = useNFTs();

  useLayoutEffect(() => {
    if (!contractAddress) return document.body.classList.add('setup');

    document.body.classList.add('active');

    return () => {
      document.body.classList.value = '';
    };
  }, [contractAddress]);

  return (
    <>
      <Welcome />
      {account && contractAddress && <NFTs list={list} />}
    </>
  );
}

export { Home };
