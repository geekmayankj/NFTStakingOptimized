import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  '9CqZuwdL3GV9jwUgkk4oUGwTjDw6ukdKtufWrhv9vNud'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  '2Ufhry6LdZgBMmHikNznygFwoTwdW2pQAebkDKUmsTAG'
);
