import { Route, Routes, redirect, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useContractAddress } from 'features/contract-address';
import { NFTs } from 'features/nfts';
import { Home } from './home';
import { NFT } from './nft';

const routes = [
  { path: '/', Page: Home },
  { path: '/:programId/:id', Page: NFT },
  { path: '/list', Page: NFTs },
];

function Routing() {
  const { pathname } = useLocation();
  const contractAddress = useContractAddress();

  const getRoutes = () => routes.map(({ path, Page }) => <Route key={path} path={path} element={<Page />} />);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (!contractAddress) redirect('/');
  }, [contractAddress]);

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
