import { STONFI_CONTRACTS } from "../stonfi/Constants";

export async function getPoolAddress(jettonAddress: string) {
    return await STONFI_CONTRACTS.ROUTER.getPoolAddress()
}