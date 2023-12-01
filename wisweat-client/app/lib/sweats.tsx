export async function getAllSweats() {
  const sweats = await fetch(`${process.env.SERVER_URI}/api/sweat/`);

  if (!sweats.ok) {
    throw new Error("Failed to fetch sweats")
  }

  const res = await sweats.json()
  // console.log(res)
  // await delay(2000)
  return res
}

export async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}