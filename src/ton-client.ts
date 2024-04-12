import { mnemonicToPrivateKey } from "@ton/crypto";
import { TonClient, WalletContractV4 } from "@ton/ton";

export const tonClient = new TonClient({
    endpoint: process.env.RPC_ENDPOINT!,
    apiKey: process.env.API_KEY!
})

export async function getWalletAndSender() {
    const mnemonic = process.env.MNEMONIC!;
    const keyPair = await mnemonicToPrivateKey(mnemonic.split(' '));
    const walletContract = WalletContractV4.create({
        workchain: 0,
        publicKey: keyPair.publicKey
    })
    const sender = walletContract.sender(tonClient.provider(walletContract.address), keyPair.secretKey)

    return {
        walletContract,
        sender
    }
}
