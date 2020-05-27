// testing multi-hop
console.log('Started');
const sor = require('../src');
const BigNumber = require('bignumber.js');
const ethers = require('ethers');

const MAX_UINT = ethers.constants.MaxUint256;

// MAINNET
// let tokenIn = '0x6b175474e89094c44da98b954eedeac495271d0f'; // DAI
// let tokenOut = '0xc011a72400e58ecd99ee497cf89e3775d4bd732f'; // SNX
// const tokenIn = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // DAI
// const tokenOut = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'; // WETH
// const tokenIn = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // DAI
// const tokenOut = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'; // USDC
// const tokenOut = '0x0327112423f3a68efdf1fcf402f6c5cb9f7caaaa'; // Token that does not exist
// const tokenOut = '0x0327112423f3a68efdf1fcf402f6c5cb9f7c33fd'; // BTC++
// const tokenIn = '0x0d8775f648430679a709e98d2b0cb6250d2887ef'; // BAT
// const tokenOut = '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'; // MKR
let tokenIn = '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2'; // MKR
let tokenOut = '0x960b236A07cf122663c4303350609A66A7B288C0'; // ANT

// KOVAN
// const tokenIn = '0x1528f3fcc26d13f7079325fb78d9442607781c8c'; // DAI
// const tokenOut = '0x2f375e94fc336cdec2dc0ccb5277fe59cbf1cae5'; // USDC
// const tokenIn = '0x37f03a12241e9fd3658ad6777d289c3fb8512bc9'; // ANT
// const tokenOut = '0xd0a1e359811322d97991e03f863a0c30c2cf029c'; // WETH
// const tokenOut = '0x0327112423f3a68efdf1fcf402f6c5cb9f7caaaa'; // Token that does not exist
// const tokenOut = '0xe0c9275e44ea80ef17579d33c55136b7da269aeb'; // wBTC

const swapType = 'swapExactIn';
// const swapType = 'swapExactOut';
// const swapAmount = new BigNumber('10094007593337980162'); // 1 * 10**18
// const swapAmount = new BigNumber('10296143'); // 1 * 10**6
const swapAmount = new BigNumber('10' + '000000000000000000'); // 10 + `10**18`
const maxPools = new BigNumber('4');
const returnTokenCostPerPool = new BigNumber('0');
// const returnTokenCostPerPool = new BigNumber('1000000000000'); // It costs 0.0000001 returnToken per pool trade

// const tokenOut = '0x27054b13b1b798b345b591a4d22e6562d47ea75a'; // AST

// const tokenOut = '0x39aa39c021dfbae8fac545936693ac917d5e7563'; // cUSDC

(async function() {
    //// We find all pools with the direct trading pair (tokenIn -> tokenOut)
    // TODO avoid another subgraph call by filtering pools with single tokenIn AND tokenOut
    const directPools = await sor.getPoolsWithTokens(tokenIn, tokenOut);

    let pools;

    let pathDataDirectPoolsOnly;
    [pools, pathDataDirectPoolsOnly] = sor.parsePoolData(
        directPools,
        tokenIn,
        tokenOut
    );

    // console.log('pathDataDirectPoolsOnly');
    // pathDataDirectPoolsOnly.forEach((pathDataDirectPoolsOnly, i) => {
    //     console.log(pathDataDirectPoolsOnly.id);
    //     console.log(pathDataDirectPoolsOnly.swaps);
    // });

    // console.log("direct pools");
    // console.log(directPools);

    const [
        sorSwapsDirectPoolsOnly,
        totalReturnDirectPoolsOnly,
    ] = sor.smartOrderRouterMultiHop(
        // pools,
        JSON.parse(JSON.stringify(pools)), // Passing clone to avoid change in original pools
        pathDataDirectPoolsOnly,
        swapType,
        swapAmount,
        maxPools,
        returnTokenCostPerPool
    );
    console.log('SOR swaps WITHOUT multi-hop');
    console.log(sorSwapsDirectPoolsOnly);
    console.log('Total return WITHOUT multi-hop');
    console.log(totalReturnDirectPoolsOnly.toString());

    let mostLiquidPoolsFirstHop, mostLiquidPoolsSecondHop, hopTokens;
    [
        mostLiquidPoolsFirstHop,
        mostLiquidPoolsSecondHop,
        hopTokens,
    ] = await sor.getMultihopPoolsWithTokens(tokenIn, tokenOut);

    // console.log('hopTokens');
    // console.log(hopTokens);
    // console.log("mostLiquidPoolsFirstHop");
    // console.log(mostLiquidPoolsFirstHop);
    // console.log("mostLiquidPoolsSecondHop");
    // console.log(mostLiquidPoolsSecondHop);
    let pathData;
    [pools, pathData] = sor.parsePoolData(
        directPools,
        tokenIn,
        tokenOut,
        mostLiquidPoolsFirstHop,
        mostLiquidPoolsSecondHop,
        hopTokens
    );

    // console.log('pathData');
    // pathData.forEach((path, i) => {
    //     console.log(path.id);
    //     console.log(path.swaps);
    // });

    const [sorSwaps, totalReturn] = sor.smartOrderRouterMultiHop(
        // pools,
        JSON.parse(JSON.stringify(pools)), // Passing clone to avoid change in original pools
        pathData,
        swapType,
        swapAmount,
        maxPools,
        returnTokenCostPerPool
    );
    console.log('SOR swaps WITH multi-hop');
    console.log(sorSwaps);
    console.log('Total return WITH multi-hop');
    console.log(totalReturn.toNumber() / 10 ** 18);

    // // let [directTokenPairs, allTokenPairs] = await sor.getTokenPairsMultiHop(
    // //     tokenIn
    // // );
    // // console.log('directTokenPairs');
    // // console.log(directTokenPairs);
    // // console.log('allTokenPairs');
    // // console.log(allTokenPairs);
})();