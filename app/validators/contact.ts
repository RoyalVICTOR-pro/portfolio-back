import vine from '@vinejs/vine'

export const createContactValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3),
    email: vine.string().trim().email(),
    phone: vine.string().trim().optional(),
    message: vine.string().trim().minLength(10),
  })
)
