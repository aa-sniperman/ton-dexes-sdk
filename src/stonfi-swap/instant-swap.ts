import dotenv from "dotenv";
import { getWalletAndSender, tonClient } from "../ton-client";
import { Address, beginCell } from "@ton/core";
import { JettonMaster, JettonWallet } from "@ton/ton";
import { STONFI_ADDRESS, STONFI_OP } from "../stonfi/Constants";
dotenv.config();

export interface JettonBuyParams {
    jettonAddress: string,
    tonIn: bigint,
    slippage: number,
    tipTON?: bigint,
    forwardTON?: bigint,
}

export interface JettonSellParams {
    jettonAddress: string,
    jettonIn: bigint,
    slippage: number,
    tipTON?: bigint,
    forwardTON?: bigint,
}

export async function buyJetton(
    params: JettonBuyParams
) {
    const { sender, walletContract } = await getWalletAndSender();

    const jettonMasterAddress = Address.parse(params.jettonAddress);
    const jettonMasterContract = tonClient.open(JettonMaster.create(jettonMasterAddress))

    const routerJettonWalletAddress = await jettonMasterContract.getWalletAddress(STONFI_ADDRESS.ROUTER);
    const routerTONWalletContract = tonClient.open(JettonWallet.create(STONFI_ADDRESS.ROUTER));

    const msgBodyForSwap = beginCell()
        .storeUint(STONFI_OP.SWAP, 32)
        .storeAddress(routerJettonWalletAddress)
        .storeCoins()
}


export async function sellJetton(
    params: JettonSellParams
) {
    const { sender, walletContract } = await getWalletAndSender();


}