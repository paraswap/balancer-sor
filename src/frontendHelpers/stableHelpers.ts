import { BigNumber, bnum, scale, ZERO } from '../utils/bignumber';
import * as stableMath from '../pools/stablePool/stableMath';

/////////
/// UI Helpers
/////////

// Get BPT amount for token amounts with zero-price impact
// This function is the same regardless of whether we are considering
// an Add or Remove liquidity operation: The spot prices of BPT in tokens
// are the same regardless.
export function BPTForTokensZeroPriceImpact(
    balances: BigNumber[],
    decimals: number[],
    amounts: BigNumber[], // This has to have the same lenght as allBalances
    bptTotalSupply: BigNumber,
    amp: BigNumber
): BigNumber {
    if (balances.length != amounts.length)
        throw 'balances and amounts have to have same length';
    // Calculate the amount of BPT adding this liquidity would result in
    // if there were no price impact, i.e. using the spot price of tokenIn/BPT

    // We need to scale down balances and amounts
    const balancesDownScaled = balances.map((balance, i) =>
        scale(balance, -decimals[i])
    );
    const amountsDownScaled = amounts.map((amount, i) =>
        scale(amount, -decimals[i])
    );

    const amountBPTOut = amountsDownScaled.reduce((acc, amount, i) => {
        const poolPairData = {
            amp: amp,
            allBalances: balancesDownScaled,
            tokenIndexIn: i,
            balanceOut: scale(bptTotalSupply, -18),
            swapFee: ZERO,
        };
        const BPTPrice = stableMath._spotPriceAfterSwapTokenInForExactBPTOut(
            ZERO,
            poolPairData
        );
        return acc.plus(amount.div(BPTPrice));
    }, ZERO);

    // We need to scale up the amount of BPT out
    return scale(amountBPTOut, 18);
}
