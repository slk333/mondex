export function computeDefiningStat(stats: number[]): string {
    const statMap = ["hp", "attack", "defense", "special", "speed"]
    let definingStatValue = 0
    let definingStatIndex = 0
    stats.forEach((stat, i) => {
        if (stat > definingStatValue) {
            definingStatValue = stat
            definingStatIndex = i
        }
    })
    const definingStat = `${statMap[definingStatIndex]} (${definingStatValue} )`
    return definingStat
}
