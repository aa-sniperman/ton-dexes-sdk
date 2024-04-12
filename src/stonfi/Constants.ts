import { Address, toNano } from "@ton/core"
import { Router } from "./Router"
import { tonClient } from "../ton-client"

export const STONFI_OP = {
  SWAP: 0x25938561n,
  TRANSFER: 0xf8a7ea5n,
  TRANSFER_NOTIFICATION: 0x7362d09cn,
  INTERNAL_TRANSFER: 0x178d4519n,
  EXCESSES: 0xd53276dbn,
  BURN: 0x595f07bcn,
  BURN_NOTIFICATION: 0x7bdd97den
}

export const STONFI_ADDRESS = {
  ROUTER: Address.parse('EQBsGx9ArADUrREB34W-ghgsCgBShvfUr4Jvlu-0KGc33Rbt')
}

export const STONFI_DEFAULT_PARAMS = {
  FORWARD_TON: toNano('0.2'),
  TIP_TON: toNano('0.1')
}

export const STONFI_CONTRACTS = {
  ROUTER: tonClient.open(Router.createFromAddress(STONFI_ADDRESS.ROUTER)),
  ROUTER_TON_WALLET: tonClient.open(Router.createFromAddress(STONFI_ADDRESS.ROUTER))
}