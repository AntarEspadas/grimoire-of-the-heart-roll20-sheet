const production = process.env.NODE_ENV == "production"

export const csr = !production
export const prerender = true