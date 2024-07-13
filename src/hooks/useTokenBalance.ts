import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import cakeABI from 'config/abi/cake.json'
import titanPresale from 'config/abi/TT_Presale.json'
import { getContract } from 'utils/web3'
import { getTokenBalance } from 'utils/erc20'
import { getCakeAddress } from 'utils/addressHelpers'
import useRefresh from './useRefresh'

const useTokenBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getTokenBalance(ethereum, tokenAddress, account)
      setBalance(new BigNumber(res))
    }

    if (account && ethereum) {
      fetchBalance()
    }
  }, [account, ethereum, tokenAddress, fastRefresh])

  return balance
}

export const useTotalTokenSupply = (tokenAddress: string) => {
  const { fastRefresh } = useRefresh()
  const [totalSupply, setTotalSupply] = useState <BigNumber>()

  useEffect(() => {
    async function fetchTotalSupply() {
      const cakeContract = getContract(cakeABI, tokenAddress)
      const supply = await cakeContract.methods.totalSupply().call()
      setTotalSupply(new BigNumber(supply))
    }

    fetchTotalSupply()
  }, [tokenAddress, fastRefresh])

  return totalSupply
}

export const useTitanperBNB = (tokenAddress: string) => {
  const { fastRefresh } = useRefresh()
  const [titanPerBNB, setTotalSupply] = useState <BigNumber>()

  useEffect(() => {
    async function fetchTotalSupply() {
      const cakeContract = getContract(titanPresale, tokenAddress)
      const supply = await cakeContract.methods.tokenPerBNB().call()
      setTotalSupply(new BigNumber(supply))
    }

    fetchTotalSupply()
  }, [tokenAddress, fastRefresh])

  return titanPerBNB
}

export const useTokenContractBalance = (tokenAddress: string, contractAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const cakeContract = getContract(cakeABI, tokenAddress)
      const bal = await cakeContract.methods.balanceOf(contractAddress).call()
      setBalance(new BigNumber(bal))
    }

    fetchBalance()
  }, [tokenAddress, contractAddress, fastRefresh])

  return balance
}

export const useTotalSupply = () => {
  const { fastRefresh } = useRefresh()
  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  useEffect(() => {
    async function fetchTotalSupply() {
      const cakeContract = getContract(cakeABI, getCakeAddress())
      const supply = await cakeContract.methods.totalSupply().call()
      setTotalSupply(new BigNumber(supply))
    }

    fetchTotalSupply()
  }, [fastRefresh])

  return totalSupply
}

export const useLpBalance = (tokenAddress: string, LpAddress: string) => {
  const [balance, setBalance] = useState<BigNumber>()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getContract(cakeABI, tokenAddress)
      const res = await contract.methods.balanceOf(LpAddress)
      setBalance(new BigNumber(res.toString()))
    }

    fetchBalance()
  }, [tokenAddress, LpAddress, fastRefresh])

  return balance
}


export const useBurnedBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const cakeContract = getContract(cakeABI, tokenAddress)
      const bal = await cakeContract.methods.balanceOf('0x000000000000000000000000000000000000dEaD').call()
      setBalance(new BigNumber(bal))
    }

    fetchBalance()
  }, [tokenAddress, fastRefresh])

  return balance
}

export default useTokenBalance
