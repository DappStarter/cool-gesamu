require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food iron rifle mad push coral light army gas'; 
let testAccounts = [
"0x19e4ac9f821d1d9f3d9ce101522052644b5258dcea0a9a19ee157c2c9186f545",
"0x23166139b79f7c69d76a9406134d4642dc3470364e8f9ce4a32b9ae6e3d0656b",
"0xdfa39c062ceb2b0107c1271bb968006d376fed761bf9d06bfe910ccf0333059f",
"0x435c9421db832b1c5c664b6f47e6175d2bca5fafb0fac2a0fa44b6db6813b3d0",
"0x0833e4d7660ef18b403521c9b88e0b60f067114ecad8255348c588594d2ca879",
"0xaedc3aaf2df27c9d1d2652383710aac1e44f160fce224c01359ab8262e9247ef",
"0x129b1c503344021b54c01d3e28b398809ff46ec4c917227dffebed74a1317bb7",
"0x02c7f2c9536775a4fdd8a9a701161b6d4aa7c8c9fb823e2f512c14e45cdafc4d",
"0xd808f89a9c451e37414ceff82f6f15c801148437408833e828b850dd23e54e43",
"0xceda72dd5d723c100e85239ee77784ac8a692fd359fa4e52ca6f1aabe4b21136"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

