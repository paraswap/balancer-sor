import { BaseProvider } from '@ethersproject/providers';
import { BigNumber } from 'bignumber.js';

declare function scale(input: BigNumber, decimalPlaces: number): BigNumber;
declare function bnum(val: string | number | BigNumber): BigNumber;

declare enum SwapTypes {
    SwapExactIn = 0,
    SwapExactOut = 1
}
declare enum PoolTypes {
    Weighted = 0,
    Stable = 1,
    Element = 2,
    MetaStable = 3
}
declare enum SwapPairType {
    Direct = 0,
    HopIn = 1,
    HopOut = 2
}
declare enum PairTypes {
    BptToToken = 0,
    TokenToBpt = 1,
    TokenToToken = 2
}
interface SwapOptions {
    gasPrice: BigNumber;
    swapGas: BigNumber;
    timestamp: number;
    maxPools: number;
    poolTypeFilter: PoolFilter;
    forceRefresh: boolean;
}
interface PoolPairBase {
    balanceIn: BigNumber;
    balanceOut: BigNumber;
    poolType: PoolTypes;
    pairType: PairTypes;
    tokenIn: string;
    tokenOut: string;
    decimalsIn: number;
    decimalsOut: number;
}
interface Swap {
    pool: string;
    tokenIn: string;
    tokenOut: string;
    swapAmount?: string;
    limitReturnAmount?: string;
    maxPrice?: string;
    tokenInDecimals: number;
    tokenOutDecimals: number;
}
interface SubgraphPoolBase {
    id: string;
    address: string;
    poolType: string;
    swapFee: string;
    totalShares: string;
    tokens: SubGraphToken[];
    tokensList: string[];
    totalWeight?: string;
    amp?: string;
    expiryTime?: number;
    unitSeconds?: number;
    principalToken?: string;
    baseToken?: string;
    swapEnabled?: boolean;
}
interface SubGraphToken {
    address: string;
    balance: string;
    decimals: string | number;
    weight?: string;
    priceRate?: string;
}
interface SwapV2 {
    poolId: string;
    assetInIndex: number;
    assetOutIndex: number;
    amount: string;
    userData: string;
}
interface SwapInfo {
    tokenAddresses: string[];
    swaps: SwapV2[];
    swapAmount: BigNumber;
    swapAmountForSwaps?: BigNumber;
    returnAmount: BigNumber;
    returnAmountFromSwaps?: BigNumber;
    returnAmountConsideringFees: BigNumber;
    tokenIn: string;
    tokenOut: string;
    marketSp: BigNumber;
}
interface PoolDictionary {
    [poolId: string]: PoolBase;
}
interface PoolPairDictionary {
    [tokenInOut: string]: PoolPairBase;
}
interface NewPath {
    id: string;
    swaps: Swap[];
    poolPairData: PoolPairBase[];
    limitAmount: BigNumber;
    pools: PoolBase[];
    filterEffectivePrice?: BigNumber;
}
declare enum PoolFilter {
    All = "All",
    Weighted = "Weighted",
    Stable = "Stable",
    MetaStable = "MetaStable",
    LBP = "LiquidityBootstrapping"
}
interface PoolBase {
    poolType: PoolTypes;
    swapPairType: SwapPairType;
    id: string;
    address: string;
    tokensList: string[];
    parsePoolPairData: (tokenIn: string, tokenOut: string) => PoolPairBase;
    getNormalizedLiquidity: (poolPairData: PoolPairBase) => BigNumber;
    getLimitAmountSwap: (poolPairData: PoolPairBase, swapType: SwapTypes) => BigNumber;
    updateTokenBalanceForPool: (token: string, newBalance: BigNumber) => void;
    _exactTokenInForTokenOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _exactTokenInForBPTOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _exactBPTInForTokenOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _tokenInForExactTokenOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _tokenInForExactBPTOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _BPTInForExactTokenOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _spotPriceAfterSwapExactTokenInForTokenOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _spotPriceAfterSwapExactTokenInForBPTOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _spotPriceAfterSwapExactBPTInForTokenOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _spotPriceAfterSwapTokenInForExactTokenOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _spotPriceAfterSwapTokenInForExactBPTOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _spotPriceAfterSwapBPTInForExactTokenOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _derivativeSpotPriceAfterSwapExactTokenInForBPTOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _derivativeSpotPriceAfterSwapExactBPTInForTokenOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _derivativeSpotPriceAfterSwapTokenInForExactBPTOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _derivativeSpotPriceAfterSwapBPTInForExactTokenOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _evmoutGivenIn: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _evmexactTokenInForBPTOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _evmexactBPTInForTokenOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _evminGivenOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _evmtokenInForExactBPTOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
    _evmbptInForExactTokenOut: (poolPairData: PoolPairBase, amount: BigNumber) => BigNumber;
}
interface WeightedPool extends PoolBase {
    totalWeight: string;
}

declare class PoolCacher {
    private provider;
    private chainId;
    private poolsUrl;
    private pools;
    finishedFetchingOnChain: boolean;
    constructor(provider: BaseProvider, chainId: number, poolsUrl?: string | null, initialPools?: SubgraphPoolBase[]);
    getPools(): SubgraphPoolBase[];
    isConnectedToSubgraph(): boolean;
    fetchPools(poolsData?: SubgraphPoolBase[], isOnChain?: boolean): Promise<boolean>;
    private fetchOnChainBalances;
}

declare class SwapCostCalculator {
    private provider;
    private chainId;
    private tokenDecimalsCache;
    private tokenPriceCache;
    private initializeCache;
    constructor(provider: BaseProvider, chainId: number);
    /**
     * Sets the chain ID to be used when querying asset prices
     * @param chainId - the chain ID of the chain to switch to
     */
    setChainId(chainId: number): void;
    /**
     * @param tokenAddress - the address of the token for which to express the native asset in terms of
     * @param tokenPrice - the price of the native asset in terms of the provided token
     */
    getNativeAssetPriceInToken(tokenAddress: string): Promise<BigNumber>;
    /**
     * @param tokenAddress - the address of the token for which to express the native asset in terms of
     * @param tokenPrice - the price of the native asset in terms of the provided token
     */
    setNativeAssetPriceInToken(tokenAddress: string, tokenPrice: string): void;
    /**
     * @dev Caches the number of decimals for a particular token to avoid onchain lookups
     * @param tokenAddress - the address of the provided token
     * @param decimals - the number of decimals of the provided token
     */
    setTokenDecimals(tokenAddress: string, decimals: number): void;
    /**
     * Calculate the cost of spending a certain amount of gas in terms of a token.
     * This allows us to determine whether an increased amount of tokens gained
     * is worth spending this extra gas (e.g. by including an extra pool in a swap)
     */
    convertGasCostToToken(tokenAddress: string, gasPriceWei: BigNumber, swapGas?: BigNumber): Promise<BigNumber>;
    private getTokenDecimals;
}

declare class SOR {
    provider: BaseProvider;
    chainId: number;
    poolCacher: PoolCacher;
    private routeProposer;
    swapCostCalculator: SwapCostCalculator;
    private readonly defaultSwapOptions;
    constructor(provider: BaseProvider, chainId: number, poolsSource: string | null, initialPools?: SubgraphPoolBase[]);
    getPools(): SubgraphPoolBase[];
    fetchPools(poolsData?: SubgraphPoolBase[], isOnChain?: boolean): Promise<boolean>;
    getSwaps(tokenIn: string, tokenOut: string, swapType: SwapTypes, swapAmount: BigNumber, swapOptions?: Partial<SwapOptions>): Promise<SwapInfo>;
    getCostOfSwapInToken(outputToken: string, gasPrice: BigNumber, swapGas?: BigNumber): Promise<BigNumber>;
    private processSwaps;
    /**
     * Find optimal routes for trade from given candidate paths
     */
    private getOptimalPaths;
}

declare function BPTForTokensZeroPriceImpact$1(balances: BigNumber[], decimals: number[], normalizedWeights: BigNumber[], amounts: BigNumber[], bptTotalSupply: BigNumber): BigNumber;

declare function BPTForTokensZeroPriceImpact(balances: BigNumber[], decimals: number[], amounts: BigNumber[], // This has to have the same lenght as allBalances
bptTotalSupply: BigNumber, amp: BigNumber, priceRates?: BigNumber[]): BigNumber;

export { NewPath, PairTypes, PoolBase, PoolDictionary, PoolFilter, PoolPairBase, PoolPairDictionary, PoolTypes, SOR, SubGraphToken, SubgraphPoolBase, Swap, SwapInfo, SwapOptions, SwapPairType, SwapTypes, SwapV2, WeightedPool, bnum, scale, BPTForTokensZeroPriceImpact as stableBPTForTokensZeroPriceImpact, BPTForTokensZeroPriceImpact$1 as weightedBPTForTokensZeroPriceImpact };
