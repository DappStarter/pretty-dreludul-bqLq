require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name rate sister pulse install casual force genius'; 
let testAccounts = [
"0xe465c5cf42f49779f8f087ee2f28a9e5273eabc6f295029f0fc9abe5626a611d",
"0x35cf0e9c1bc573079101d705c3a40c296f93de1c8931ca27266f52ea5764473c",
"0x21cb877212579327ba46e95fa8b7f7b31763a1d159bfb994ca881e3cc8f2d450",
"0x6607c17db93133f942374c421b009e6f01b8238714b2e1eb30035f5f0030f6d5",
"0x8782adda4482283320c34603559a1d65d10fbd16b8a1ae3c1d5f4cbdeb82ac62",
"0xee25451cfcd570e261f551d95147bb031bb19500730fdd18fb33af6250ca778a",
"0x279758e5dac18733184c35271dc726c0050cc4a8a62f0b3e5ec74137852d61bc",
"0x97396d452db815e5b68698416a845d39e3460ef0553da1ff2b82536458cea1f6",
"0xffe12cf3c60520e963720499ff92bfba8a5c496441681c355df827a0d3d18fe3",
"0x6f9ca4a413040adeaadc2ac1ff045a3411242d88f7c457e60eeb0c4e49f031c4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


