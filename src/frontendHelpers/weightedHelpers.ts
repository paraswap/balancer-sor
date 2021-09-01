import { BigNumber, scale, ZERO } from '../utils/bignumber';
import * as weightedMath from '../pools/weightedPool/weightedMath';

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
    normalizedWeights: BigNumber[],
    amounts: BigNumber[],
    bptTotalSupply: BigNumber
): BigNumber {
    // Calculate the amount of BPT adding this liquidity would result in
    // if there were no price impact, i.e. using the spot price of tokenIn/BPT

    // We need to scale down the amounts
    const amountsDownScaled = amounts.map((amount, i) =>
        scale(amount, -decimals[i])
    );

    const amountBPTOut = amountsDownScaled.reduce((acc, amount, i) => {
        const poolPairData = {
            balanceIn: scale(balances[i], -decimals[i]),
            balanceOut: scale(bptTotalSupply, -18),
            weightIn: scale(normalizedWeights[i], -18),
            swapFee: ZERO,
        };
        const BPTPrice = weightedMath._spotPriceAfterSwapTokenInForExactBPTOut(
            ZERO,
            poolPairData
        );
        return acc.plus(amount.div(BPTPrice));
    }, ZERO);

    // We need to scale up the amount of BPT out
    return scale(amountBPTOut, 18);
}
