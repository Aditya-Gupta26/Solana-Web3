const solana = require('@solana/web3.js');
const a = async() => {
const connection = new solana.Connection(solana.clusterApiUrl("devnet"),"confirmed");
let keypair = solana.Keypair.generate()
let publicKey = keypair.publicKey;
let tokenAmount = await connection.getBalance(publicKey);
console.log(`amount : ${tokenAmount}`);

}
a();
