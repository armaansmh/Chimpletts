import React from 'react'
import Roadmapelement from './Roadmapelement'

export default function Roadmap() {
  return (
      <div style={{ backgroundColor: 'rgb(0, 26, 68)' }} className="roadmap p-9 relative flex flex-col gap-6 items-center border-t border-white justify-center min-h-screen w-screen">
            <h1 className="text-3xl font-bold text-white underline">ROADMAP.</h1>
            <Roadmapelement phase={"Phase 1"} description={"Mint of 444 Companion Chimpetts and Listing on Secondary Marketplace"} />
            <Roadmapelement phase={"Phase 2"} description={"With charming art comes charming Community. 100% of the royalties will go the the community vault which will be used to buy blue-chip NFTs, buy back and burning the nfts, etc. The Holders DAO will have 100% control of it."} />
            <Roadmapelement phase={"Phase 3"} description={"Launch of $CHMPT Token Staking, Breeding and Airdropping of Baby Chimpetts to our holders TheChimpetts are a collection of 444 female Chimps wildin out on the Solana Blockchain. They can be a cute companion to your Chimpion. Not affiliated with 'TheChimpions'"} />
      </div>
  )
}
